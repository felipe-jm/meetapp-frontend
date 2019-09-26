import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';

import { Container, MeetupTitle, MeetupInfo } from './styles';

export default function Meetup({ location }) {
  const meetup_id = location.id;
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
            Editar
          </Link>
          <Link to="/dashboard">Cancelar</Link>
        </div>
      </MeetupTitle>

      <img
        src={
          meetup.banner
            ? meetup.banner.url
            : 'https://rocketseat.com.br/static/og.png'
        }
        alt="Meetup"
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
