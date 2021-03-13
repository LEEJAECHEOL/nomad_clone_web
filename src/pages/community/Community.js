import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../../components/style";
import {
  CommunityBoard,
  CommunityCategory,
  CommunityContainer,
  CommunityWriteButton,
  CommunityWrite,
  CommunityBoardItem,
  CommunityBoardContainer,
} from "./style";

const Community = () => {
  return (
    <>
      <PageHero>
        <h1>Community</h1>
        <p>개발자 99% 커뮤니티에서 수다 떨어요!</p>
      </PageHero>

      <CommunityContainer justify="center">
        {/* 카테고리 */}
        <CommunityCategory span={5}>
          <h3>카테고리</h3>
          <Menu mode="vertical">
            <Menu.Item>
              <Link>
                <span>#</span>all
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>to-do-list
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>javascript
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>bla-bla
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>html_css
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>python
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>dev_resource
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>jobs
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>side_projects
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>announcement
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>uber_eats
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>react
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>hello
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>instaclone
              </Link>
            </Menu.Item>
          </Menu>
        </CommunityCategory>
        {/* 중앙 Board */}
        <CommunityBoard span={14}>
          <div className="Community-Filter">
            <div>
              <b>Sort by: </b>
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="fire"
                  class="svg-inline--fa fa-fire fa-w-12 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                  ></path>
                </svg>
                Popular
              </span>
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bolt"
                  class="svg-inline--fa fa-bolt fa-w-10 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                  ></path>
                </svg>
                New
              </span>
            </div>
            <div>
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="svg-inline--fa fa-search fa-w-16 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
                Search
              </span>
            </div>
          </div>
          <CommunityBoardContainer>
            <Link to="/community-detail">
              <CommunityBoardItem size="large">
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
                    <div className="Info-Reply">
                      &#8226; &nbsp;
                      <span>💬</span>
                      <b>1</b>
                    </div>
                  </div>
                </div>
                <div className="Board-UserImg">
                  <img src="./images/userImage.jpg" alt="" />
                </div>
              </CommunityBoardItem>
            </Link>
          </CommunityBoardContainer>
        </CommunityBoard>
        {/* 글쓰기 버튼 */}
        <CommunityWrite span={5}>
          <CommunityWriteButton type="primary" size={"small"}>
            <Link to="/write">글쓰기</Link>
          </CommunityWriteButton>
        </CommunityWrite>
      </CommunityContainer>
    </>
  );
};

export default Community;
