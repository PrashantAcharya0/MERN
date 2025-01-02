import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/loader.gif" alt="loader" width={100} height={100} />
    </div>
  );
};

export default Loader;
