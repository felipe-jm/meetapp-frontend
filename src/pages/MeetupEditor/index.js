import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from '~/components/DatePicker';
import BannerInput from '~/components/BannerInput';

import { Container } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function MeetupEditor({ location }) {
  const [updateLoading, setUpdateLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const meetup_id = location.id;
  const [meetup, setMeetup] = useState();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups?meetup_id=${meetup_id}`);

      setMeetup({
        ...response.data,
        date: parseISO(response.data.date)
      });
      setLoading(false);
    }

    loadMeetup();
  }, [meetup_id]);

  async function handleSubmit(data) {
    try {
      setUpdateLoading(true);
      const fullData = { ...data, meetup_id };
      await api.put(`meetups/${meetup_id}`, fullData);
      toast.success('Meetup updated successfully!');
      setUpdateLoading(false);
      history.push('/dashboard');
    } catch (error) {
      setUpdateLoading(false);
      const message = error.response.data.error;
      toast.error(message);
    }
  }

  return (
    <Container>
      {loading ? (
        <ReactLoading type="spin" color="#fff" height="64px" width="64px" />
      ) : (
        <Form initialData={meetup} onSubmit={handleSubmit}>
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
            {updateLoading ? (
              <ReactLoading
                type="spin"
                color="#fff"
                height="128px"
                width="12px"
              />
            ) : (
              'Update meetup'
            )}
          </button>
        </Form>
      )}
    </Container>
  );
}

MeetupEditor.propTypes = {
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  )
};

MeetupEditor.defaultProps = {
  location: {}
};
