import React, { createContext } from "react";
import moment from "moment";
import useLocalStorage from "../hooks/use-local-storage";

const initialPosts = [
  {
    id: 1,
    date: "January 28 2021",
    content: "Get groceries",
  },
  {
    id: 2,
    date: "January 29 2021",
    content: "Get medicine",
  },
  {
    id: 3,
    date: "January 30 2021",
    content: "Workout",
  },
];

const PostContext = createContext(() => {});

const PostContextProvider = ({ children }) => {
  const [storedPosts, setStoredPost] = useLocalStorage("posts", initialPosts);

  return (
    <PostContext.Provider value={Object.assign({}, { storedPosts })}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContextProvider };
export default PostContext;
