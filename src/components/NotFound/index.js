import React from 'react';
import error from '~/assets/404.svg';

import { Error } from './styles';

export default function NotFound() {
  return (
    <Error>
      <img src={error} alt="404" />
    </Error>
  );
}
