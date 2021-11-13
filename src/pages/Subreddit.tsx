import SubredditHeader from "components/SubredditHeader";
import { redditHooks } from "hooks";
import React from "react";
import "./Subreddit.scss";

const Subreddit: React.FC = () => {
  const { threads } = redditHooks.useDotaThreads();
  console.log(threads);
  return (
    <>
      <SubredditHeader></SubredditHeader>
    </>
  );
};

export default Subreddit;
