import React from "react";


const ImageScore = (props) => {
  const { ups, downs } = props;
  const upvotePercentage = `${100 * (ups / (ups + downs))}%`;
  const downvotePercentage = `${100 * (downs / (ups + downs))}%`;

  return (
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{ width: upvotePercentage }} className="progress-bar progress-bar-success"></div>
        <div style={{ width: downvotePercentage }} className="progress-bar progress-bar-danger"></div>
      </div>
    </div>
  );
};

export default ImageScore;