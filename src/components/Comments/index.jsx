import useCommentsStore from "../../stores";
import Comment from "./Comment";

const Comments = () => {
  const comments = useCommentsStore((state) => state.comments);

  if (!comments.length) return null;

  return (
    <>
      {comments.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </>
  );
};

export default Comments;
