import React, { Component } from "react"; 
import SHOP_DATA from "./shopData";
import PreviewCollection from "../../components/previewCollection/PreviewCollectionComponent";
class ShopPage extends Component { 
  constructor(props) {
    super(props);
    this.state = {
     collections: SHOP_DATA
    }
  }

  render () {
    const { collections } = this.state;
    // console.log(collections);
    return (
      <div className="shop-page">
        {/* <h1>COLLECTION!</h1> */}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
