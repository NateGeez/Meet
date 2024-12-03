// src/components/Event.js

import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <h2>{event.summary}</h2>
      {!showDetails && (
        <button onClick={handleToggleDetails}>Show Details</button>
      )}
      {showDetails && (
        <>
          <p className="details">{event.description}</p>
          <button onClick={handleToggleDetails}>Hide Details</button>
        </>
      )}
    </li>
  );
};

export default Event;
