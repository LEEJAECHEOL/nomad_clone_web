import { Content } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";
import Challenges from "./pages/challenges/Challenges";
import Community from "./pages/community/Community";
import FAQ from "./pages/faq/FAQ";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

import { Global } from "./style";
import { Col, Row } from "antd";
import Write from "./pages/community/Write";
import FaqDetail from "./pages/faq/FaqDetail";
import CommunityDetail from "./pages/community/CommunityDetail";
import DashBoard from "./pages/user/DashBoard";
import EditProfile from "./pages/user/EditProfile";
import UploadTest from "./pages/test/UploadTest";

const App = () => {
  return (
    <>
      <Global />
      <MyHeader />
      <Content>
        <Row>
          <Col xs={1} sm={1} md={2} lg={2} xl={3}></Col>
          <Col xs={22} sm={22} md={20} lg={20} xl={18}>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/login" exact={true} component={Login} />
              <Route path="/join" exact={true} component={Join} />
              <Route path="/courses" exact={true} component={Courses} />
              {/* <Route
                path="/courses/:id"
                exact={true}
                component={CoursesDetail}
              /> */}
              <Route path="/challenges" exact={true} component={Challenges} />
              <Route path="/community" exact={true} component={Community} />
              <Route
                path="/community-detail"
                exact={true}
                component={CommunityDetail}
              />
              <Route path="/faq" exact={true} component={FAQ} />
              <Route path="/faq-detail" exact={true} component={FaqDetail} />
              <Route path="/write" exact={true} component={Write} />
              <Route path="/dashboard" exact={true} component={DashBoard} />
              <Route
                path="/edit-profile"
                exact={true}
                component={EditProfile}
              />
              <Route path="/upload" exact={true} component={UploadTest} />
            </Switch>
          </Col>
          <Col xs={1} sm={1} md={2} lg={2} xl={3}></Col>
        </Row>
      </Content>
      <MyFooter />
    </>
  );
};

export default App;
