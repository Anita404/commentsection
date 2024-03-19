export const fetchComments = async () => {
  const data = await fetch("http://localhost:8080/comments");
  const json = await data.json();

  return json;
};

export const postComment = async (comment) => {
  const data = await fetch("http://localhost:8080/add-comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  return data;
};
