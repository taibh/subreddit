import { Box, useTheme } from "@mui/material";
import SubredditFilter from "components/SubredditFilter";
import { infiniteScrollHooks, redditHooks } from "hooks";
import { FilterTypes, Thread } from "models/reddit";
import React, { useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import SubredditCard from "./SubredditCard";

const MainContent: React.FC = () => {
  const theme = useTheme();
  const [allThreads, setAllThreads] = useState<Thread[]>([]);
  const { loading, threads, setFilters } = redditHooks.useDotaThreads();
  const { isLoadMore, setIsLoadMore } = infiniteScrollHooks.useInfiniteScroll();

  useEffect(() => {
    if (isLoadMore) {
      setAllThreads((items) => [...items, ...threads]);
    } else {
      setAllThreads(threads);
    }
    setIsLoadMore(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threads]);

  useEffect(() => {
    if (!isLoadMore) return;
    setFilters((filter) => ({ ...filter, isLoadMore: true }));
  }, [isLoadMore, setFilters]);

  const onFilter = (filterType: FilterTypes) => {
    setFilters({ filterType });
    setAllThreads([]);
  };

  return (
    <Box
      sx={{
        maxWidth: "sm",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          maxWidth: "md",
        },
      }}
    >
      <SubredditFilter onFilter={onFilter} />
      {loading && !isLoadMore && <LoadingCard />}
      {!!allThreads && (
        <>
          {allThreads.map((thread) => (
            <SubredditCard key={thread.id} thread={thread} />
          ))}
          {!!threads.length && <LoadingCard />}
        </>
      )}
    </Box>
  );
};

export default MainContent;
