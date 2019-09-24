import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Fail to authenticate. Verify your data.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, confirmPassword } = payload;

    if (password !== confirmPassword) {
      toast.error('Password confirmation different from password.');
      yield put(signFailure());
      return;
    }

    yield call(api.post, 'users', {
      name,
      email,
      password
    });

    history.push('/');
    toast.success('Success! Log in');
    yield put(signUpSuccess());
  } catch (err) {
    toast.error('Failed to sign you up. Verify your data and try again.');
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
