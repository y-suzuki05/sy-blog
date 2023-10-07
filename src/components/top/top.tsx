import { Blog } from "@/types/blog";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

type TopProps = {
  blogData: MicroCMSListResponse<Blog>;
};

export const Top = ({ blogData }: TopProps) => {
  return (
    <>
      <Heading as={"h2"} mt={"3.5rem"} mb={"1.125rem"}>
        記事一覧
      </Heading>
      <p>{`記事の総数：${blogData.totalCount}件`}</p>
      <ul>
        {blogData.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>{content.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
