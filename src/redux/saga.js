import { all, takeLatest, put } from "redux-saga/effects";
import { someAction } from "./saga-actions";

function* work() {
  // server return array data
  yield put();
}


function* watch() {
  yield takeLatest(someAction.type, work);
}

export default function* rootSaga() {
  yield all([watch()]);
}