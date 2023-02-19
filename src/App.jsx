const Comment = ({ comment }) => {
  const CommentHeader = () => {
    return (
      <div className="flex items-baseline mb-2">
        <p className="text-sm">{comment.commentBy}</p>
        <p className="text-gray-400 text-xs ml-2">{comment.createdAt}</p>
      </div>
    );
  };

  const CommentBody = () => {
    return (
      <>
        <p className="text-justify text-xs text-gray-500">{comment.body}</p>
      </>
    );
  };

  const CommentFooter = () => {
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

  return (
    <div className="flex justify-start mt-3">
      <div className="flex flex-col items-center mr-1">
        <div class="relative w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mb-1">
          <svg
            class="absolute w-7 h-7 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="w-1 rounded-full bg-gray-200 flex-1"> &nbsp; </div>
      </div>
      <div>
        <CommentHeader />
        <CommentBody />
        <CommentFooter />
      </div>
    </div>
  );
};

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

export default function App() {
  const comments = [
    {
      id: 1,
      commentBy: "r/hamza",
      body: `Pretty print actually works with multiple arguments too, where as
      the above expects the second argument to be options to inspect which is
      probably not intentional.`,
      createdAt: "13.hours.ago",
      replies: [
        {
          id: 3,
          commentBy: "r/talha",
          body: `I'm really satisfied with new neovim version.`,
          createdAt: "10.hours.ago",
          replies: [],
        },
      ],
    },
    {
      id: 2,
      commentBy: "r/talha",
      body: `Testing out new neovim version.`,
      createdAt: "12.hours.ago",
      replies: [],
    },
  ];

  return (
    <div className="bg-slate-200 flex justify-center items-center h-screen">
      <Comments comments={comments} />
    </div>
  );
}
