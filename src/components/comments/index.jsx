import Comment from "../comment";

const Comments = ({ comments }) => {
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
