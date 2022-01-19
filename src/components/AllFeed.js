import React from "react";
import SingleFeed from "./SingleFeed";

const AllFeed = ({ allFeed }) => {
  return (
    <div>
      {allFeed.map((singleFeed, key) => (
        <SingleFeed singleFeed={singleFeed} key={key} />
      ))}
    </div>
  );
};

export default AllFeed;
