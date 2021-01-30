import React, { useContext } from "react";
import PostContext from "../../common/context/post-context";
import DayItem from "./DayItem";

const DayContainer = () => {
  const { storedPosts } = useContext(PostContext);

  return (
    <div className="day-container">
      {storedPosts.map((post) => {
        return <DayItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default DayContainer;
