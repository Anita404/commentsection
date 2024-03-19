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
  DeleteContainer,
  EditContainer,
  ReplyOptions,
  PopupContainer,
  PopupBody,
  PopupHeader,
  PopupBox,
  PopupButtonsContainer,
  DeleteButton,
  CancelButton,
} from "./styles";

import PlusIcon from "../../../assets/PlusIcon.svg?react";
import MinusIcon from "../../../assets/MinusIcon.svg?react";
import ReplyIcon from "../../../assets/ReplyIcon.svg?react";
import DeleteIcon from "../../../assets/DeleteIcon.svg?react";
import EditIcon from "../../../assets/EditIcon.svg?react";
import { useState } from "react";
import AddComment from "../../AddComment";

const Comment = ({
  data: { score, createdAt, content, replies, user },
  width = "730px",
}) => {
  const [count, setCount] = useState(score);

  const [reply, setReply] = useState(false);

  const [open, setOpen] = useState(false);

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
            {user.id === 3 ? (
              <ReplyOptions>
                <DeleteContainer onClick={() => setOpen(true)}>
                  <DeleteIcon />
                  Delete
                  {open ? (
                    <PopupContainer>
                      <PopupBox>
                        <PopupHeader> Delete comment </PopupHeader>
                        <PopupBody>
                          Are you sure you want to delete this comment? This
                          will remove the comment and cannot be undone.
                        </PopupBody>
                        <PopupButtonsContainer>
                          <DeleteButton> YES, DELETE </DeleteButton>
                          <CancelButton onClick={() => setOpen(false)}>
                            NO, CANCEL
                          </CancelButton>
                        </PopupButtonsContainer>
                      </PopupBox>
                    </PopupContainer>
                  ) : null}
                </DeleteContainer>
                <EditContainer>
                  <EditIcon />
                  Edit
                </EditContainer>
              </ReplyOptions>
            ) : (
              <ReplyButton onClick={() => setReply(!reply)}>
                <ReplyIcon />
                Reply
              </ReplyButton>
            )}
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
