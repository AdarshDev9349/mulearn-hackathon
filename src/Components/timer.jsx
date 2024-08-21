import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const countdownDate = new Date('09/07/2024'); 

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const calculateTimeLeft = () => {
    if (countdownDate) {
      const currentTime = new Date();
      const difference = countdownDate - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }
  };

  return (
    <div className="flex  justify-center items-center p-6 mt-2 rounded-lg shadow-md text-white bg-gray-900">
      {timeLeft.seconds < 0 ? (
        <div className="text-xl font-bold text-center text-red-500">Time's up!</div>
      ) : (
        <div className="flex items-center text-lg font-bold">
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl">{timeLeft.days || '00'}</span>
            <span className="text-xs">Days</span>
          </div>
          <span className="text-2xl mx-1">:</span>
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl">{timeLeft.hours || '00'}</span>
            <span className="text-xs">Hours</span>
          </div>
          <span className="text-2xl mx-1">:</span>
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl">{timeLeft.minutes || '00'}</span>
            <span className="text-xs">Minutes</span>
          </div>
          <span className="text-2xl mx-1">:</span>
          <div className="flex flex-col items-center mx-2">
            <span className="text-2xl">{timeLeft.seconds || '00'}</span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;
