import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogItem from "./BlogItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BlogList({ blog }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {blog.map((blog) => (
          <Grid key={blog.id} item xs={12} sm={6} md={4}>
            <BlogItem
              id={blog.id}
              blog={blog}
              publishedAt={blog.publishedAt}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
