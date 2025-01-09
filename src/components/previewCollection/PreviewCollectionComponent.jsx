import React from "react";
import CollectionItem from "../collection-item/Collection-itemComponent";
import "./previewCollectionStyle.scss";
import { Link } from "react-router-dom";

const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <Link to={`/shop/${title.toLowerCase()}`} className="title-container">
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
