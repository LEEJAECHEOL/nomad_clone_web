import styled from "styled-components";
import { ColorLayout } from "../admin/courses/style";

export const CoursesFilter = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  div.Filter-left {
    flex: 1;
    min-width: 483px;
    height: 375px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    div {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 16px;
        margin-bottom: 20px;
      }
      p {
        span {
          padding: 4px 16px;
          background: #e5e7eb;
          border-radius: 15px;
          cursor: pointer;
        }
      }
    }
  }
  div.Filter-right {
    flex: 1;
    padding: 0 50px;
    min-width: 483px;
    height: 375px;
    box-sizing: border-box;
    h3 {
      text-align: center;
      font-size: 16px;
      margin-bottom: 20px;
    }
    div.Badges {
      display: grid;
      grid-template-columns: repeat(5, minmax(50px, 1fr));
      grid-gap: 10px;
      justify-items: center;
      box-sizing: border-box;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        padding: 5px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 50%;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
    }
  }
`;

export const CoursesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(378px, 1fr));
  row-gap: 70px;
  padding-bottom: 224px;
`;

export const CoursesDetailLayout = styled(ColorLayout)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .mainImage {
    width: 50%;
    padding: 80px 32px 20px;
    img {
      width: 100%;
    }
  }
  .titleContainer {
    * {
      text-align: center;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .badgeContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    position: absolute;
    left: 50%;
    top: -140px;
    transform: translateX(-50%);
    z-index: 100000000000 !important;
    img {
      width: 128px;
      border: 7px solid #fff;
      border-radius: 50%;
      transition: 0.3s all;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
`;

export const CourseInfomation = styled.div`
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  div {
    flex: 1;
    padding: 24px;
    min-width: 230px;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    :last-child {
      /* border: none; */
    }
    h2 {
      color: #2563eb;
      font-size: 48px;
      font-weight: bold;
    }
    p {
      color: #6b7280;
      font-size: 18px;
    }
  }
`;

export const SimpleInfo = styled.div`
  padding: 30px 0;
  .simpleInfoBox {
    display: flex;
    img {
      width: 192px;
      height: 192px;
    }
    div {
      padding: 24px;
    }
    .simpleInfoBoxR {
    display: flex;
    img {
      width: 192px;
      height: 192px;
    }
    div {
      padding: 24px;
    }
  }
`;
