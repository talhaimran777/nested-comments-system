import CommentBody from "./body";
import CommentFooter from "./footer";
import CommentHeader from "./header";

const Comment = ({ comment }) => {
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
        <CommentHeader comment={comment} />
        <CommentBody comment={comment} />
        <CommentFooter comment={comment} />
      </div>
    </div>
  );
};

export default Comment;
