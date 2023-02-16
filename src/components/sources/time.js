import { useState, useEffect } from 'react';

const Time = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(refreshClock, 1000);
    return () => clearInterval(timerID);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const rendered = date.toLocaleDateString('en-US', options);

  return (
    <div className="date-time">
      <p>{rendered}</p>
      <p id="time">{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;
