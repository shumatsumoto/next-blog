import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

export default function ImgMediaCard({ blog }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={blog.image.url}
          title={blog.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {blog.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`blog/${blog.id}`}>
          <Button variant="contained" color="primary">
            詳細を見る
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
