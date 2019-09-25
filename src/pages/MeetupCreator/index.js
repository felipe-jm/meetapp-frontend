import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import DatePicker from './DatePicker';

import { Container } from './styles';

export default function MeetupCreator() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Title" />
        <Input
          multiline
          rows="10"
          name="description"
          type="text"
          placeholder="Description"
        />
        <DatePicker name="date" />
        <Input name="location" type="text" placeholder="Location" />
        <button type="submit">Create meetup</button>
      </Form>
    </Container>
  );
}
