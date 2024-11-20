import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../components/redux/directory/directory-selector";

import "./Directory-style.scss";
import MenuItem from "../menu-item/menu-itemComponent";

const DirectoryComponent = ({ sections = [] }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryComponent);
