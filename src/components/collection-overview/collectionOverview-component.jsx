import React, { useContext } from "react";

import PreviewCollection from "../previewCollection/PreviewCollectionComponent";
import CollectionsContext from "../../contexts/collections/collections-context";

import "./collection-overview-style.scss";

const CollectionOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    (key) => collectionsMap[key]
  );

  if (!collections || collections.length === 0) return <div>Loading...</div>;

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
