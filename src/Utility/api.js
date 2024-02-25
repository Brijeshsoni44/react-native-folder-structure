/* eslint-disable prettier/prettier */
import * as AsyncStorage from './asyncStorage';

export async function callApi(methodType, apiUrl, requestBody) {
  let apiResponse;
  const reqOpts = {
    method: methodType,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);

    if (token) {
      reqOpts.headers.Authorization =
        'Bearer' + ' ' + token.replace(/['"]/g, '');
    }
    if (methodType === 'POST' || methodType === 'PUT') {
      reqOpts.body = JSON.stringify(requestBody);
    }

    const response = await fetch(apiUrl, reqOpts);
    const data = await response.json();
    

    apiResponse = {
      data,
      statusCode: response.status,
    };
  } catch (error) {
    console.log('callApiError', error);
  }
  return apiResponse;
}

export async function callUploadApi(methodType, apiUrl, requestBody) {
  let apiResponse;
  const reqOpts = {
    method: methodType,
    headers: {
      'content-type': 'multipart/form-data',
      accept: 'application/json',
    },
  };
  try {
    const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);
    // if (token) {
    //   reqOpts.headers.Authorization = `Bearer ${token}`;
    // }

    if (token) {
      reqOpts.headers.Authorization =
        'Bearer' + ' ' + token.replace(/['"]/g, '');
    }

    if (methodType === 'POST' || methodType === 'PUT') {
      reqOpts.body = requestBody;
    }
    const response = await fetch(apiUrl, reqOpts);
    const data = await response.json();
    apiResponse = {
      data,
      statusCode: response.status,
    };
  } catch (error) {
    console.log('API error Response =======>>>>>>', error);
  }
  return apiResponse;
}
