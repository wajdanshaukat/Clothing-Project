import React from "react";
import "./Directory-style.scss";
import MenuItem from "../menu-item/menu-itemComponent";

const DirectoryComponent = () => {
    return (
        <>
            <div className="directory-menu">
                <MenuItem title="hats" id = "1" imageUrl="https://i.ibb.co/cvpntL1/hats.png" />
                <MenuItem title="jackets" id = "2" imageUrl="https://i.ibb.co/px2tCc3/jackets.png" />
                <MenuItem title="sneakers" id = "3" imageUrl="https://i.ibb.co/0jqHpnp/sneakers.png" />
                <MenuItem title="womens" id = "4" imageUrl="https://i.ibb.co/GCCdy8t/womens.png" size="large" />
                <MenuItem title="mens" id = "5" imageUrl="https://i.ibb.co/R70vBrQ/men.png" size="large" />
            </div>
        </>
    );
};

export default DirectoryComponent; 