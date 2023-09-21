// Hada a oussama fih chwia dial chatgpt flblassa dial Timer "last shown"

import React, { useState, useEffect } from 'react';
import image from './gomycode.png'

function App() {
  const [person, setPerson] = useState({
    bio: 'Student at GoMyCode School',
    imgSrc: image,
    profession: 'Junior Front-End developer',
  });
  const [show, setShow] = useState(false);
  const [lastShownTime, setLastShownTime] = useState(null);
  const [counter, setCounter] = useState(0);

  const showProfile = () => {
    setShow((prevShow) => {
      if (!prevShow) {
        setLastShownTime(new Date());

      } else {
        setLastShownTime(null);
      }
      return !prevShow;
    });
  };

  useEffect(() => {
    let time;

    if (show) {
      time = setInterval(() => {
        setCounter((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(time);
    }

    return () => {
      clearInterval(time); 
    };
  }, [show]);

  return (
    <div className="App">
      <h1>Adel Anas</h1>
      <button onClick={showProfile}>
        {show ? 'Hide Profile' : 'Show Profile'}
      </button>

      {show && (
        <div>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt={person.fullName} />
          <p>Profession: {person.profession}</p>
          {lastShownTime && (
            <p>
              Last shown: {Math.floor((new Date() - lastShownTime) / 1000)} seconds ago
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;