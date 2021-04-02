import { Card } from "antd";
import styled from "styled-components";

export const TechListContainer = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const TechCard = styled(Card)`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 150px;
      margin-bottom: 40px;
    }
  }
`;
