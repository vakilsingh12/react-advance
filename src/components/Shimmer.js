import React from "react";

const Shimmer = ({resLength}) => {
  return (
    <>
      <div className="resturant-list" data-testid="shimmer">
        {Array(15)
          .fill()
          .map((res,index) => (
            <div className="shimmer-card" key={`shimmer_${index}`}></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
