import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';

import DatePicker from '~/components/DatePicker';
import BannerInput from '~/components/BannerInput';

import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function MeetupCreator() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      await api.post('meetups', data);
      toast.success('Meetup created successfully!');
      setLoading(false);
      history.push('/dashboard');
    } catch (error) {
      setLoading(false);
      const message = error.response.data.error;
      toast.error(message);
    }
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
