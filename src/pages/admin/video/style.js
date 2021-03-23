import { Card, Form, List } from "antd";
import styled from "styled-components";

export const VideoList = styled(List)`
  .ant-list-item {
  }
  .ant-list-item > a {
    color: #333;
    display: flex;
  }
  .ant-list-item > a:hover {
    color: #1890ff;
  }
  .ant-list-item > a > span > svg {
    margin: 0 10px 0 5px;
    font-size: 20px;
  }
`;
export const ModalForm = styled(Form)`
  > div:last-child {
    margin-bottom: 0;
    text-align: right;
  }
  > div:last-child button:first-child {
    margin-right: 5px;
  }
`;
export const CurriculumCard = styled(Card)`
  text-align: center;
  margin-top: 20px;
  .ant-card-head-title {
    font-size: 2rem;
  }
`;
