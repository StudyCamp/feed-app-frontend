import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AllFeed from "../components/AllFeed";
import SearchFeed from "../components/SearchFeed";
import SearchFeedByComp from "../components/SearchFeedByComp";
import Past30daysTable from "../components/Past30daysTable";
import { Grid, Image } from "semantic-ui-react";

const HomePage = () => {
  const [allFeed, setAllFeed] = useState([]);
  const [feed30Days, setFeed30Days] = useState([]);
  const [loading, setLoading] = useState("Loading . . .");

  let numDaysBetween = function (d1, d2) {
    var diff = d1.getTime() - d2.getTime();

    return diff / (1000 * 60 * 60 * 24);
  };

  useEffect(() => {
    fetch("https://feed-api-app.herokuapp.com/feed")
      .then((response) => response.json())
      .then((json) => {
        json = json.sort((a, b) => {
          a = a.date_posted.split("/");
          b = b.date_posted.split("/");
          return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
        });
        setLoading("");
        setAllFeed(json);

        const filteredJson = json.filter((post) => {
          let currentTime = new Date();
          let year = currentTime.getFullYear();
          let day = currentTime.getDate();
          let month = currentTime.getMonth() + 1;

          let splitDate = post.date_posted.split("/");
          let postDate = new Date(
            (post.date_posted = `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`)
          );
          let today = new Date(year, month - 1, day); // Jan 1, 2022
          let days = numDaysBetween(today, postDate);
          return days < 30 && days >= 0;
        });
        setFeed30Days(filteredJson);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <>
      {new Date().getDate()} <br></br>
      {new Date().getMonth() + 1} <br></br>
      {new Date().getFullYear()} <br />
      <Hero />
      <Grid>
        <Grid.Column width={4}>
          <Past30daysTable feed30Days={feed30Days} />
        </Grid.Column>
        <Grid.Column width={4}>
          <h3>All Feed</h3> <br />
          <AllFeed allFeed={allFeed} />
          <h4>{loading}</h4>
        </Grid.Column>
        <Grid.Column width={4}>
          <SearchFeed allFeed={allFeed} />{" "}
        </Grid.Column>
        <Grid.Column width={4}>
          <SearchFeedByComp allFeed={allFeed} />
        </Grid.Column>
      </Grid>
      {/* 
      <SearchFeed allFeed={allFeed} />
      <AllFeed allFeed={allFeed} /> */}
      <Footer />
    </>
  );
};

export default HomePage;
