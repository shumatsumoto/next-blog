import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Blog.module.scss";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import dayjs from "dayjs";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

export default function ImgMediaCard({ blog }) {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={8} className={styles.detailCard}>
          <Card className={classes.root}>
            <CardMedia
              className={styles.mediaDetail}
              component="img"
              height="300"
              alt="Contemplative Reptile"
              image={blog.image.url}
              title={blog.title}
            />
            <CardHeader
              title={blog.title}
              subheader={`${dayjs(blog.publishedAt).format("YYYY/MM/DD H:mm")}`}
            />
            <CardContent>
              <div>
                {blog.category &&
                  blog.category.map(({ name }) => (
                    <span className="tag">{name}</span>
                  ))}
              </div>
              <Typography variant="body2" color="textSecondary" component="div">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog.content}`,
                  }}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="/">
                <Button size="small">戻る</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
