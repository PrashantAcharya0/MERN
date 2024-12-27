'use client';
import React, { useEffect, useState } from 'react';

const Resize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
      <p className="text-3xl text-green-500 bold">Window resize</p>
      <p className="text-3xl text-orange-500 bold">
        Current window width: {windowWidth}
      </p>
    </div>
  );
};

export default Resize;
