import {
  CommentContainer,
  InputContainer,
  InputText,
  ProfilePicture,
  SendButton,
} from "./styles";

const AddComment = () => {
  return (
    <CommentContainer>
      <ProfilePicture />
      <InputContainer>
        <InputText placeholder="Add a comment..." />
      </InputContainer>
      <SendButton> SEND </SendButton>
    </CommentContainer>
  );
};

export default AddComment;
