import React from 'react';

const TabContent = (props) => (
  <div className={`tabContent ${props.active? 'tabContent__active': ''}`}>
    {props.children}
  </div>
);

export default TabContent;
