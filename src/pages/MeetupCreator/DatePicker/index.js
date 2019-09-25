import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import { Container, StyledDatePicker } from './styles';

export default function DatePicker() {
  const { registerField } = useField('date');
  const [date, setDate] = useState();

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'date',
        ref: ref.current,
        path: 'props.selected'
      });
    }
  }, [ref, registerField]);

  function handleSelectedDate(selectedDate) {
    setDate(selectedDate);
  }

  return (
    <Container>
      <StyledDatePicker
        onSelect={handleSelectedDate}
        placeholderText="Date"
        selected={date}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        ref={ref}
      />
    </Container>
  );
}
