import React from 'react';
import { withRouter } from 'react-router-dom';  
// withRouter is a higher order component: 
  // - meaning, it takes a function that takes a component as an arguement, and returns a modified component. 
  // - takes a component and returns the modified version.  
  // - similiar to a function that gives you back a 'POWERED UP COMPONENT'
import './menu-item.styles.scss';


// CREATING OUR MENU-ITEM COMPONENT 
  // - div style has prop values equal to css
  // - access to history is thru withRouter and that it takes in the MenuItem component to give it more power
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div 
    className = {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
now that we have 'powered-up the MenuItem component, it is able to have access to those things related
to our router. 

withRouter(MenuItem) actually returns back a super powered MenuItem that now is able to have access to the
'LOCATION, MATCH and HISTORY' props from it's children

SO BY WRAPPING 'withRouter(MenuItem),' we now have access to HISTORY

*/

/* 

- want to wrap the whole div item to an 'onClick' and then push history to some URL. HOW?
      - we want these id's to be dynamically generated as well. 
      - in the example we know it will be the hat's page
 
Before:
const MenuItem = ({ title, imageUrl, size, history }) => (
  <div className = {`${size} menu-item`}>

After adding onClickconst 
const MenuItem = ({ title, imageUrl, size, history }) => (
  <div className = {`${size} menu-item`} onClick={() => history.push()}>

*/