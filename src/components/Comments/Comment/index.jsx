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
  ReplyContainer,
  ProfileInfo,
  NestedComments,
  ReplyThread,
} from "./styles";

import PlusIcon from "../../../assets/PlusIcon.svg?react";
import MinusIcon from "../../../assets/MinusIcon.svg?react";
import ReplyIcon from "../../../assets/ReplyIcon.svg?react";

const Comment = ({ data: { score, user, createdAt, content, replies } }) => {
  return (
    <div>
      <CommentContainer>
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
              <ProfilePicture />
              <HandleContainer> {user.username} </HandleContainer>
              <DateContainer> {createdAt} </DateContainer>
            </ProfileInfo>
            <ReplyContainer>
              <ReplyIcon />
              Reply
            </ReplyContainer>
          </Header>
          <Input>{content}</Input>
        </StyledRightContainer>
      </CommentContainer>
      {replies && (
        <NestedComments>
          <ReplyThread />
          {replies.map((comment, index) => (
            <Comment key={index} data={comment} />
          ))}
        </NestedComments>
      )}
    </div>
  );
};

export default Comment;
