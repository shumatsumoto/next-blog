import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Blog.module.scss";
import dayjs from "dayjs";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

export default function ImgMediaCard({ blog }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={styles.mediaItem}
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image={blog.image.url}
        title={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {blog.title}
        </Typography>
        <span>{`${dayjs(blog.publishedAt).format("YYYY/MM/DD")}`}</span>
      </CardContent>
      <CardActions>
        <Link href={`blog/${blog.id}`}>
          <Button size="small" className={styles.detailLink}>
            詳細を見る
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
