import React, { useEffect, useState } from "react";

import { Grid, Typography, Link } from "@mui/material";

function App() {
  const [quote, setQuote] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetch("/api/getQuote")
      .then((response) => response.json())
      .then(({ quote }) => {
        setQuote(quote);
      });
  }, []);

  useEffect(() => {
    fetch("/api/getImageURL")
      .then((response) => response.json())
      .then(({ imageURL }) => {
        setImageURL(imageURL);
      });
  }, []);

  return (
    <Grid
      container
      component="div"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="350px"
    >
      <Grid
        container
        item
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={3}
      >
        <img
          height="305px"
          width="305px"
          src={imageURL}
          alt="Fortune cookie logo"
        />
      </Grid>
      <Grid
        container
        item
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={9}
      >
        <Typography padding="20px" variant="h3">
          {quote}
        </Typography>
      </Grid>
      <Grid
        container
        item
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={12}
        pt="20px"
      >
        <Typography variant="h5">
          Repository{" "}
          <Link href="https://github.com/tzihiang/course-repo">
            https://github.com/tzihiang/course-repo
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
