import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import queryString from 'query-string';

import api from '~/services/api';
import history from '~/services/history';

import { Container, MeetupTitle, MeetupInfo, Image } from './styles';

export default function Meetup({ location }) {
  const [loading, setLoading] = useState(false);

  const values = queryString.parse(location.search);
  const meetup_id = values.id;

  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups?meetup_id=${meetup_id}`);

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const zonedDate = utcToZonedTime(parseISO(response.data.date), timezone);
      const formattedDate = format(zonedDate, 'MMMM d HH:mmaa');
      response.data.date = formattedDate;

      setMeetup(response.data);
    }

    loadMeetup();
  }, [meetup_id]);

  async function handleCancelMeetup(id) {
    try {
      setLoading(true);
      await api.delete(`meetups/${id}`);
      toast.success('Meetup cancelado!');
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
      <MeetupTitle>
        <h1>{meetup.name}</h1>
        <div>
          <Link
            to={{
              pathname: '/meetup_editor',
              id: meetup.id
            }}
          >
            <MdModeEdit />
            Editar
          </Link>
          <button type="button" onClick={() => handleCancelMeetup(meetup_id)}>
            <MdDeleteForever />
            {loading ? (
              <ReactLoading
                type="spin"
                color="#fff"
                height="18px"
                width="18px"
              />
            ) : (
              'Cancel meetup'
            )}
          </button>
        </div>
      </MeetupTitle>

      <Image
        src={
          meetup.banner
            ? meetup.banner.url
            : 'https://rocketseat.com.br/static/og.png'
        }
      />

      <MeetupInfo>
        <p>{meetup.description}</p>
        <div>
          <span>{meetup.date}</span>
          <span>{meetup.location}</span>
        </div>
      </MeetupInfo>
    </Container>
  );
}

Meetup.propTypes = {
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  )
};

Meetup.defaultProps = {
  location: {}
};
