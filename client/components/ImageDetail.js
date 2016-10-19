import React from "react";
import ImageScore from "./ImageScore";


const ImageDetail = (props) => {

  return (
    <li className="media list-group-item">
      <div className="media-left media-middle">
        <a>
          <img src={props.image.link} height="" width="" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.image.title}</h4>
        <p className="">{props.image.description}</p>
        <ImageScore ups={props.image.ups} downs={props.image.downs} />
      </div>
    </li>
  );
};

export default ImageDetail;