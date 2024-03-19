import { useState } from "react";
import { MOBILE_WIDTH } from "../../utils/constants";
import {
  CommentContainer,
  InputContainer,
  InputText,
  MobileContainer,
  ProfilePicture,
  SendButton,
} from "./styles";
import { useEffect } from "react";
import { postComment } from "../../api";
import useCommentsStore from "../../stores";

const AddComment = ({ data: { currentUser }, submitButtonText = "send" }) => {
  const { fetch } = useCommentsStore((state) => state);

  const [screenWidth, setScreenWidth] = useState(innerWidth);
  const [content, setContent] = useState("");

  const handleSend = async () => {
    await postComment(content);
    fetch();
  };

  useEffect(() => {
    const updateScreenWidth = setScreenWidth(innerWidth);

    const resize = addEventListener("resize", updateScreenWidth);

    return () => {
      removeEventListener(resize, updateScreenWidth);
    };
  }, []);

  return (
    <CommentContainer>
      {screenWidth <= MOBILE_WIDTH ? (
        <>
          <InputContainer>
            <InputText placeholder="Add a comment..." />
          </InputContainer>
          <MobileContainer>
            <ProfilePicture />
            <SendButton> SEND </SendButton>
          </MobileContainer>
        </>
      ) : (
        <>
          <ProfilePicture image={currentUser?.image.png} />
          <InputContainer>
            <InputText
              placeholder="Add a comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </InputContainer>
          <SendButton onClick={handleSend}>{submitButtonText}</SendButton>
        </>
      )}
    </CommentContainer>
  );
};

export default AddComment;
