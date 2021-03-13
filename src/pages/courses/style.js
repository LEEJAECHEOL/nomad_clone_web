import styled from "styled-components";

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
