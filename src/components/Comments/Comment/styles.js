import styled from "styled-components";

export const CommentContainer = styled.div`
  background: white;
  width: ${(props) => props.width};
  height: 120px;
  border-radius: 8px;
  display: flex;
  padding: 24px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media (max-width: 375px) {
    width: 343px;
  }
`;

export const StyledLeftContainer = styled.div`
  margin-right: 24px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Input = styled.div`
  line-height: 24px;
  font-weight: 300;
  color: #67727e;
`;

export const Number = styled.div`
  font-weight: 500;
  color: #5357b6;
`;

export const Header = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
`;

export const LikeButton = styled.div`
  height: 100px;
  width: 40px;
  border-radius: 8px;
  background-color: #f5f6fa;
`;

export const StyledRightContainer = styled.div`
  width: 100%;
`;

export const ProfilePicture = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  border-color: white;
  background-image: url(${(props) => props.image});
  background-size: contain;
`;

export const InnerContainer = styled.div`
  height: 98.5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const HandleContainer = styled.div`
  height: 19px;
  font-weight: 500;
  line-height: normal;
  color: #334253;
`;

export const DateContainer = styled.div`
  height: 24px;
  color: #67727e;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ReplyButton = styled.button`
  height: 24px;
  color: #5357b6;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const NestedComments = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 43px;
`;

export const ReplyThread = styled.div`
  width: 2px;
  background: #e9ebf0;
`;

export const RepliesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReplyContainer = styled.div`
  margin-bottom: 20px;
`;

export const DeleteContainer = styled.button`
  font-weight: 450;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #ed6368;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export const EditContainer = styled(DeleteContainer)`
  color: #5357b6;
`;

export const ReplyOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Pop-up related styles

export const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupBox = styled.div`
  position: absolute;
  width: 400px;
  height: 252px;
  top: 250px;
  left: 520px;
  margin: auto;
  border-radius: 7px;
  background: white;
`;

export const PopupHeader = styled.div`
  position: absolute;
  width: 193px;
  height: 28px;
  top: 32px;
  left: 32px;
  font-size: 24px;
  font-weight: 460;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #334253;
`;

export const PopupBody = styled.div`
  position: absolute;
  width: 336px;
  height: 72px;
  top: 80px;
  left: 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #67727e;
`;

export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 336px;
  height: 48px;
  top: 172px;
  left: 32px;
  position: absolute;
`;

export const DeleteButton = styled.button`
  border-radius: 8px;
  text-align: center;
  width: 161px;
  height: 48px;
  color: white;
  background-color: #ed6368;
`;

export const CancelButton = styled(DeleteButton)`
  background-color: #67727e;
`;
