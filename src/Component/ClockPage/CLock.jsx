import React, { useEffect } from 'react';
import './Clock.css';

export default function Clock() {
  const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="clock-display" aria-label="Current time">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
