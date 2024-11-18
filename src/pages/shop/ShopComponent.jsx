import React from "react";

import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection-component";
import CollectionOverview from "../../components/collection-overview/collectionOverview-component";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route index element={<CollectionOverview />} />
      <Route path="/:collectionId" element={<CollectionPage />} />
    </Routes>
  </div>
);

export default ShopPage;
