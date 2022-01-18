import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SingleFeed = ({ singleFeed }) => {
  return (
    <>
      {/* <div>
        <li>_id: {singleFeed._id}</li>
        <li>name: {singleFeed.name}</li>
        <li>company: {singleFeed.company}</li>
        <li>profile_pic: {singleFeed.profile_pic}</li>
        <li>date_posted: {singleFeed.date_posted}</li>
        <li>post_content: {singleFeed.post_content}</li>
        <li>likes: {singleFeed.likes}</li>
      </div> */}

      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="profilePic">
              <img src={singleFeed.profile_pic} alt="Logo" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={singleFeed.name}
          subheader={singleFeed.date_posted}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {singleFeed.post_content} <br />
            Company: {singleFeed.company} <br />
            Post id: {singleFeed._id}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {singleFeed.likes}
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

export default SingleFeed;
