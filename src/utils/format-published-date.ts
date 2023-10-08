import dayjs from "dayjs";

/**
 * 投稿日をフォーマットする
 *
 * 投稿した日と投稿から8日以降は「YYYY年MM月DD日」
 * 投稿した翌日から7日までは「〇〇日前」
 * @param publishedAt
 * @returns
 */
export const formatPublishedDate = (publishedAt: string) => {
  const diff = dayjs().diff(dayjs(publishedAt), "d");
  console.log(diff);
  if (diff < 1 || diff > 7) {
    return dayjs(publishedAt).format("YYYY年MM月DD日");
  } else {
    return `${diff}日前`;
  }
};
