import React from "react";
import { Link } from "react-router-dom";
import {
  BadgeBox,
  DashBoardBox,
  DashBoardContainer,
  DashBoardTabs,
  LevelBox,
  ProfileButtonBox,
} from "./style";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Dashboard = () => {
  return (
    <>
      <DashBoardContainer>
        <h1>DashBoard</h1>
        <DashBoardBox>
          <div className="Dash-Top-left">
            <div className="UserInfoBox">
              <div className="UserInfo">
                <div className="UserInfo-Img">
                  <svg
                    class="w-full h-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div className="UserInfoName">
                  <div className="Name">
                    <p>Name</p>
                    <h3>DongTaeWan</h3>
                  </div>
                  <div className="UserName">
                    <p>Username</p>
                    <h3>dongtae07</h3>
                  </div>
                </div>
              </div>
              <ProfileButtonBox>
                <Link>Edit profile</Link>
                <Link className="btn-blue">Edit profile</Link>
              </ProfileButtonBox>
            </div>
            <LevelBox>
              <img src="./images/shield_1.svg" alt="" />
              <div className="Level-Content">
                <h3>You are level 1</h3>
                <p>
                  Join more courses and complete challenges to unlock the next
                  level!
                </p>
              </div>
            </LevelBox>
          </div>

          <div className="Dash-Top-right">
            <BadgeBox>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>

              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>

              <div className="BadgeItem">
                <div className="BadgeImageWrap">
                  <img src="./images/js.png" alt="" />
                  <div className="BadgeLock">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-3 h-3 text-white"
                    >
                      <path
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>ES6</span>
              </div>
            </BadgeBox>
            <p className="BadgeContent">
              Join more challenges to unlock all badges!
            </p>
          </div>
        </DashBoardBox>
        <DashBoardTabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="My Courses" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="My Challenges" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="My Issues" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="My Notes" key="4">
            Content of Tab Pane 4
          </TabPane>
          <TabPane tab="My Coupons" key="5">
            Content of Tab Pane 5
          </TabPane>
          <TabPane tab="My Payment History" key="6">
            Content of Tab Pane 6
          </TabPane>
        </DashBoardTabs>
      </DashBoardContainer>
    </>
  );
};

export default Dashboard;
