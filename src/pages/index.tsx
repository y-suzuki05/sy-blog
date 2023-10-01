import { client } from "@/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { Box } from "@chakra-ui/react";

export type Blog = {
  title: string;
  content: string;
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return (
    <Layout>
      <div>
        <p>{`記事の総数：${props.totalCount}件`}</p>
        <ul>
          {props.contents.map((content) => {
            return (
              <li key={content.id}>
                <Link href={`/blog/${content.id}`}>{content.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Box h={'10000px'}>aaa</Box>
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
