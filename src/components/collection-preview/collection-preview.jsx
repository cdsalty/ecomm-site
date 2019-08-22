import React from 'react';

import './collection-preview.styles.scss';

// functional component that returns an outer div that contains the entire collection. Inside of it will 
// be a tile, as well as the actual items themselves. These items will be held in a div and this will be 
// actual preview where this will be overall collection preview
    /* {console.log(items)} */
const CollectionPreview = ({ title, items }) => ( // consider: 'what do you need to return and pass it in)
  <div className = 'collection-preview'>
    <h1 className = 'title'>{title.toUpperCase()}</h1>
    <div className = 'preview'>
      {items  // Performance concern??
        .filter((item, index) => index < 4) // filter the 'items,' and make sure each index is less than 4 items
        .map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
);

export default CollectionPreview;