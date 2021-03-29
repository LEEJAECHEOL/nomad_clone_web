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
  width: 90%;
  margin: 0 auto;
  .simpleInfoBox {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-bottom: 96px;
    img {
      flex: 1;
      max-width: 192px;
      height: 192px;
      border-radius: 20px;
      margin-right: 20px;
    }
    div {
      flex: 2;
      min-width: 390px;
      padding: 24px;
      background: #fff;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      h3 {
        font-size: 30px;
      }
      p {
        font-size: 18px;
        color: #4b5563;
      }
    }
  }
  .simpleInfoBoxR {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-bottom: 96px;
    img {
      flex: 1;
      max-width: 192px;
      height: 192px;
      border-radius: 20px;
      margin-right: 20px;
    }
    div {
      flex: 2;
      min-width: 390px;
      padding: 24px;
      background: #fff;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      h3 {
        font-size: 30px;
      }
      p {
        font-size: 18px;
        color: #4b5563;
      }
    }
  }
`;

export const ConcepConatiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .concepTitle {
    font-size: 36px;
    margin-bottom: 12px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    margin: 0;
    margin-bottom: 70px;
  }
  .concepVisual {
    display: flex;
    flex-wrap: wrap;
    padding: 0 32px;
    gap: 30px;
    .concepLeft {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 5 00px;
      min-width: 440px;
      grid-gap: 20px;
      div {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        background: #fff;
        padding: 12px;
        h3 {
          text-align: center;
          margin: 0;
          margin-bottom: 10px;
          padding: 5px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        p {
          svg {
            margin: 0 10px;
          }
          font-size: 14px;
        }
      }
    }
    .concepRight {
      flex: 1;
      min-width: 450px;
      background: #111827;
      border-radius: 10px;
      overflow: hidden;
      .console {
        background: #374151;
        height: 35px;
        display: flex;
        align-items: center;
        padding: 0 30px;
        span {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: #fde047;
          border-radius: 50%;
          position: relative;
          :after {
            content: "";
            position: absolute;
            left: -20px;
            top: 0;
            width: 12px;
            height: 12px;
            background: #ef4444;
            border-radius: 50%;
          }
          :before {
            content: "";
            position: absolute;
            right: -20px;
            bottom: 0px;
            width: 12px;
            height: 12px;
            background: #10b981;
            border-radius: 50%;
          }
        }
      }
      .consoleConcept {
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        b {
          font-size: 20px;
          color: #fff;
        }
        .endB {
          margin-left: 15px;
        }
        p {
          color: #fff;
          font-size: 20px;
          margin: 0;
        }
        h3 {
          color: #fee08a;
          span {
            color: #00ffff;
          }
        }
      }
      h4 {
        text-indent: 30px;
        color: #fff;
        font-size: 16px;
        span {
          color: #00ffff;
        }
      }
    }
  }
`;

export const ConceptLayout = styled(ColorLayout)`
  padding: 100px 0 150px;
  .afterLecture {
    text-align: center;
    font-size: 36px;
    h2 {
      font-weight: bold;
      margin-bottom: 50px;
    }
    p {
      font-size: 18px;
      strong {
        margin-left: 10px;
        font-weight: normal;
      }
    }
  }
`;

export const LevelDetailLayout = styled(ColorLayout)`
  padding: 100px 0 150px;
  text-align: center;
  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  p {
    font-size: 20px;
    color: #111827;
    font-weight: bold;
    padding: 0 20px;
  }
`;

export const PurchaseLayout = styled(ColorLayout)`
  h2 {
    color: #000;
    text-align: center;
    margin-top: 80px;
    font-size: 36px;
  }
  h3 {
    font-weight: normal;
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
  }
  .purchaseBox {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 15px;
    .purchaseInfo {
      flex: 2;
      padding: 48px;
      h3 {
        font-size: 30px;
        font-weight: bold;
      }
      p {
        margin-top: 24px;
        color: #6b7280;
        font-size: 16px;
      }
      .included {
        padding: 20px 0;
        display: flex;
        align-items: center;
        span {
          display: block;
          min-width: 150px;
          color: #2563eb;
          font-weight: bold;
        }
        div {
          width: 100%;
          height: 1px;
          background: #ddd;
        }
      }
      .includedBox {
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        span {
          span {
            margin-right: 5px;
            color: #374151;
          }
        }
      }
    }
    .purchasePrice {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #f9fafb;
      h4 {
        color: #111827;
        font-size: 18px;
      }
      .price {
        p {
          font-size: 48px;
          color: #111827;
          font-weight: bold;
        }
      }
      a {
        width: 80%;
        padding: 12px 20px;
        background: #000;
        text-align: center;
        border-radius: 10px;
        color: #fff;
      }
    }
  }
`;

export const CurriculumLayout = styled(ColorLayout)`
  padding: 100px 0 150px;
  .afterLecture {
    font-size: 26px;
    h2 {
      font-weight: bold;
      text-align: center;
    }

    @media only screen and (max-width: 1000px) {
      .ant-list {
        width: 80%;
      }
    }
    @media only screen and (min-width: 1000px) {
      .ant-list {
        width: 60%;
      }
    }
    .ant-list{
      margin-top:40px;
      margin:40px auto 0 auto;
      border-radius:5px;
      box-shadow: 0 5px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
      .ant-list-header{
        border-radius:5px 5px 0 0;
        background-color:white;
        padding: 10px 20px;
        font-weight:600;
      }
      .ant-spin-container li:nth-child(2n-1){
        background-color:#F3F4F6;
      }
      .ant-spin-container li:nth-child(2n){
        background-color:#fff;
      }
      .ant-spin-container li:last-child{
        border-radius: 0 0 5px 5px;
      }
    }
`;

export const FaqLayout = styled(ColorLayout)`
  padding: 100px 0 150px;
  .afterLecture {
    font-size: 26px;
    h2 {
      font-weight: bold;
      text-align: center;
    }
    @media only screen and (max-width: 1000px) {
      .ant-collapse {
        margin: 0 auto;
        width: 80%;
      }
    }
    @media only screen and (min-width: 1000px) {
      .ant-collapse {
        margin: 0 auto;
        width: 50%;
      }
    }
    .ant-collapse-header {
      font-size: 18px;
      font-weight: 600;
      border-top: 1px solid #ccc;
    }
  }
`;
