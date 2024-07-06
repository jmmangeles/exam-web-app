import {
  getRequest, postRequest, deleteRequest, putRequest,
} from './RequestService';

const generateGetAction = (action, url, options, params) => (dispatch) => {
  const request = getRequest(url, options);
  request.$promise
    .then(response => dispatch({ type: action, payload: response.data, params }));
  return request;
};

const generatePostAction = (action, url, params, options) => (dispatch) => {
  const request = postRequest(url, params, options);
  request.$promise
    .then(response => dispatch({ type: action, payload: response.data, params }));

  return request;
};

const generateDeleteAction = (action, url, params) => (dispatch) => {
  const request = deleteRequest(url, params);
  request.$promise
    .then(response => dispatch({ type: action, payload: response.data, params }));
  return request;
};

const generatePutAction = (action, url, params, options) => (dispatch) => {
  const request = putRequest(url, params, options);
  request.$promise
    .then(response => dispatch({ type: action, payload: response.data, params }));

  return request;
};

const generateAction = (action, payload) => dispatch => dispatch({ type: action, payload });

export {
  generateGetAction,
  generatePostAction,
  generateDeleteAction,
  generatePutAction,
  generateAction,
};
