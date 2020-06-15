import * as types from '../constants/actionTypes';

export const createCredentials = (response) => ({
  type: types.CREATE_CREDENTIALS,
  payload: response,
});

export const getPods = (response) => ({
  type: types.GET_PODS,
  payload: response,
});

export const getNodes = (response) => ({
  type: types.GET_NODES,
  payload: response,
});

export const getDeployments = (response) => ({
  type: types.GET_DEPLOYMENTS,
  payload: response,
});

export const getServices = (response) => ({
  type: types.GET_SERVICES,
  payload: response,
});

export const getNamespaces = (response) => ({
  type: types.GET_NAMESPACES,
  payload: response,
});

export const firstLoad = () => ({
  type: types.FIRST_LOAD,
});

export const setDeployment = (response) => ({
  type: types.SET_DEPLOYMENT,
  payload: response,
});
