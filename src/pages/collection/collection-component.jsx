import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/Collection-itemComponent";
import { selectCollection } from "../../components/redux/shop/shop-selector";
import "./collection-style.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );

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

export default CollectionPage;
