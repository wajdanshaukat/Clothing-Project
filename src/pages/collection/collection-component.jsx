import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/Collection-itemComponent";
import CollectionsContext from "../../contexts/collections/collections-context";

import "./collection-style.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collections = useContext(CollectionsContext);
  const collection = collections[collectionId];

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
      
      <h2 className="title" >{title}</h2>
      
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
