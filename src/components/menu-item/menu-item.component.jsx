import React from 'react';
import { withRouter } from 'react-router-dom';  
// withRouter is a higher order component: takes a function that takes a component as an arguement and returns a modified component. 

import './menu-item.styles.scss';


// CREATING OUR MENU-ITEM COMPONENT 
  // - div style has prop values equal to css
const MenuItem = ({ title, imageUrl, size }) => (
  <div className = {`${size} menu-item`}>
    <div
      className = 'background-image'
      style = {{
        backgroundImage: `url(${imageUrl})`
      }}
  />
    <div className = 'content'>
      <h1 className = 'title'>{title.toUpperCase()}</h1>
      <span className = 'subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
/*
Destructuring: by using ({title}), we're simply taking title from props; same as 'props.title'

Learned how to uppercase the title. Since javascript, any methods can be used as well.

*/

