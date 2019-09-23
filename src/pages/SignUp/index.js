import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('*Name is required'),
  email: Yup.string()
    .email('*Insert a valid e-mail')
    .required('*E-mail is required'),
  password: Yup.string().required('*Password is required'),
  confirmPassword: Yup.string().required('*Password confirmation is required')
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Meetapp" color="#F94D6A" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />

        <button type="submit">Sign up</button>
        <Link to="/">Already have an account? Sign in!</Link>
      </Form>
    </>
  );
}
