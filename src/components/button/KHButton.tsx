import React from 'react';
import './KHButton.scss';

const KHButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default KHButton;
