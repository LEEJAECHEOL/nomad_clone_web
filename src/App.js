import { Content } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";
import Challenges from "./pages/challenges/Challenges";
import Community from "./pages/community/List";
import FAQ from "./pages/faq/FAQ";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

import { Global } from "./style";
import { Col, Row } from "antd";
import Write from "./pages/community/Write";
import FaqDetail from "./pages/faq/FaqDetail";
import CommunityDetail from "./pages/community/Detail";
import DashBoard from "./pages/user/DashBoard";
import EditProfile from "./pages/user/EditProfile";
import UploadTest from "./pages/test/UploadTest";
import CoursesDetail from "./pages/admin/courses/CoursesDetail";
import ClientCoursesDetail from "./pages/courses/ClientCoursesDetail";
import AdminFaqSave from "./pages/admin/faq/AdminFaqSave";
import AdminFaqList from "./pages/admin/faq/AdminFaqList";
import FolderList from "./pages/admin/video/FolderList";
import FolderDetail from "./pages/admin/video/FolderDetail";
import AdminFaqUpdate from "./pages/admin/faq/AdminFaqUpdate";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMyInfoRequestAction } from "./reducers/user";
const App = () => {
  const dispatch = useDispatch();
  // 새로고침 시 유저 인포 다시 가져오기
  useEffect(() => {
    dispatch(loadMyInfoRequestAction());
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/join" exact={true} component={Join} />
        <Route path="/courses" exact={true} component={Courses} />
        <Route path="/challenges" exact={true} component={Challenges} />
        <Route path="/community" exact={true} component={Community} />
        <Route
          path="/communityDetail/:id"
          exact={true}
          component={CommunityDetail}
        />
        <Route path="/faq" exact={true} component={FAQ} />
        <Route path="/faq/:id" exact={true} component={FaqDetail} />
        <Route path="/write" exact={true} component={Write} />
        <Route path="/dashboard/:id" exact={true} component={DashBoard} />
        <Route path="/editProfile/:id" exact={true} component={EditProfile} />
        <Route path="/upload" exact={true} component={UploadTest} />
        <Route path="/adminFaqSave" exact={true} component={AdminFaqSave} />
        <Route path="/adminFaqList" exact={true} component={AdminFaqList} />
        <Route
          path="/adminFaqUpdate/:id"
          exact={true}
          component={AdminFaqUpdate}
        />

        <Route path="/admin/video" exact={true} component={FolderList} />
        <Route path="/admin/video/:id" exact={true} component={FolderDetail} />
        <Route path="/admin/courses" exact={true} component={CoursesDetail} />
      </Switch>
    </>
  );
};

export default App;
