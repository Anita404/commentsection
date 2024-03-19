import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import { useEffect } from "react";
import useCommentsStore from "./stores";
import { fetchComments } from "./api";
import { useCallback } from "react";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 64px 64px 0px 64px;
`;

export default function App() {
  const { setComments } = useCommentsStore((state) => state);

  const getComments = useCallback(async () => {
    const comments = await fetchComments();

    setComments(comments.data);
  }, [setComments]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <Container>
      <GlobalStyles />
      <Comments />
      <AddComment
        data={{
          currentUser: {
            image: {
              png: "./avatars/image-juliusomo.png",
              webp: "./avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        }}
      />
    </Container>
  );
}
