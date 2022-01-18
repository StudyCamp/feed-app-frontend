import React from "react";
import { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import UserFeed from "./UserFeed";

const SearchFeed = ({ allFeed }) => {
  const [selectedName, setSelectedName] = useState("");
  let seenNames = {};
  let feedWithUniqueNames = {};
  // Eliminate duplicate names
  feedWithUniqueNames = allFeed.filter(function (currentObject) {
    if (currentObject.name in seenNames) {
      return false;
    } else {
      seenNames[currentObject.name] = true;
      return true;
    }
  });
  // Add text and value to display in Dropdown
  feedWithUniqueNames.forEach(function (obj) {
    obj.text = obj.name;
    obj.value = obj.name;
  });

  return (
    <>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="world"
        options={feedWithUniqueNames}
        search
        text="Find Posts By Name"
        value={selectedName}
        onChange={(event, data) => setSelectedName(data.value)}
      />

      {allFeed
        .filter((obj) => obj.name === selectedName)
        .map((e, i) => (
          <UserFeed singleFeed={e} key={i} />
        ))}
    </>
  );
};

export default SearchFeed;
