import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../previewCollection/PreviewCollectionComponent";
import { selectCollectionsForPreview } from "../../components/redux/shop/shop-selector";
import "./collection-overview-style.scss";

const CollectionOverview = ({ collections }) => {
  if (!collections || Object.keys(collections).length === 0)
    return <div>Loading...</div>;

  return (
    <div className="collection-overview">
      {Object.keys(collections).map((key) => {
        const collection = collections[key];
        return <PreviewCollection key={collection.id} {...collection} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
