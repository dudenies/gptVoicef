// const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
const BASE_API_URL ="http://127.0.0.1:5000/"


// Scaled Order API URLs
export const CAMPAIGN_DATA_API_URL = BASE_API_URL + "campaignData";

// Position API URLs
export const POSITIONS_API_URL = BASE_API_URL + "positions/";

// Historical data API URLs
export const HISTORICAL_DATA_API_URL = BASE_API_URL + "data/";

// Trades API URLs
export const TRADES_API_URL = BASE_API_URL + "trade/";
export const CANCEL_ALL_TRADES_ORDERS_API_URL = TRADES_API_URL + "cancel_all/";
export const CLOSE_ALL_TRADES_POSITION_API_URL = TRADES_API_URL + "close_all/";

