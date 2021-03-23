import styled from "styled-components";

// Course-Item
export const CourseBox = styled.div`
  min-width: 378px;
  flex: 1;
  box-sizing: border-box;
  position: relative;
  margin: 0 20px;
  cursor: pointer;
  /* overflow: hidden; */
  border-radius: 10px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  div {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 20px 8px;
    position: absolute;
    left: 50%;
    bottom: -40px;
    transform: translate(-50%, 0);
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  :hover {
    transform: translateY(-5px);
    transition: all 0.5s;
    img {
      transform: scale(1.05);
      transition: all 0.5s;
    }
  }
`;

// Challenge-Item
export const ChallengeBox = styled.div`
  width: 368px;
  height: 434px;
  padding: 20px;
  box-shadow: 5px 20px 25px 5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  border-radius: 10px;
  h2 {
    text-align: center;
    margin: 4px 0 28px;
    font-size: 30px;
    font-weight: normal;
  }
  p {
    display: flex;
    align-items: center;
    margin-bottom: 26px;
    span {
      display: flex;
      width: 32px;
      height: 32px;
      background: #e5e7eb;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin-right: 8px;
      svg {
        width: 20px;
        color: #6b7280;
      }
    }
    img {
      display: block;
      width: 48px;
      padding: 3px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 50%;
    }
  }
  div.starts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
    padding: 8px;
    font-weight: 600;
    font-size: 14px;
    h2 {
      font-size: 24px;
      line-height: 1;
      margin: 0;
    }
  }
  a {
    display: block;
    background: #faca15;
    padding: 12px;
    text-align: center;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const PageHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 112px 0;
  h1 {
    font-size: 48px;
    color: #111827;
    line-height: 1;
    margin: 0;
  }
  p {
    margin-top: 22px;
    line-height: 1px;
    font-size: 20px;
    color: #6b7280;
  }
`;

export const CommunityReplyCard = styled.div`
  padding: 12px 12px 20px;
  margin-bottom: 20px;

  display: flex;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  .ReplyItemLeft {
    margin-right: 10px;
  }
  .ReplyItemRight {
    width: 100%;
  }
  .ReplyItemRightHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .ReplyItemRightUserInfo {
      span {
        margin-right: 10px;
        color: #4b5563;
      }
      img {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
  }
`;
