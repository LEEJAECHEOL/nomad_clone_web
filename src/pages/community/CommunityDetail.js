import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
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
import { communityOneGetRequestAction } from "../../reducers/community";
import CommunityReplyItem from "../../components/CommunityReplyItem";
import ReactHtmlParser from "react-html-parser";
import { Button, Form } from "antd";
import { Input } from "antd";
import { replyPostRequestAction } from "../../reducers/reply";

const CommunityDetail = ({ match }) => {
  const comId = match.params.id;
  console.log("매치는?", match);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("유즈이펙트 발동?");
    dispatch(communityOneGetRequestAction(comId));
  }, []);

  // 댓글 서브밋
  const onSubmit = (values) => {
    const data = { ...values, comId };
    console.log("댓글", data);
    dispatch(replyPostRequestAction(data));
  };

  const { communityItem } = useSelector((state) => state.community);
  const { replyPostLoading } = useSelector((state) => state.reply);
  console.log("이게 디테일 데이터", communityItem);

  return (
    <>
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
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-up"
                      class="svg-inline--fa fa-angle-up fa-w-10 fa-lg opacity-50"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
                      ></path>
                    </svg>
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
                      <span>
                        {communityItem !== null
                          ? communityItem.user.name
                          : "Title"}
                      </span>
                    </div>
                    <div className="Info-Date">
                      &#8226; &nbsp;
                      <span>
                        {communityItem !== null ? communityItem.createDate : ""}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Board-UserImg">
                  <img
                    src={
                      communityItem !== null ? communityItem.user.imageUrl : ""
                    }
                    alt=""
                  />
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
                      <CommunityReplyItem list={list} />
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
    </>
  );
};

export default CommunityDetail;
