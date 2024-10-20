import React from "react";
import "./Banner.scss";

function Banner({ image, title }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <div className="banner__overlay"></div>
           {title && <h2 className="banner__title">{title}</h2>}
        </div>
    );
}

export default Banner;
