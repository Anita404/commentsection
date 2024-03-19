import styled from "styled-components";

export const CommentContainer = styled.div`
  height: 120px;
  width: 730px;
  /* position: sticky; */
  bottom: 0px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  padding: 24px;

  @media (max-width: 375px) {
    flex-direction: column;
    width: 343px;
    height: 173px;
    padding: 16px;
    position: sticky;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfilePicture = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-image: url(${(props) => props.image});
  background-size: contain;
`;

export const InputContainer = styled.div`
  height: 96px;
  border-radius: 8px;
  border-style: solid;
  border-color: #e9ebf0;
  border-width: 1px;
  width: 528px;
  padding-left: 24px;
  padding-top: 12px;

  @media (max-width: 375px) {
    width: 311px;
  }
`;

export const InputText = styled.input`
  height: 24px;
`;

export const SendButton = styled.button`
  height: 48px;
  width: 104px;
  border-radius: 8px;
  text-align: center;
  background-color: #5357b6;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
`;
