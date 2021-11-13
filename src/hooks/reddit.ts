import { redditApis } from "apis";
import { Thread } from "interfaces/reddit";
import { useCallback, useEffect, useState } from "react";

const useDotaThreads = () => {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [after, setAfter] = useState<string>("");

  const getDota2Page = useCallback(async () => {
    try {
      const response = await redditApis.getDota2Page();
      if (!!response) {
        setThreads(response.threads);
        setAfter(after);
      }
    } catch (error) {}
  }, [after]);

  useEffect(() => {
    getDota2Page();
  }, [getDota2Page]);

  return { threads };
};

export default {
  useDotaThreads,
};
