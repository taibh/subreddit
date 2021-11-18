import { useCallback, useEffect, useState } from "react";

const useInfiniteScroll = () => {
  const [isLoadMore, setIsLoadMore] = useState<boolean>();

  const handleScroll = useCallback(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setIsLoadMore(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isLoadMore, setIsLoadMore };
};

export default {
  useInfiniteScroll,
};
