import React from 'react';

function GameOverBanner({variant = "sad", children}) {
  return (
    <div className={`${variant} banner`}>
      {children}
    </div>
  );
}

export default GameOverBanner;
