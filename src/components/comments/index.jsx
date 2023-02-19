import { useContext } from "react";
import { AppContext } from "../../context";
import Comment from "../comment";

const Comments = () => {
  const { comments } = useContext(AppContext);

  return (
    <div className="bg-white border border-2 border-gray-300 p-5 mx-2">
      {comments.map((comment) => (
        <div className="my-2">
          <Comment comment={comment} key={comment.id} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
