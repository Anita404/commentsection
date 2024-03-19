import styled from "styled-components";

export const CommentContainer = styled.div`
  background: white;
  width: 730px;
  height: 120px;
  border-radius: 8px;
  display: flex;
  padding: 24px;

  margin-bottom: 16px;

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

export const StyledRightContainer = styled.div``;

export const ProfilePicture = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  border-color: white;
  background-color: #000;
`;

export const InnerContainer = styled.div`
  height: 98.5px;
  padding-left: 15px;
  display: flex;
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

export const ReplyContainer = styled.button`
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
