import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberOfEvents = ({ onChangeNumber }) => {
  const [value, setValue] = useState(32);

  const handleInputChange = (event) => {
    const newValue = Number(event.target.value);

    if (newValue >= 1 && newValue <= 100) {
      setValue(newValue); // Update state
      onChangeNumber(newValue); // Trigger callback only for valid input
    } else if (newValue === 0) {
      // Avoid 0 value or set to a default value
      setValue(32); // Reset to default if 0 is typed
    }
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