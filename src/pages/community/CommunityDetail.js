import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  CommunityBoard,
  CommunityDetailBack,
  CommunityDetailContainer,
  CommunityWrite,
  CommunityDetailItem,
  CommunityBoardContainer,
  DetailContent,
} from "./style";

const CommunityDetail = () => {
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
                    <span>15</span>
                  </button>
                </div>
                <div className="Board-Body">
                  <div className="Board-Body-Title">
                    유튜브 클론 챌린지 7기 졸업작품 및 후기입니다.
                  </div>
                  <div className="Board-Body-Info">
                    <div className="Info-Tag">
                      in &nbsp;
                      <span>#to-do-list</span>
                    </div>
                    <div className="Info-Name">
                      by &nbsp;
                      <span>username</span>
                    </div>
                    <div className="Info-Date">
                      &#8226; &nbsp;
                      <span>createdate</span>
                    </div>
                  </div>
                </div>
                <div className="Board-UserImg">
                  <img src="./images/userImage.jpg" alt="" />
                </div>
              </div>
              <DetailContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit quam quae nisi ut? Eaque ut corporis corrupti vero
                  rerum? Nulla architecto quis molestias eligendi dignissimos
                  fuga commodi ducimus, voluptates saepe.
                </p>
              </DetailContent>
            </CommunityDetailItem>
          </CommunityBoardContainer>
        </CommunityBoard>
        {/* 글쓰기 버튼 */}
        <CommunityWrite span={5}></CommunityWrite>
      </CommunityDetailContainer>
    </>
  );
};

export default CommunityDetail;
