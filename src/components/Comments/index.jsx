import useCommentsStore from "../../stores";
import Comment from "./Comment";

const Comments = () => {
  const comments = useCommentsStore((state) => state.comments);

  if (!comments.length) return null;

  return (
    <>
      {comments.map((comment) => (
        <Comment show={true} key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default Comments;
