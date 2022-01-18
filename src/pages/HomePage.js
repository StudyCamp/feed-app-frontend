import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AllFeed from "../components/AllFeed";
import SearchFeed from "../components/SearchFeed";
import { Grid, Image } from "semantic-ui-react";

const HomePage = () => {
  const [allFeed, setAllFeed] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/feed")
      .then((response) => response.json())
      .then((json) => {
        setAllFeed(
          json.sort((a, b) => {
            a = a.date_posted.split("/");
            b = b.date_posted.split("/");
            return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
          })
        );
        console.log(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <>
      <Hero />
      <Grid>
        <Grid.Column width={4}>
          <SearchFeed allFeed={allFeed} />{" "}
        </Grid.Column>
        <Grid.Column width={9}>
          <AllFeed allFeed={allFeed} />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid>

      <SearchFeed allFeed={allFeed} />
      <AllFeed allFeed={allFeed} />
      <Footer />
    </>
  );
};

export default HomePage;
