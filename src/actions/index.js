import { createAction } from "redux-actions";

export const FETCH_TABLE_DATA_REQUEST = "FETCH_TABLE_DATA_REQUEST";
export const FETCH_TABLE_DATA_REQUEST_SUCCESS =
  "FETCH_TABLE_DATA_REQUEST_SUCCESS";
export const FETCH_TABLE_DATA_REQUEST_FAILURE =
  "FETCH_TABLE_DATA_REQUEST_FAILURE";

export const fetchTableDataRequest = createAction(FETCH_TABLE_DATA_REQUEST);
export const fetchTableDataRequestSuccess = createAction(
  FETCH_TABLE_DATA_REQUEST_SUCCESS
);
export const fetchTableDataRequestFailure = createAction(
  FETCH_TABLE_DATA_REQUEST_FAILURE
);
