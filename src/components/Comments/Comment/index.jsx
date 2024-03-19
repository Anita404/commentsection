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
  StyledPlusIcon,
  StyledMinusIcon,
  EditedComment,
  UpdateButton,
} from "./styles";
import ReplyIcon from "../../../assets/ReplyIcon.svg?react";
import DeleteIcon from "../../../assets/DeleteIcon.svg?react";
import EditIcon from "../../../assets/EditIcon.svg?react";
import { useState } from "react";
import AddComment from "../../AddComment";
import { deleteComment, updateComment, updateScore } from "../../../api";
import useCommentsStore from "../../../stores";
import { InputText, SendButton } from "../../AddComment/styles";

const Comment = ({
  data: { score, createdAt, content, replies, user, id },
  width = "730px",
}) => {
  const [count, setCount] = useState(score);

  const [reply, setReply] = useState(false);

  const [open, setOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [editedContent, setEditedContent] = useState(content);

  const { fetch } = useCommentsStore((state) => state);

  const handleDelete = async () => {
    await deleteComment(id);
    fetch();
    setOpen(false);
  };

  const handleScoreUpdate = (value) => {
    if (value === "plus") {
      setCount(count + 1);
      updateScore({ score: count + 1, id });
    }
    if (value === "minus" && count > 0) {
      setCount(count - 1);
      updateScore({ score: count - 1, id });
    }
  };

  const handleCommentUpdate = async () => {
    await updateComment({ id, content: editedContent });
    fetch();
    setIsEditing(false);
  };

  const handleCommentSubmit = () => {
    setReply(false);
  };

  return (
    <div>
      <CommentContainer width={width}>
        <StyledLeftContainer>
          <LikeButton>
            <InnerContainer>
              <StyledPlusIcon onClick={() => handleScoreUpdate("plus")} />
              <Number> {count} </Number>
              <StyledMinusIcon onClick={() => handleScoreUpdate("minus")} />
            </InnerContainer>
          </LikeButton>
        </StyledLeftContainer>
        <StyledRightContainer>
          <Header>
            <ProfileInfo>
              <ProfilePicture $image={user.image} />
              <HandleContainer> {user.name} </HandleContainer>
              <DateContainer> {createdAt} </DateContainer>
            </ProfileInfo>
            {user.id === 3 ? (
              <ReplyOptions>
                <DeleteContainer
                  disabled={isEditing}
                  onClick={() => setOpen(true)}
                >
                  <DeleteIcon />
                  Delete
                </DeleteContainer>
                <EditContainer
                  onClick={() => setIsEditing(true)}
                  disabled={isEditing}
                >
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
          {isEditing ? (
            <EditedComment>
              <InputText
                onChange={(e) => setEditedContent(e.target.value)}
                value={editedContent}
              />
              <UpdateButton onClick={handleCommentUpdate}>UPDATE</UpdateButton>
            </EditedComment>
          ) : (
            <Input> {content}</Input>
          )}
        </StyledRightContainer>
      </CommentContainer>

      {reply && (
        <ReplyContainer>
          <AddComment
            submitButtonText="reply"
            parentId={id}
            onCommentSubmit={handleCommentSubmit}
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
      {open && (
        <PopupContainer>
          <PopupBox>
            <PopupHeader> Delete comment </PopupHeader>
            <PopupBody>
              Are you sure you want to delete this comment? This will remove the
              comment and cannot be undone.
            </PopupBody>
            <PopupButtonsContainer>
              <DeleteButton onClick={handleDelete}>YES, DELETE</DeleteButton>
              <CancelButton onClick={() => setOpen(false)}>
                NO, CANCEL
              </CancelButton>
            </PopupButtonsContainer>
          </PopupBox>
        </PopupContainer>
      )}
    </div>
  );
};

export default Comment;
