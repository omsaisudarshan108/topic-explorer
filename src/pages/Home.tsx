import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import TopicTabs from "../components/TopicTabs";
import getTopicsQuery from "../clients/getTopicsQuery";
import logo from "../logo.svg";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(getTopicsQuery);
  const relatedTopics = useMemo(() => data?.react?.relatedTopics, [data]);

  if (error) return <h1>{error.message}</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <React.Fragment>
      <h1>
        <span>
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        React related Topics
      </h1>
      <TopicTabs topics={relatedTopics} />
    </React.Fragment>
  );
};

export default Home;
