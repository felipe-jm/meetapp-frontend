import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput({ name }) {
  const ref = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
        clearValue: pickerRef => {
          pickerRef.clear();
        }
      });
    }
    // eslint-disable-next-line
    }, [ref.current, fieldName]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('banner', e.target.files[0]);

    const response = await api.post('banners', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <img
          src={preview || 'https://rocketseat.com.br/static/og.png'}
          alt="Preview"
        />

        <input
          name={fieldName}
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

BannerInput.propTypes = {
  name: PropTypes.string.isRequired
};
