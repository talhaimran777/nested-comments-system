import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import Comment from "..";
import { AppContext } from "../../../context";
import findComment from "../../../utils/comment-finder";

const CommentFooter = ({ comment }) => {
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState("");

  const { comments, setComments } = useContext(AppContext);

  const addComment = () => {
    if (!reply) return;

    let foundComment = findComment(comments, comment.id);

    if (foundComment) {
      foundComment.replies?.unshift({
        id: uuid(),
        commentBy: "Unknown",
        body: reply,
        replies: [],
      });
      setComments(comments);
      setShow(false);
      setReply("");
    }
  };

  return (
    <div>
      {!show && (
        <button
          class="rounded-full bg-blue-400 text-xs text-white px-3 py-1 mb-1 mt-2"
          onClick={() => {
            setShow(true);
            replyInput.current.focus();
          }}
        >
          Reply
        </button>
      )}

      {show && (
        <div className="flex justify-between items-center">
          <input
            autoFocus
            onKeyDown={(e) => e.key === "Enter" && addComment()}
            onChange={(e) => e.key !== "Enter" && setReply(e.target.value)}
            className="outline-none bg-gray-200 border border-1 border-gray-500 w-full rounded-sm text-xs p-1 text-gray-400"
            name="comment"
            type="text"
          />
          <button
            className="border-2 ml-2 text-xs bg-green-500 text-white p-1 focus"
            onClick={addComment}
          >
            Add
          </button>

          <button
            className="border-2 ml-2 text-xs bg-red-400 text-white p-1"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </div>
      )}

      {comment?.replies?.map((reply) => (
        <Comment comment={reply} key={reply.id} />
      ))}
    </div>
  );
};

export default CommentFooter;
