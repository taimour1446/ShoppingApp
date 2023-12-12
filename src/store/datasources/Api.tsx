import {createAction} from '@reduxjs/toolkit';
import {API_BASE_URL} from '../../../configurations/AppConfig';
import {create} from 'apisauce';

export const apiCallBegin = createAction<any>('apiCall/begin');

const client = create({baseURL: API_BASE_URL, timeout: 10000});
client.addAsyncRequestTransform((request: any) => async () => {
  // Do any request interceptions here like fetching user token from storage and pass in header
  request.headers.token = 123456;
  return new Promise(resolve => setTimeout(resolve, 2000));
});

client.axiosInstance.interceptors.request.use(
  (config: any) => {
    //    console.log(config);
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

export default client;
