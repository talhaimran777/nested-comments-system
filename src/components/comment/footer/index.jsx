import Comment from "..";

const CommentFooter = ({ comment }) => {
  return (
    <div>
      <button class="rounded-full bg-blue-400 text-xs text-white px-3 py-1">
        Reply
      </button>
      {comment.replies.map((reply) => (
        <Comment comment={reply} key={reply.id} />
      ))}
    </div>
  );
};

export default CommentFooter;
