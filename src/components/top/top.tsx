import { Blog } from "@/types/blog";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { formatPublishedDate } from "@/utils";

type TopProps = {
  blogData: MicroCMSListResponse<Blog>;
};

export const Top = ({ blogData }: TopProps) => {
  return (
    <>
      <Heading as={"h2"} mt={"3.5rem"} mb={"1.125rem"}>
        記事一覧
      </Heading>
      <Flex wrap={"wrap"} gap={4}>
        {blogData.contents.map((content) => {
          return (
            <Flex key={content.id} gap={8} w={{ base: "100%", md: "45%" }}>
              <Link href={`/blog/${content.id}`}>
                <Image
                  src={content.eyecatch.url}
                  width={150}
                  height={150}
                  alt="アイキャッチ"
                />
              </Link>
              <Box maxW={"18.75rem"}>
                <Link href={`/blog/${content.id}`}>
                  <Text fontSize={16} fontWeight={700}>
                    {content.title}
                  </Text>
                </Link>
                <Flex mt={"0.375rem"} fontSize={12}>
                  <Text mr={"0.375rem"}>{content.author}</Text>
                  <Text>
                    {content.publishedAt &&
                      formatPublishedDate(content.publishedAt)}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          );
        })}
      </Flex>
      {/* <p>{`記事の総数：${blogData.totalCount}件→もっと見る`}</p> */}
    </>
  );
};
