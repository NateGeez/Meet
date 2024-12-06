// src/App.js
import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleNumberChange = (number) => {
    setNumberOfEvents(number);
  };

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents onChangeNumber={handleNumberChange} /> <EventList />
    </div>
  );
};

export default App;
