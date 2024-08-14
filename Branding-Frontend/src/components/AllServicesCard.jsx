import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "../components";

function AllServiceCardCmp({ data }) {
  // console.log(data, "data from service card");
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 180 }}
        image={data?.imgUrl}
        title={data?.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography
          sx={{ minHeight: 80 }}
          variant="body2"
          color="text.secondary"
        >
          {data?.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button text={data?.buttonContent} link={data?.link} />
      </CardActions>
    </Card>
  );
}

export default AllServiceCardCmp;
