import React from "react";
import { HomePageContainer } from "./homepage-styles";

import DirectoryComponent from "../../components/directory/DirectoryComponent";

const HomePage = () => {
  return (
    <HomePageContainer>
      <DirectoryComponent />
    </HomePageContainer>
  );
};

export default HomePage;
