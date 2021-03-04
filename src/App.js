import { Content } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/login/Login";
import Courses from "./pages/Courses";
import Challenges from "./pages/Challenges";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

import { Global } from "./style";

const App = () => {
  return (
    <>
      <Global />
      <MyHeader />
      <Content>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/join" exact={true} component={Join} />
          <Route path="/courses" exact={true} component={Courses} />
          <Route path="/challenges" exact={true} component={Challenges} />
          <Route path="/community" exact={true} component={Community} />
          <Route path="/faq" exact={true} component={FAQ} />
        </Switch>
      </Content>
      <MyFooter />
    </>
  );
};

export default App;
