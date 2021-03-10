import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import BlogList from "../../components/BlogList";

export default function CategoryId({ blog }) {
  const router = useRouter();

  return (
    <>
      <Container fixed>
        <BlogList blog={blog} />
      </Container>
    </>
  );
}

// データをテンプレートに受け渡す処理
export const getServerSideProps = async (context) => {
  const keyword = context.query.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    `https://next-blog-shu0328.microcms.io/api/v1/blog?offset=0&limit=100&filters=category[contains]${keyword}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
