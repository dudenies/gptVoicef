import axios from "axios";
import { SCALED_ORDER_API_URL } from "../router/api.routes";

export async function placeScaledOrder(payload) {
  return await axios.post(SCALED_ORDER_API_URL, payload);
}
