import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberOfEvents = ({ onChangeNumber }) => {
  const [value, setValue] = useState(32);

  const handleInputChange = (event) => {
    const newValue = event.target.value;

    console.log('input value changed to:', newValue);

    const numericValue = newValue === '' ? '' : Number(newValue);

    setValue(numericValue);
    onChangeNumber(numericValue);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="numberOfEvents">Number of Events</label>
      <input
        id="numberOfEvents"
        type="number"
        value={value}
        onChange={handleInputChange}
        min="1"
        max="100"
        aria-label="Number of events"
      />
    </div>
  );
};

NumberOfEvents.propTypes = {
  onChangeNumber: PropTypes.func.isRequired,
};

export default NumberOfEvents;
