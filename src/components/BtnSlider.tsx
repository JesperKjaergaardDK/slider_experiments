import React, { Children } from 'react'

interface props {
  children: string;
  onClick: () => void;
}

function BtnSlider({children, onClick}: props) {
  return (
    <button
      onClick={onClick}
      className={children == "Next" ? "arrow arrow-right" : "arrow arrow-left"}
    >
      <p>{children}</p>
    </button>
  );
}

export default BtnSlider