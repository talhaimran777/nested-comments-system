const findComment = (comments, targetId) => {
  let result = null;

  for (const comment of comments) {
    if (comment.id === targetId) return comment;

    const found = checkReplies(comment, targetId);
    if (!found) continue;

    result = found;
    break;
  }

  return result;
};

const checkReplies = (comment, id) => {
  return comment.replies.length > 0 && findComment(comment.replies, id);
};

export default findComment;
