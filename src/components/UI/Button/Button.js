import React from 'react';


const Button = (props) => (
  <button
    className={props.className}
    disabled={props.disabled ? 'disabled': ''}
    onClick={props.onButtonClick}
  >
    {props.children}
  </button>
);

export default Button;
