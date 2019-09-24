import React from 'react';

import api from '~/services/api';

import { Container, Meetups, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>My meetups</h1>

      <Meetups>
        <Meetup>
          <strong>Titulo do meetup</strong>
          <span>june 24, 5h</span>
        </Meetup>
        <Meetup>
          <strong>Titulo do meetup</strong>
          <span>june 24, 5h</span>
        </Meetup>
        <Meetup>
          <strong>Titulo do meetup</strong>
          <span>june 24, 5h</span>
        </Meetup>
        <Meetup>
          <strong>Titulo do meetup</strong>
          <span>june 24, 5h</span>
        </Meetup>
      </Meetups>
    </Container>
  );
}
