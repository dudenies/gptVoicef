// jobdiva.service.js
import axios from 'axios';

import {
    JOBDIVA_API_URL
  } from "../router/api.routes";

export async function searchJob(searchValue) {
  try {
    const response = await axios.get(JOBDIVA_API_URL, {
      params: {
        search_value: searchValue
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching job:', error);
    throw error; // Optional: propagate the error to the caller
  }
}
