import { defineEventHandler, readBody } from "h3";

// Define the expected response type from Mailchimp
interface MailchimpResponse {
  status: number;
  detail?: string;
}

// Mailchimp details
const apiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;

export default defineEventHandler(async (event) => {
  // Check if apiKey and listId are set
  if (!apiKey || !listId) {
    return {
      statusCode: 500,
      message: "Mailchimp API key or list ID is not set.",
    };
  }

  const body = await readBody(event);
  const { email, name } = body;

  // Validate email
  if (!email) {
    return {
      statusCode: 400,
      message: "Email is required",
    };
  }

  // Prepare the Mailchimp API URL
  const dc = apiKey.split('-')[1]; // The data center (for example: us20) is the part after the dash in the API key
  const mailchimpUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/`;

  console.log(`Data center: ${dc}`);
  console.log(`Mailchimp URL: ${mailchimpUrl}`);
  // Mailchimp API request body
  const data = {
    email_address: email,
    status: "subscribed", // available options: "subscribed", "pending", or "unsubscribed"
    merge_fields: {
      FNAME: name || '',
    },
  };
  console.log("Sending to Mailchimp:", JSON.stringify(data, null, 2));
  try {
    // Send the request to Mailchimp using $fetch
    const response = await $fetch<MailchimpResponse>(mailchimpUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

      // Log the entire response for debugging
      console.log("Mailchimp response:", response);
    // Check the response and handle potential errors
    if (response.status >= 400) {
      console.log("Mailchimp response error:", response);
      
      // Check if the email already exists in the list
      if (response.status === 400 && response.detail?.includes("is already a list member")) {
        return { statusCode: 400, message: "This email is already subscribed." };
      }
      
      return { statusCode: response.status, message: response.detail || "Failed to subscribe." };
    }

    return { message: "The signup was successful" };
  } catch (error:any) {
    console.error("Error during Mailchimp signup:", error);

    // Check for Mailchimp-specific errors
    if (error.status === 400 && error.data?.detail?.includes("is already a list member")) {
      return { statusCode: 400, message: "This email is already subscribed." };
    }

    // For other types of errors
    return {
      statusCode: error.status || 500,
      message: error.data?.detail || "An error occurred while processing your request. Please try again later.",
    };  
  }
});
