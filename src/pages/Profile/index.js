import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const loading = useSelector(state => state.user.loading);
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleUpdate(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleUpdate}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Your current password"
        />
        <Input
          name="password"
          type="password"
          placeholder="Your current password"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Password confirmation"
        />

        <button type="submit">
          {loading ? (
            <ReactLoading type="spin" color="#fff" height="32px" width="32px" />
          ) : (
            'Update profile'
          )}
        </button>
      </Form>
    </Container>
  );
}
