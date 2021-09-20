import React from 'react';
import { useEffect, useState } from 'react';

export const Clock = () => {
    const [time, setTime] = useState('');
    const tick = () => {
        const time = new Date().toLocaleTimeString();
        setTime(time);
      }

      useEffect(() => {
        setInterval(tick, 1000);
      },[])

    return (
        <div>
            <h2>{time}</h2>
        </div>
    )
}
