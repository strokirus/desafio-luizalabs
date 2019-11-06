import { fork } from 'redux-saga/effects';
import appSaga from './containers/App/sagas';

const sagas = [
  appSaga,
];

export default function* root() {
  yield sagas.map(saga => fork(saga));
}
