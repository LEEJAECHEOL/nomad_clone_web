import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { dashBoardGetRequestAction } from "../../reducers/dashboard";
import AppLayout from "../../components/AppLayout";
import { LockOutlined, LockFilled } from "@ant-design/icons";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Dashboard = ({ match }) => {
  const data = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("유즈이펙트 발동?");
    dispatch(dashBoardGetRequestAction(data));
  }, []);
  const { dashBoardItem } = useSelector((state) => state.dashboard);

  console.log("유저 디테일 데이터", dashBoardItem);
  return (
    <>
      <AppLayout>
        <DashBoardContainer>
          <h1>DashBoard</h1>
          <DashBoardBox>
            <div className="Dash-Top-left">
              <div className="UserInfoBox">
                <div className="UserInfo">
                  <div className="UserInfo-Img">
                    {dashBoardItem !== null ? (
                      <>
                        <img
                          src={
                            dashBoardItem.file !== null
                              ? dashBoardItem.file.fileUrl
                              : dashBoardItem.imageUrl
                          }
                          alt=""
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="UserInfoName">
                    <div className="Name">
                      <p>Name</p>
                      <h3>
                        {dashBoardItem !== null ? dashBoardItem.name : "몰라"}
                      </h3>
                    </div>
                    <div className="UserName">
                      <p>Username</p>
                      <h3>
                        {dashBoardItem !== null
                          ? dashBoardItem.username
                          : "몰라"}
                      </h3>
                    </div>
                  </div>
                </div>
                <ProfileButtonBox>
                  <Link to={`/editProfile/${data}`} className="btn-blue">
                    Edit profile
                  </Link>
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
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>
                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>

                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
                    </div>
                  </div>
                  <span>ES6</span>
                </div>

                <div className="BadgeItem">
                  <div className="BadgeImageWrap">
                    <img src="./images/js.png" alt="" />
                    <div className="BadgeLock">
                      <LockFilled />
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
      </AppLayout>
    </>
  );
};

export default Dashboard;
