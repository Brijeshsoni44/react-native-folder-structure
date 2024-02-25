/* eslint-disable prettier/prettier */
import * as apiUrl from '../Utility/apiUrls';
import {callApi, callUploadApi} from '../Utility/api';

export default class BaseModel {
  static login(requestBody) {
    return callUploadApi('POST', apiUrl.loginUrl, requestBody);
  }
  static signup(requestBody) {
    return callUploadApi('POST', apiUrl.signUrl, requestBody);
  }
  
}
