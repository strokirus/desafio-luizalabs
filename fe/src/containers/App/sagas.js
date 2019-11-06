import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestCep } from './api';
import C from './constants';

function* fetchCep() {
  try {
    const { search } = yield select(state => state.app);

    const response = yield call(requestCep, search);

    if (response.data) {
      yield put({ type: C.FETCH_CEP_SUCCESS, data: response.data });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: C.FETCH_CEP_FAILURE, error });
  }
}


function* getAppData() {
  yield takeLatest(C.FETCH_CEP_REQUEST, fetchCep);
}

export default getAppData;
