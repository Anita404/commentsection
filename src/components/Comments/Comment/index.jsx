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
import useBearStore from "../../../stores";
import { useState } from "react";

const Comment = ({
  data: { currentUser, score, user, createdAt, content, replies },
  width = "730px",
  show = false,
}) => {
  const [count, setCount] = useState(score);

  return (
    <div>
      <CommentContainer width={width}>
        <StyledLeftContainer>
          <LikeButton>
            <InnerContainer>
              <PlusIcon onClick={() => setCount(count + 1)} />
              <Number> {count} </Number>
              <MinusIcon onClick={() => setCount(count - 1)} />
            </InnerContainer>
          </LikeButton>
        </StyledLeftContainer>
        <StyledRightContainer>
          <Header>
            <ProfileInfo>
              <ProfilePicture />
              <HandleContainer> </HandleContainer>
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
          {/* <AddComment data={currentUser && currentUser} /> */}
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
