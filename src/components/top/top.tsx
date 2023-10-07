import { Blog } from "@/types/blog";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";
import Image from "next/image";

type TopProps = {
  blogData: MicroCMSListResponse<Blog>;
};

export const Top = ({ blogData }: TopProps) => {
  return (
    <>
      <Heading as={"h2"} mt={"3.5rem"} mb={"1.125rem"}>
        記事一覧
      </Heading>
      <ul>
        {blogData.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <Image src={content.eyecatch.url} width={100} height={100} alt="アイキャッチ" />
                {content.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <p>{`記事の総数：${blogData.totalCount}件→もっと見る`}</p>
    </>
  );
};
