import Showcase from "../showcase";
import CommentBody from "./body";
import CommentFooter from "./footer";
import CommentHeader from "./header";

const Comment = ({ comment }) => {
  return (
    <div className="flex justify-start mt-3">
      <Showcase />
      <div>
        <CommentHeader comment={comment} />
        <CommentBody comment={comment} />
        <CommentFooter comment={comment} />
      </div>
    </div>
  );
};

export default Comment;
