import React, { useState } from "react";
import { loginUser } from "../utils";
import {
  Form,
  Input,
  LoginButton,
  SignUpButton,
  PageTitle,
  Container,
  NoAccount
} from "./style";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const goToPage = (link) => {
    props.history.push(`/${link}`);
  };

  const clickLink = (e) => {
    e.preventDefault();
    const link = e.target.value;
    goToPage(link);
  };

  const login = (e) => {
    e.preventDefault();
    loginUser("https://divercity-test.herokuapp.com/login", {
      username,
      password
    }).then((data) => {
      localStorage.setItem("token", `${data.token}`);
    });
    goToPage("job-listings");
  };

  return (
    <div>
      <Container>
        <PageTitle>Join the Team!</PageTitle>
        <Form onSubmit={login}>
          <Input
            type="text"
            required
            placeholder="Username"
            onChange={(event) => setUserName(event.target.value)}
          ></Input>
          <Input
            type="text"
            required
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          ></Input>
          <LoginButton type="submit">LOGIN</LoginButton>
        </Form>
      </Container>
      <NoAccount>
        Not a member?
        <SignUpButton onClick={clickLink} value="create-account">
          Sign Up
        </SignUpButton>
      </NoAccount>
    </div>
  );
};

export default Login;
