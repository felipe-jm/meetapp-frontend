import React from 'react';

import MeetupForm from '~/components/MeetupForm';

export default function MeetupEditor({ match }) {
  const { params } = match;

  console.tron.log(params);

  return <MeetupForm />;
}
