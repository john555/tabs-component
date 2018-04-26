import React from 'react';

const TabHeader = (props) => (
  <div className={`tabHeader ${props.active? 'tabHeader__active': ''}`}
    onClick={props.onClick}>
    {props.children}
  </div>
);

export default TabHeader;
