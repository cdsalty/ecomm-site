import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    // destructured collections off to limit 'this.state.collections'
    const {collections} = this.state; 
    return(<div className = 'shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => ( //originally used collection instead of ...otherCollectionProps but then desctructed it from the collection
            <CollectionPreview key = {id} {...otherCollectionProps} />
          ))
        }
      </div>);
  }
}

export default ShopPage;
