export const fetchComments = async () => {
  const data = await fetch("http://localhost:8080/comments");
  const json = await data.json();

  return json;
};

export const postComment = (comment, parentId = null) =>
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

export const updateComment = ({ id, content }) =>
  fetch(`http://localhost:8080/update-comment?id=${id}&content=${content}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  });

export const updateScore = ({ score, id }) => {
  fetch(`http://localhost:8080/update-score?id=${id}&score=${score}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  });
};
