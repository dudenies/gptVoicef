import axios from "axios";
import { HISTORICAL_DATA_API_URL } from "../router/api.routes";

export async function getHistoricalData(symbol) {
  return await axios.get(HISTORICAL_DATA_API_URL, {
    params: { symbol: symbol },
  });
}
