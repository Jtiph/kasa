import React from "react";
import "./Banner.css";

function Banner({ image, title }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
           {title && <h2 className="banner__title">{title}</h2>}
        </div>
    );
}

export default Banner;
