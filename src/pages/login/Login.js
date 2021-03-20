import React, { useEffect } from "react";
import { LoginContainer, LoginForm } from "./style";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../reducers/user";

const Login = ({ history }) => {
  const { logInLoading, logInError, logInDone } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  // 로그인 성공 시
  useEffect(() => {
    if (logInDone) {
      history.push("/");
    }
  }, [logInDone, history]);

  // 로그인 실패 시
  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const googleLogin = (response) => {
    console.log("responseGoogle is run");
    console.log(1, response);
    dispatch(loginRequestAction(response));

    // let jwtToken = await axios.post(
    //   "http://localhost:8080/oauth/jwt/google",
    //   JSON.stringify(response),
    //   config
    // );
    // if (jwtToken.status === 200) {
    //   console.log(2, jwtToken.data);
    //   localStorage.setItem("jwtToken", jwtToken.data);
    // }
  };

  return (
    <>
      <LoginContainer bordered={false}>
        <h2>Log in to Nomad Coders</h2>
        <LoginForm>
          <GoogleLogin
            clientId="313981373260-062a94g5hlt225s78jc4fjsa463hm2p6.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={googleLogin}
            onFailure={googleLogin}
            cookiePolicy={"single_host_origin"}
          />
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default Login;
