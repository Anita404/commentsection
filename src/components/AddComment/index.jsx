import { useState } from "react";
import { MOBILE_WIDTH } from "../../utils/constants";
import {
  CommentContainer,
  InputText,
  MobileContainer,
  ProfilePicture,
  SendButton,
} from "./styles";
import { useEffect } from "react";
import { postComment } from "../../api";
import useCommentsStore from "../../stores";

const AddComment = ({
  data: { currentUser },
  submitButtonText = "send",
  parentId,
  onCommentSubmit,
}) => {
  const { fetch } = useCommentsStore((state) => state);

  const [screenWidth, setScreenWidth] = useState(innerWidth);
  const [content, setContent] = useState("");

  const handleSend = async () => {
    await postComment(content, parentId);
    fetch();
    onCommentSubmit && onCommentSubmit();
    setContent("");
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
          <InputText
            placeholder="Add a comment..."
            onChange={(e) => setContent(e.target.value)}
          />
          <MobileContainer>
            <ProfilePicture />
            <SendButton> SEND </SendButton>
          </MobileContainer>
        </>
      ) : (
        <>
          <ProfilePicture $image={currentUser?.image.png} />
          <InputText
            placeholder="Add a comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <SendButton onClick={handleSend}>{submitButtonText}</SendButton>
        </>
      )}
    </CommentContainer>
  );
};

export default AddComment;
