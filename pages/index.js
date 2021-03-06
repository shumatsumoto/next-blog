import { makeStyles } from "@material-ui/core/styles";
import BlogList from "../components/BlogList";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Head from "../components/head";
import { Pagination } from "../components/Pagination";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    flexGrow: 1,
  },
});

export default function Home({ blog, totalCount }) {
  const classes = useStyles();
  return (
    <>
      <Head
        title={"My Blog"}
        description={"My Blogです"}
        keyword={"My Blog"}
        image={"https://t-cr.jp/img.jpg"}
        url={"https://next-blog-shu0328-shumatsumoto.vercel.app/"}
      />
      <CssBaseline />
      <Container fixed>
        <BlogList blog={blog} />
        <Pagination totalCount={totalCount} />
      </Container>
    </>
  );
}

// データをテンプレートに受け渡す処理
export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://next-blog-shu0328.microcms.io/api/v1/blog?offset=0&limit=100",
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
