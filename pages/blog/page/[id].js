import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Pagination } from "../../../components/Pagination";
import BlogItem from "../../../components/BlogItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const PER_PAGE = 5;

export default function BlogPageId({ blog, totalCount }) {
  const classes = useStyles();
  return (
    <Container fixed>
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
        <Pagination totalCount={totalCount} />
      </div>
    </Container>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const res = await fetch(
    "https://next-blog-shu0328.microcms.io/api/v1/blog",
    key
  );
  const repos = await res.json();
  const pageNumbers = [];
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );
  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    `https://next-blog-shu0328.microcms.io/api/v1/blog?offset=${
      (id - 1) * 5
    }&limit=5`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
