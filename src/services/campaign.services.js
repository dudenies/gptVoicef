import axios from "axios";
import {
  CAMPAIGN_TEST_API_URL,CAMPAIGN_RUN_API_URL
} from "../router/api.routes";

export async function runCampaign(data) {
  try {
    const response = await axios.post(CAMPAIGN_RUN_API_URL, data);
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error('Error writing campaign data:', error);
    throw error; // Throw the error for the calling code to handle
  }
}

export async function testCampaign(data) {
  try {
    const response = await axios.post(CAMPAIGN_TEST_API_URL, data);
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error('Error writing campaign data:', error);
    throw error; // Throw the error for the calling code to handle
  }
}

export async function closeAllOpenPositions() {
  return await axios.post(CLOSE_ALL_TRADES_POSITION_API_URL);
}
