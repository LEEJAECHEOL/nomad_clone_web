import React, { useCallback, useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Progress, Form, Input, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  CourseTitleIcon,
  VideoLayout,
  CourseTitle,
  VideoMain,
  CourseReply,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  videoGetRequestAction,
  videoReplyPostRequestAction,
} from "../../reducers/video";
import VideoReplyItem from "../../components/VideoReplyItem";
import { ReplyInputForm } from "../community/style";

const { Sider } = Layout;
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
    console.log(videoList);
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

  // 여기 하는중
  const onSubmit = (values) => {
    const videoId = id;
    const data = { ...values, videoId };
    dispatch(videoReplyPostRequestAction(data));
  };

  const { videoReplyPostLoading } = useSelector((state) => state.video);

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
                allow="autoplay; fullscreen;"
                frameborder="0"
              ></iframe>
            </div>

            <ReplyInputForm onFinish={onSubmit}>
              <Form.Item name="content">
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={videoReplyPostLoading}
                >
                  Submit
                </Button>
              </Form.Item>
            </ReplyInputForm>

            <CourseReply>
              {videoList !== null ? (
                <>
                  {videoList.vreplys !== null
                    ? videoList.vreplys.map((list) => (
                        <>
                          <VideoReplyItem
                            key={"comment-" + list.id}
                            list={list}
                          />
                        </>
                      ))
                    : null}
                </>
              ) : null}
            </CourseReply>
          </VideoMain>
        </Layout>
      </VideoLayout>
    </>
  );
};

export default Detail;
