import { redditApis } from "apis";
import { DEFAULT_FILTER } from "constants/reddit";
import { Thread, ThreadRequestPayload } from "models/reddit";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const useThreadInfo = (id: string) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [threadInfo, setThreadInfo] = useState<{
    thread: Thread;
    comment?: Array<any>;
  }>({} as any);

  const getThreadInfo = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const response = await redditApis.getDota2ThreadInfo(id);
        if (!!response) {
          setThreadInfo(response);
        }
      } catch (error) {
        navigate("/error");
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (!id) return;
    getThreadInfo(id);
  }, [id, getThreadInfo]);

  return { loading, threadInfo };
};

const useDotaThreads = () => {
  const after = useRef<string>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [filters, setFilters] = useState<ThreadRequestPayload>(DEFAULT_FILTER);

  const getDota2Page = useCallback(
    async (params: ThreadRequestPayload) => {
      setLoading(true);
      try {
        if (params.isLoadMore && !after.current) {
          setThreads([]);
          return;
        } else if (params.isLoadMore) {
          params.after = after.current;
        }

        const response = await redditApis.getDota2Threads(params);
        after.current = response.after;
        if (!!response) {
          setThreads(response.threads);
        }
      } catch {
        navigate("/error");
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  useEffect(() => {
    getDota2Page(filters);
  }, [filters, getDota2Page]);

  return { loading, threads, filters, setFilters };
};

export default {
  useThreadInfo,
  useDotaThreads,
};
