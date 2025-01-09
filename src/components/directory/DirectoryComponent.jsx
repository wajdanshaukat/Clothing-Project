import React, { useContext } from "react";

import DirectoryContext from '../../contexts/directory/directory-context';

import "./Directory-style.scss";
import MenuItem from "../menu-item/menu-itemComponent";

const DirectoryComponent = () => {
  const sections = useContext(DirectoryContext);

  return (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
  );
};


export default DirectoryComponent;
