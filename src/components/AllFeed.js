import React from "react";
import SingleFeed from "./SingleFeed";

const AllFeed = ({ allFeed }) => {
  return (
    <div>
      <h3>All Feed</h3> <br />
      {allFeed.map((singleFeed, key) => (
        <SingleFeed singleFeed={singleFeed} key={key} />
      ))}
    </div>
  );
};

export default AllFeed;
