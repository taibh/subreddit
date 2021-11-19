import axios from "axios";
import { DEFAULT_FILTER } from "constants/reddit";
import { Thread, ThreadRequestPayload, ThreadResponse } from "models/reddit";
import Qs from "qs";

const redditService = axios.create({
  baseURL: "https://www.reddit.com",
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: "repeat" }),
});

const convertThreadData = (data: any): Thread => {
  return {
    id: data?.id,
    title: data?.title,
    author: data?.author,
    createdAt: data?.created,
    numberOfComments: data?.num_comments,
    content: data?.selftext,
    numberOfVote: data?.ups,
    permalink: data?.permalink,
  };
};

const getDota2ThreadInfo = async (id: string): Promise<any> => {
  const { data } = await redditService.get(`/r/DotA2/comments/${id}.json`);
  const thread: Thread = convertThreadData(data[0]?.data?.children[0]?.data);

  return { thread };
};

const getDota2Threads = async (
  payload?: ThreadRequestPayload
): Promise<ThreadResponse> => {
  const filterType = !!payload?.filterType
    ? payload.filterType
    : DEFAULT_FILTER.filterType;
  const params = {
    limit: !!payload?.limit ? payload.limit : DEFAULT_FILTER.limit,
    after: !!payload?.after ? payload.after : undefined,
  };

  const { data } = await redditService.get(`/r/DotA2/${filterType}.json`, {
    params,
  });
  const after = data?.data?.after;
  const threads: Thread[] = data?.data?.children?.map((item: any) =>
    convertThreadData(item?.data)
  );

  return {
    after,
    threads,
  };
};

export default {
  getDota2Threads,
  getDota2ThreadInfo,
};
