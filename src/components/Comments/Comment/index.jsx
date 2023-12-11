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
} from "./styles";

import PlusIcon from "../../../assets/PlusIcon.svg?react";
import MinusIcon from "../../../assets/MinusIcon.svg?react";
import ReplyIcon from "../../../assets/ReplyIcon.svg?react";

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
          <ProfileInfo>
            <ProfilePicture />
            <HandleContainer> amyrobson </HandleContainer>
            <DateContainer> 1 month ago </DateContainer>
          </ProfileInfo>
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
