import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, UpOutlined } from "@ant-design/icons";
import {
  CommunityBoard,
  CommunityDetailBack,
  CommunityDetailContainer,
  CommunityWrite,
  CommunityDetailItem,
  CommunityBoardContainer,
  CommunityReplyBoxContainer,
  DetailContent,
  CommunityReplyCounter,
  ReplyInputForm,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  communityOneGetRequestAction,
  replyPostRequestAction,
} from "../../reducers/community";
import CommunityReplyItem from "../../components/CommunityReplyItem";
import ReactHtmlParser from "react-html-parser";
import { Button, Form } from "antd";
import { Input } from "antd";
import { timeForToday } from "../../util/Script";
import AppLayout from "../../components/AppLayout";

const CommunityDetail = ({ match }) => {
  const { principal } = useSelector((state) => state.user);

  console.log("principal데이터", principal);
  const comId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(communityOneGetRequestAction(comId));
  }, []);

  // 댓글 서브밋
  const onSubmit = (values) => {
    const data = { ...values, comId };
    dispatch(replyPostRequestAction(data));
  };

  const { communityItem } = useSelector((state) => state.community);
  const { replyPostLoading } = useSelector((state) => state.community);

  return (
    <>
      <AppLayout>
        <CommunityDetailContainer justify="center">
          {/* 카테고리 */}
          <CommunityDetailBack span={5}>
            <Link to="/community">
              <ArrowLeftOutlined /> Go back
            </Link>
          </CommunityDetailBack>
          {/* 중앙 Board */}
          <CommunityBoard span={14}>
            <CommunityBoardContainer>
              <CommunityDetailItem size="large">
                <div className="Detail-top">
                  <div className="Board-Fav">
                    <button>
                      <UpOutlined />
                      <span>
                        {communityItem !== null ? communityItem.count : 0}
                      </span>
                    </button>
                  </div>
                  <div className="Board-Body">
                    <div className="Board-Body-Title">
                      {communityItem !== null ? communityItem.title : "Title"}
                    </div>
                    <div className="Board-Body-Info">
                      <div className="Info-Tag">
                        in &nbsp;
                        <span>
                          {communityItem !== null
                            ? communityItem.category.title
                            : "Category"}
                        </span>
                      </div>
                      <div className="Info-Name">
                        by &nbsp;
                        <Link
                          to={`/dashboard/${
                            communityItem !== null
                              ? communityItem.user.id
                              : "userId"
                          }`}
                        >
                          <span>
                            {communityItem !== null
                              ? communityItem.user.name
                              : "Title"}
                          </span>
                        </Link>
                      </div>
                      <div className="Info-Date">
                        &#8226; &nbsp;
                        <span>
                          {communityItem !== null
                            ? timeForToday(communityItem.createDate)
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="Board-UserImg">
                    <Link
                      to={`/dashboard/${
                        communityItem !== null
                          ? communityItem.user.id
                          : "userId"
                      }`}
                    >
                      <img
                        src={
                          communityItem !== null
                            ? communityItem.user.imageUrl
                            : ""
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <DetailContent>
                  <p>
                    {communityItem !== null
                      ? ReactHtmlParser(communityItem.content)
                      : "Content"}
                  </p>
                </DetailContent>
              </CommunityDetailItem>
              {/* 여기 댓글 작성 폼 */}
              <ReplyInputForm onFinish={onSubmit}>
                <Form.Item name="content">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={replyPostLoading}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </ReplyInputForm>
              {/* 여기 영역에  댓글박스*/}
              <CommunityReplyBoxContainer>
                <CommunityReplyCounter>
                  <span>
                    <b>
                      {communityItem !== null
                        ? communityItem.replys.length
                        : "zz"}
                    </b>
                    comments
                  </span>
                </CommunityReplyCounter>
                {communityItem !== null
                  ? communityItem.replys.map((list) => (
                      <>
                        <CommunityReplyItem
                          key={"comment-" + list.id}
                          list={list}
                        />
                      </>
                    ))
                  : null}
                {/* <CommunityReplyItem /> */}
              </CommunityReplyBoxContainer>
            </CommunityBoardContainer>
          </CommunityBoard>
          {/* 글쓰기 버튼 */}
          <CommunityWrite span={5}></CommunityWrite>
        </CommunityDetailContainer>
      </AppLayout>
    </>
  );
};

export default CommunityDetail;
