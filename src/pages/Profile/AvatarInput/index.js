import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function Profile({ name }) {
  const ref = useRef();
  const { fieldName, defaultValue, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file'
      });
    }
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('avatar', e.target.files[0]);

    const response = await api.post('avatars', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/119/abott@adorable.png'
          }
          alt="Preview"
        />

        <input
          name={fieldName}
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired
};
