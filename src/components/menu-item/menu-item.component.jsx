import React from 'react';

import './menu-item.styles.scss';


// CREATING OUR MENU-ITEM COMPONENT 
  // - div style has prop values equal to css
const MenuItem = ({ title, imageUrl }) => (
  <div className={`menu-item`}>
    <div 
      className = 'background-image'
      style = {{
        backgroundImage: `url(${imageUrl})`
      }} 
      />
      <div className = 'content'>
        <h1 className = 'title'>{title}</h1>
        <span className = 'subtitle'>SHOP NOW</span>
      </div>
    </div>
);

export default MenuItem;
/*
Destructuring: by using ({title}), we're simply taking title from props; same as 'props.title'
*/

// ended at 9:12sec mark