import axios from "axios";
import { ThreadResponse } from "interfaces/reddit";
import Qs from "qs";

const redditService = axios.create({
  baseURL: "https://www.reddit.com",
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: "repeat" }),
});

const getDota2Page = async (): Promise<ThreadResponse> => {
  const { data } = await redditService.get(`/r/DotA2/new.json`);
  const after = data?.data?.after;
  const threads = data?.data?.children?.map((item: any) => ({
    id: item?.data?.id,
    title: item?.data?.title,
    author: item?.data?.author,
    createdAt: item?.data?.created,
    numberOfComments: item?.data?.num_comments,
    content: item?.data?.selftext,
  }));
  return {
    after,
    threads,
  };
};

export default {
  getDota2Page,
};
