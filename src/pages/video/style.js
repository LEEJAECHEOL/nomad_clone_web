import { Layout, Menu, Breadcrumb } from "antd";
import styled from "styled-components";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const VideoLayout = styled(Layout)`
  height: 100vh;
  .CourseTitle {
    font-size: 18px;
    padding: 12px 16px;
    background: #fff;
    h3 {
      margin: 0;
    }
  }
  aside {
    max-width: 400px !important;
    min-width: 300px !important;
    width: 400px !important;
    position: relative;
  }
  .ant-layout-sider-collapsed {
    max-width: 80px !important;
    min-width: 80px !important;
    width: 80px !important;
  }
  .ant-layout-sider-children {
    width: 100%;
    overflow-y: auto;
  }
  .ant-layout-sider-trigger {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100% !important;
  }
`;

export const CourseTitleIcon = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const CourseItemIcon = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const VideoMain = styled(Content)`
  padding: 30px;
  overflow: scroll;
  .embed-container {
    position: relative;
    padding-bottom: 56.25%; /* 16/9 ratio */
    height: 0;
    margin: 0;
  }
  .embed-container iframe,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CourseTitle = styled(Breadcrumb.Item)`
  display: block;
  padding-left: 5px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const CourseReply = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const CourseReplyItem = styled.div`
  display: flex;
  align-items: center;
  height: 133px;
  .ReplyItemImage {
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  }
  .ReplyItemContent {
    margin-left: 10px;
    width: 684px;
    padding: 12px 20px 20px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display: flex;

    .ReplyInfo {
      width: 90%;
    }
  }
`;
