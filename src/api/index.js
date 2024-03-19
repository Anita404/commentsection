export const fetchComments = async () => {
  const data = await fetch("http://localhost:8080/comments");
  const json = await data.json();

  return json;
};
