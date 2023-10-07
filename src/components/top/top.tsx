import { Blog } from "@/types/blog";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
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
      <HStack spacing={30} wrap={"wrap"}>
        {blogData.contents.map((content) => {
          return (
            <Box key={content.id}>
              <Flex>
                <Link href={`/blog/${content.id}`}>
                  <Image
                    src={content.eyecatch.url}
                    width={90}
                    height={90}
                    alt="アイキャッチ"
                  />
                </Link>
                <Box>
                  <Link href={`/blog/${content.id}`}>{content.title}</Link>
                  <Flex>
                    {content.author}
                    {content.publishedAt}
                  </Flex>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </HStack>
      {/* <p>{`記事の総数：${blogData.totalCount}件→もっと見る`}</p> */}
    </>
  );
};
