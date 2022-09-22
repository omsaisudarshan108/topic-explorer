import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RelatedTopic, Topics } from "../../types";
import "react-tabs/style/react-tabs.css";

interface TopicTabsProps {
  topics: Array<Topics>;
}

const TopicTabs: React.FC<TopicTabsProps> = ({ topics }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  console.log(topics)
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      style={{ padding: "5rem" }}
    >
      <TabList>
        {topics.map((topic: Topics) => (
          <Tab key={topic.id as React.Key}>
            {`${topic.name}-${topic.stargazers.totalCount}`}
            <span
              className="iconify"
              data-icon="typcn:star"
              data-width="50"
              data-height="50"
              style={{ color: "yellow" }}
            ></span>
          </Tab>
        ))}
      </TabList>
      {topics.map((topic: Topics) => (
        <TabPanel key={topic.id as React.Key}>
          <ul>
            {topic.relatedTopics.map((relatedTopic: RelatedTopic) => (
              <li key={relatedTopic.id as React.Key}>
                {`${relatedTopic.name}-${relatedTopic.stargazers.totalCount}`}
                <span
                  className="iconify"
                  data-icon="typcn:star"
                  data-width="50"
                  data-height="50"
                  style={{ color: "yellow" }}
                ></span>
              </li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TopicTabs;
