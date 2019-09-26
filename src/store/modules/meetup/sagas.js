import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { name, description, date, location, banner_id } = payload.data;

    const meetup = { name, description, date, location, banner_id };

    yield call(api.post, 'meetups', meetup);

    toast.success('Meetup created!');

    yield put(createMeetupSuccess());
    history.push('/dashboard');
  } catch (err) {
    toast.error('Something went wrong. Try again.');
    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { meetup_id } = payload.data;

    yield call(api.put, `meetups/${meetup_id}`, payload.data);

    toast.success('Meetup updated successfully!');
    yield put(updateMeetupSuccess());
    history.push('/');
  } catch (err) {
    toast.error('Something went wrong. Try again.');
    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup)
]);
