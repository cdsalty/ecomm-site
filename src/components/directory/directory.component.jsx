import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }
// In the render, want to want to return what we have in our homepage
  render(){
    return(
      <div className = 'directory-menu'>
        {this.state.sections.map(({ title, ...restOfSectionProps }) => (
          <MenuItem title = {title} {...restOfSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

/*
I will need to return a div. Inside the div, map through the different sections.

Added in linkUrl to assist in routing 

2 ways for passing in the linkUrl:


adding linkUrl from withRouter()
{ this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
    <MenuItem title = {title} imageUrl = {imageUrl}  key = {id} size = {size} linkUrl = {linkUrl} />
))}
ORRRRR
{ this.state.sections.map(({title, imageUrl, id, size}) => (
  <MenuItem title = {title} imageUrl = {imageUrl}  key = {id} size = {size} />



*/

// call it section because each menu-item is similar to it's own section