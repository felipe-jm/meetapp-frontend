import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import api from '~/services/api';

import { Container, Meetups, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const formatedMeetups = response.data.map(meetup => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const zonedDate = utcToZonedTime(parseISO(meetup.date), timezone);
        const date = format(zonedDate, 'MMMM d HH:mmaa');

        return { ...meetup, date };
      });

      setMeetups(formatedMeetups);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <div>
        <h1>My meetups</h1>
        <Link to="/meetup_creator">New meetup</Link>
      </div>

      <Meetups>
        {meetups ? (
          meetups.map(meetup => (
            <Meetup key={meetup.id}>
              <strong>{meetup.name}</strong>
              <span>{meetup.date}</span>
            </Meetup>
          ))
        ) : (
          <h1>No meetups</h1>
        )}
      </Meetups>
    </Container>
  );
}
