import axios from "axios";
import { POSITIONS_API_URL } from "../router/api.routes";

export async function getPositions() {
  return await axios.get(POSITIONS_API_URL);
}
