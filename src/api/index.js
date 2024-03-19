export const fetchComments = async () => {
  const data = await fetch("http://localhost:8080/comments");
  const json = await data.json();

  return json;
};

export const postComment = (comment, parentId) =>
  fetch("http://localhost:8080/add-comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify({ content: comment, userId: 3, parentId }),
  });

export const deleteComment = (id) =>
  fetch(`http://localhost:8080/delete-comment?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  });

export const likeCommment = () => {};
