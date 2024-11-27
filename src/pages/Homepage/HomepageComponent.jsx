import React from "react";
import "./HomePage-style.scss";
import DirectoryComponent from "../../components/directory/DirectoryComponent";

const HomePage = () => {
  return (
    <div className='homepage'>
      <DirectoryComponent />
    </div>
  );
};

export default HomePage;
