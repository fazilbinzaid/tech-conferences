import { call, put, take } from "redux-saga/effects";
import * as api from "../api";

function* fetchTableData(action) {
  try {
    const fetchDataResponse = yield call(api.fetchTableData);
    yield put({ type: "FETCH_TABLE_DATA_REQUEST_SUCCESS", fetchDataResponse });
  } catch (e) {
    yield put({ type: "FETCH_TABLE_DATA_REQUEST_FAILURE", message: e.message });
  }
}

function* mySaga() {
  yield take("FETCH_TABLE_DATA_REQUEST", fetchTableData);
}

export default mySaga;
