import { client } from "@/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { Top } from "@/components/top";
import { Blog } from "@/types/blog";

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return (
    <Layout>
      <Top blogData={props} />
      {/* {props.contents[2].eyecatch.url} */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blogs" });
  return {
    props: data,
  };
};

export default Home;
