import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";

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
