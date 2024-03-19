import {
  Header,
  Input,
  CommentContainer,
  LikeButton,
  StyledRightContainer,
  StyledLeftContainer,
  ProfilePicture,
  InnerContainer,
  Number,
  HandleContainer,
  DateContainer,
  ReplyButton,
  ProfileInfo,
  NestedComments,
  ReplyThread,
  RepliesContainer,
  ReplyContainer,
} from "./styles";

import PlusIcon from "../../../assets/PlusIcon.svg?react";
import MinusIcon from "../../../assets/MinusIcon.svg?react";
import ReplyIcon from "../../../assets/ReplyIcon.svg?react";
import AddComment from "../../AddComment";

const Comment = ({
  data: { currentUser, score, user, createdAt, content, replies },
  width = "730px",
  show = false,
}) => {
  return (
    <div>
      <CommentContainer width={width}>
        <StyledLeftContainer>
          <LikeButton>
            <InnerContainer>
              <PlusIcon onClick={""} />
              <Number> {score} </Number>
              <MinusIcon onClick={""} />
            </InnerContainer>
          </LikeButton>
        </StyledLeftContainer>
        <StyledRightContainer>
          <Header>
            <ProfileInfo>
              <ProfilePicture image={user.image.png} />
              <HandleContainer> {user.username} </HandleContainer>
              <DateContainer> {createdAt} </DateContainer>
            </ProfileInfo>
            <ReplyButton onClick={""}>
              <ReplyIcon />
              Reply
            </ReplyButton>
          </Header>
          <Input>{content}</Input>
        </StyledRightContainer>
      </CommentContainer>
      {show && (
        <ReplyContainer>
          <AddComment data={currentUser && currentUser} />
        </ReplyContainer>
      )}
      {replies && (
        <NestedComments>
          <ReplyThread />
          <RepliesContainer>
            {replies.map((comment, index) => (
              <Comment key={index} data={comment} width={"620px"} />
            ))}
          </RepliesContainer>
        </NestedComments>
      )}
    </div>
  );
};

export default Comment;
