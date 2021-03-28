import React, { useCallback, useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Progress, Card } from "antd";
import { HomeOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  CourseTitleIcon,
  VideoLayout,
  CourseTitle,
  VideoMain,
  CourseReply,
  CourseReplyItem,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { videoGetRequestAction } from "../../reducers/video";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

const Detail = ({ match }) => {
  const [vimeo, setVimeo] = useState("");
  const [vimeoTitle, setVimeoTitle] = useState("");
  const id = match.params.id;
  const dispatch = useDispatch();
  const { videoList } = useSelector((state) => state.video);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    dispatch(videoGetRequestAction(id));
  }, []);
  useEffect(() => {
    if (videoList !== null) {
      setVimeo(videoList.contents[0].list[0].vimeoId);
      setVimeoTitle(videoList.contents[0].list[0].title);
    }
  }, [videoList]);

  const onCollapse = () => setCollapsed(!collapsed);
  const onClickHandler = useCallback(({ item }) => {
    console.log(item);
    setVimeo(item.props.vimeoId);
    setVimeoTitle(item.props.children[1]);
  }, []);
  return (
    <>
      <VideoLayout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          {collapsed ? (
            <CourseTitleIcon>
              <HomeOutlined />
            </CourseTitleIcon>
          ) : (
            <div className="CourseTitle">
              <h3>[풀스택] 유튜브 클론코딩</h3>
              <Progress percent={0} status="active" />
            </div>
          )}

          <Menu
            theme="dark"
            defaultSelectedKeys={["0-0"]}
            defaultOpenKeys={["0"]}
            mode="inline"
          >
            {videoList !== null
              ? videoList.contents.map((list, index) => (
                  <SubMenu
                    key={index}
                    icon={
                      <span className="anticon anticon-mail">#{index} </span>
                    }
                    title={list.title}
                  >
                    {list.list.map((item, itemIndex) => (
                      <Menu.Item
                        key={`${index}-${itemIndex}`}
                        onClick={onClickHandler}
                        vimeoId={item.vimeoId}
                      >
                        {item.title}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ))
              : ""}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <VideoMain>
            <Breadcrumb>
              <CourseTitle>{vimeoTitle}</CourseTitle>
            </Breadcrumb>
            <div className="embed-container">
              <iframe
                src={"https://player.vimeo.com/video/" + vimeo}
                frameborder="0"
                allowfullscreen
                title="Recap!"
              ></iframe>
            </div>
            <CourseReply>
              <CourseReplyItem>
                <div className="ReplyItemImage">
                  <img src="http://localhost:3000/test.jpg" alt="" />
                </div>
                <div className="ReplyItemContent">
                  <div className="ReplyInfo">
                    <p>
                      <b>username</b> <span>createdate</span>{" "}
                    </p>
                    <div>content내용</div>
                  </div>
                  <div className="ReplyFab">좋아요</div>
                </div>
              </CourseReplyItem>
            </CourseReply>
          </VideoMain>
        </Layout>
      </VideoLayout>
    </>
  );
};

export default Detail;
