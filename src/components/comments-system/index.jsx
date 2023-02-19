import { useState } from "react";
import { Consumer, Provider } from "../../context";
import fakeComments from "../../data/comments";
import Comments from "../comments";

const CommentsSystem = () => {
  const [comments, setComments] = useState(fakeComments);

  return (
    <Provider value={{ comments, setComments }}>
      <Consumer>{() => <Comments />}</Consumer>
    </Provider>
  );
};

export default CommentsSystem;
