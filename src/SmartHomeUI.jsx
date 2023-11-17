import React, { useState } from 'react';
import './App.css';

const SmartHomeUI = () => {
  const [roomStatus, setRoomStatus] = useState({ Room1: 0, Room2: 0, Room3: 0 });

  const handleHoverEnter = (room) => {
    setRoomStatus((prevStatus) => ({
      ...prevStatus,
      [room]: 1,
    }));
  };

  const handleHoverLeave = (room) => {
    setRoomStatus((prevStatus) => ({
      ...prevStatus,
      [room]: 0,
    }));
  };

  return (
    <div className="room-view">
      {Object.entries(roomStatus).map(([room, status]) => (
        <div
          key={room}
          className={`room ${status === 1 ? 'lights-on' : ''}`}
          onMouseEnter={() => handleHoverEnter(room)}
          onMouseLeave={() => handleHoverLeave(room)}
        >
          {room}
        </div>
      ))}
    </div>
  );
};

export default SmartHomeUI;
