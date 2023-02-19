const CommentHeader = ({ comment }) => {
  return (
    <div className="flex items-baseline mb-2">
      <p className="text-sm">{comment.commentBy}</p>
      <p className="text-gray-400 text-xs ml-2">{comment.createdAt}</p>
    </div>
  );
};

export default CommentHeader;
