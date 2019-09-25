import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';
import { Form, Input } from '@rocketseat/unform';

import DatePicker from './DatePicker';
import BannerInput from './BannerInput';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from './styles';

export default function MeetupCreator() {
  const loading = useSelector(state => state.meetup.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="name" type="text" placeholder="Title" />
        <Input
          multiline
          rows="5"
          name="description"
          type="text"
          placeholder="Description"
        />
        <DatePicker name="date" />
        <Input name="location" type="location" placeholder="Location" />
        <button type="submit">
          {loading ? (
            <ReactLoading type="spin" color="#fff" height="32px" width="32px" />
          ) : (
            'Create meetup'
          )}
        </button>
      </Form>
    </Container>
  );
}
