import React from "react";
import { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import UserFeed from "./UserFeed";

const SearchFeed = ({ allFeed }) => {
  const [selectedCompany, setSelectedCompany] = useState("");
  let seenComp = {};
  let feedWithUniqueComp = {};
  // Eliminate duplicate company
  feedWithUniqueComp = allFeed.filter(function (currentObject) {
    if (currentObject.company in seenComp) {
      return false;
    } else {
      seenComp[currentObject.company] = true;
      return true;
    }
  });
  // Add text and value to display in Dropdown
  feedWithUniqueComp.forEach(function (obj) {
    obj.text = obj.company;
    obj.value = obj.company;
  });

  return (
    <>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="world"
        options={feedWithUniqueComp}
        search
        text="Find Posts By Company"
        value={selectedCompany}
        onChange={(event, data) => setSelectedCompany(data.value)}
      />

      {allFeed
        .filter((obj) => obj.company === selectedCompany)
        .map((e, i) => (
          <UserFeed singleFeed={e} key={i} />
        ))}
    </>
  );
};

export default SearchFeed;
