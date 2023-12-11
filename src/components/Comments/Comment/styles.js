import styled from "styled-components";

export const CommentContainer = styled.div`
  background: white;
  width: 730px;
  height: 167px;
  margin-top: 64px;
  margin-left: 355px;
  border-radius: 8px;
  display: flex;
`;

export const StyledLeftContainer = styled.div`
  width: 85px;
`;

export const Input = styled.div`
  line-height: 24px;
  margin-top: 15px;
  width: 618px;
  font-family: "rubik";
  font-weight: 400;
  color: #67727e;
`;

export const Number = styled.div`
  font-weight: 500;
  color: #5357b6;
`;

export const Header = styled.div`
  height: 32px;
  width: 610px;
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

export const LikeButton = styled.div`
  width: 40px;
  height: 100px;
  border-radius: 8px;
  margin-top: 24px;
  margin-left: 24px;
  background-color: #f5f6fa;
`;

export const StyledRightContainer = styled.div`
  width: 642px;
`;

export const ProfilePicture = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  border-color: white;
  background-color: #000;
`;

export const InnerContainer = styled.div`
  height: 98.5px;
  width: 24px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const HandleContainer = styled.div`
  height: 19px;
  width: 87px;
  font-weight: 500;
  line-height: normal;
  color: #334253;
  margin-left: 16px;
`;

export const DateContainer = styled.div`
  height: 24px;
  width: 92px;
  color: #67727e;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-left: 16px;
`;

export const ReplyContainer = styled.button`
  height: 24px;
  width: 66px;
  color: #5357b6;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
