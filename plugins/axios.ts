import { defineNuxtPlugin } from "#app";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: "http://localhost:3001", // Point to the Express server
  });

  nuxtApp.provide("axios", api);
});
