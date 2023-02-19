import { useState } from "react";
import Comment from "..";

const CommentFooter = ({ comment }) => {
  const [show, setShow] = useState(false);

  const addComment = () => {};

  return (
    <div>
      {!show && (
        <button
          class="rounded-full bg-blue-400 text-xs text-white px-3 py-1 mb-1"
          onClick={() => setShow(true)}
        >
          Reply
        </button>
      )}

      {show && (
        <div className="flex justify-between items-center">
          <input
            className="outline-none bg-gray-200 border border-1 border-gray-500 w-full rounded-sm text-xs p-1 text-gray-400"
            name="comment"
            type="text"
          />
          <button
            className="border-2 ml-2 text-xs bg-green-500 text-white p-1"
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

      {comment.replies.map((reply) => (
        <Comment comment={reply} key={reply.id} />
      ))}
    </div>
  );
};

export default CommentFooter;
