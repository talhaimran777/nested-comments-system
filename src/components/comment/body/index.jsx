const CommentBody = ({ comment }) => {
  return (
    <>
      <p className="text-justify text-xs text-gray-500">{comment.body}</p>
    </>
  );
};

export default CommentBody;
