import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BadgeBox,
  DashBoardBox,
  DashBoardContainer,
  DashBoardTabs,
  ProfileButtonBox,
} from "./style";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { dashBoardGetRequestAction } from "../../reducers/dashboard";
import { techGetRequestAction } from "../../reducers/admin/tech/index";
import AppLayout from "../../components/AppLayout";
import { LockFilled } from "@ant-design/icons";
import DashboardCourses from "../../components/DashboardCourses";
import DashBoardPayment from "../../components/DashBoardPayment";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Dashboard = ({ match }) => {
  const data = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashBoardGetRequestAction(data));
  }, []);
  const { dashBoardItem } = useSelector((state) => state.dashboard);

  const { techList } = useSelector((state) => state.admintech);

  useEffect(() => {
    dispatch(techGetRequestAction());
  }, []);

  console.log(techList);

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
                        <img src={dashBoardItem.imageUrl} alt="" />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="UserInfoName">
                    <div className="Name">
                      <p>Name</p>
                      <h3>
                        {dashBoardItem !== null ? dashBoardItem.name : ""}
                      </h3>
                    </div>
                    <div className="UserName">
                      <p>Username</p>
                      <h3>
                        {dashBoardItem !== null ? dashBoardItem.username : ""}
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
            </div>

            <div className="Dash-Top-right">
              <BadgeBox>
                {techList !== null
                  ? techList.map((list) => (
                      <>
                        <div className="BadgeItem">
                          <div className="BadgeImageWrap">
                            <img
                              src={
                                list.file !== null ? list.file.fileUrl : null
                              }
                              alt=""
                            />
                            <div className="BadgeLock">
                              <LockFilled />
                            </div>
                          </div>
                          <span>{list.title}</span>
                        </div>
                      </>
                    ))
                  : null}
              </BadgeBox>
              <p className="BadgeContent">BadgeSystem is not implemented</p>
            </div>
          </DashBoardBox>
          <DashBoardTabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="My Courses" key="1">
              <DashboardCourses match={data} />
            </TabPane>
            <TabPane tab="My Payment History" key="2">
              <DashBoardPayment match={data} />
            </TabPane>
          </DashBoardTabs>
        </DashBoardContainer>
      </AppLayout>
    </>
  );
};

export default Dashboard;
