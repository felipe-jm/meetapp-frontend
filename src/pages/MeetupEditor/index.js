import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import MeetupForm from '~/components/MeetupForm';

export default function MeetupEditor({ location }) {
  const meetup_id = location.id;
  const [meetup, setMeetup] = useState();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetup_id}`);

      setMeetup(response.data);
    }

    loadMeetup();
  }, [meetup_id]);

  console.tron.log(meetup);

  return <MeetupForm />;
}

MeetupEditor.propTypes = {
  location: PropTypes.string.isRequired
};
