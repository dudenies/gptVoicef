import axios from "axios";
import { WEBHOOKS_API_URL } from "../router/api.routes";

export async function getWebhooks() {
  return await axios.get(WEBHOOKS_API_URL);
}

export async function createWebhook(webhookData) {
  return await axios.post(WEBHOOKS_API_URL, webhookData);
}

export async function updateWebhook(webhookId, updatedWebhookData) {
  return await axios.put(`${WEBHOOKS_API_URL}${webhookId}`, updatedWebhookData);
}

export async function deleteWebhook(webhookId) {
  return await axios.delete(`${WEBHOOKS_API_URL}${webhookId}`);
}
