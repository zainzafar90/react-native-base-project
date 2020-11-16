import config from 'react-native-config';
import { create, ApiResponse } from 'apisauce';

import * as ApiUrls from './apiURLs';

// --- Basic configuration for HTTP calls --- //
const api = create({
  baseURL: config.BASE_URL,
  timeout: 20000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- Request/Response Interceptors --- //
api.addRequestTransform((request) => {
  request.params = { ...request.params };
  if (config.ENV === 'development') {
    /* eslint-disable no-console */
    console.log('Request', request);
  }

  return request;
});

api.addResponseTransform((response) => {
  if (config.ENV === 'development') {
    /* eslint-disable no-console */
    console.log('Request', response);
  }

  return response;
});

// --- Authentication --- //
export async function loginUser(email: string, password: string): Promise<ApiResponse<any>> {
  return api.post(ApiUrls.AUTH, { email, password });
}

export default api;
