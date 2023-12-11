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
} from "./styles";

import PlusIcon from "../../../../images/PlusIcon.svg?react";
import MinusIcon from "../../../../images/MinusIcon.svg?react";
import ReplyIcon from "../../../../images/ReplyIcon.svg?react";

const Comment = () => {
  return (
    <CommentContainer>
      <StyledLeftContainer>
        <LikeButton>
          <InnerContainer>
            <PlusIcon onClick={""} />
            <Number> 5 </Number>
            <MinusIcon onClick={""} />
          </InnerContainer>
        </LikeButton>
      </StyledLeftContainer>
      <StyledRightContainer>
        <Header>
          <ProfilePicture />
          <HandleContainer> amyrobson </HandleContainer>
          <DateContainer> 1 month ago </DateContainer>
          <ReplyContainer>
            <ReplyIcon />
            Reply
          </ReplyContainer>
        </Header>
        <Input>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You’ve nailed the design and the
          responsiveness at various breakpoints works really well.
        </Input>
      </StyledRightContainer>
    </CommentContainer>
  );
};

export default Comment;
