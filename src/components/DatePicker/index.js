import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { StyledDatePicker } from './styles';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.selected',
        clearValue: pickerRef => {
          pickerRef.clear();
        }
      });
    }
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  function handleSelectedDate(selectedDate) {
    setSelected(selectedDate);
  }

  return (
    <>
      <StyledDatePicker
        name={fieldName}
        onSelect={handleSelectedDate}
        placeholderText="Date"
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired
};
