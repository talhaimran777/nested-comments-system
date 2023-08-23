const CommentHeader = ({ comment }) => {
  return (
    <div className="flex items-baseline mb-2 md:mt-[0.5px]">
      <p className="text-sm md:text-base">{comment.commentBy}</p>
      <p className="text-gray-400 text-xs md:text-sm ml-2">{comment.createdAt}</p>
    </div>
  );
};

export default CommentHeader;
