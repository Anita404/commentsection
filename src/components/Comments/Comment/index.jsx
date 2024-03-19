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
import { useState } from "react";
import AddComment from "../../AddComment";

const Comment = ({
  data: { score, createdAt, content, replies, user },
  width = "730px",
}) => {
  const [count, setCount] = useState(score);

  const [reply, setReply] = useState(false);

  return (
    <div>
      <CommentContainer width={width}>
        <StyledLeftContainer>
          <LikeButton>
            <InnerContainer>
              <PlusIcon onClick={() => setCount(count + 1)} />
              <Number> {count} </Number>
              <MinusIcon onClick={() => count !== 0 && setCount(count - 1)} />
            </InnerContainer>
          </LikeButton>
        </StyledLeftContainer>
        <StyledRightContainer>
          <Header>
            <ProfileInfo>
              <ProfilePicture image={user.image} />
              <HandleContainer> {user.name} </HandleContainer>
              <DateContainer> {createdAt} </DateContainer>
            </ProfileInfo>
            <ReplyButton onClick={() => setReply(!reply)}>
              <ReplyIcon />
              Reply
            </ReplyButton>
          </Header>
          <Input>{content}</Input>
        </StyledRightContainer>
      </CommentContainer>
      {reply && (
        <ReplyContainer>
          <AddComment
            submitButtonText="reply"
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
