import { client } from "@/libs/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog } from "@/types/blog";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import dayjs from "dayjs";
import { Layout } from "@/components/layout";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <Layout>
      <h1>{props.title}</h1>
      <time dateTime={props.publishedAt}>
        {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
      </time>
      <article dangerouslySetInnerHTML={{ __html: props.content }} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default BlogId;
