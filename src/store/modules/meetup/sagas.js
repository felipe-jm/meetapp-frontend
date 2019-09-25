import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { createMeetupSuccess, createMeetupFailure } from './actions';

export function* createMeetup({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'meetups', data);

    toast.success('Meetup created!');

    yield put(createMeetupSuccess());
    history.push('/dashboard');
  } catch (err) {
    toast.error('Something went wrong. Try again.');
    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup)]);
