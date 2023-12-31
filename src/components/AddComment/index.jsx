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

const AddComment = () => {
  const [screenWidth, setScreenWidth] = useState(innerWidth);

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
          <ProfilePicture />
          <InputContainer>
            <InputText placeholder="Add a comment..." />
          </InputContainer>
          <SendButton> SEND </SendButton>
        </>
      )}
    </CommentContainer>
  );
};

export default AddComment;
