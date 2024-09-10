// src/App.js

import { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [eventCount, setEventCount] = useState(32);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getEvents();
      setEvents(allEvents.slice(0, eventCount)); // Limit the number of events
    };
    fetchEvents();
  }, [eventCount]);

  return (
    <div className="App">
      <CitySearch />
      <EventList events={events} setEventCount={setEventCount} />
    </div>
  );
};

export default App;
