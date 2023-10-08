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
      <HStack spacing={30} wrap={"wrap"}>
        {blogData.contents.map((content) => {
          return (
            <Box key={content.id}>
              <Flex gap={8}>
                <Link href={`/blog/${content.id}`}>
                  <Image
                    src={content.eyecatch.url}
                    width={90}
                    height={90}
                    alt="アイキャッチ"
                  />
                </Link>
                <Box>
                  <Link href={`/blog/${content.id}`}>
                    <Text fontSize={16} fontWeight={700}>
                      {content.title}
                    </Text>
                  </Link>
                  <Flex mt={"0.375rem"} fontSize={12}>
                    {content.author}
                    {content.publishedAt &&
                      formatPublishedDate(content.publishedAt)}
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
