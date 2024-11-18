// src/pages/collection/collection-component.jsx
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom"; 
import CollectionItem from "../../components/collection-item/Collection-itemComponent";
import { selectCollection } from "../../components/redux/shop/shop-selector";
import "./collection-style.scss";

const CollectionPage = ({ collection }) => {
  const { collectionId } = useParams(); // Use useParams here

  useEffect(() => {
    console.log("Collection ID from URL:", collectionId);
    console.log("Mapped collection in CollectionPage:", collection);
  }, [collectionId, collection]);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { collectionId } = useParams();
  return {
    collection: selectCollection(collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);