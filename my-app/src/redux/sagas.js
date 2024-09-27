import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setHotels } from './actions';

function* fetchHotelsSaga(action) {
  try {
    const response = yield call(axios.get, `http://localhost:5000/hotels`, {
      params: { destination: action.payload.destination }
    });
    yield put(setHotels(response.data));
  } catch (error) {
    console.error('Error fetching hotels:', error);
  }
}

export function* rootSaga() {
  yield takeLatest('FETCH_HOTELS_REQUEST', fetchHotelsSaga);
}