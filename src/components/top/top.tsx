import { Blog } from "@/types/blog";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";

type TopProps = {
  blogData: MicroCMSListResponse<Blog>;
};

export const Top = ({ blogData }: TopProps) => {
  return (
    <>
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
