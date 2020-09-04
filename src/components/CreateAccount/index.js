import React, { useState } from "react";
import { registerUser } from "../utils";
import {
  PageTitle,
  Button,
  Input,
  Form,
  Container,
  NoAccount,
  SignUpButton
} from "./style";

const CreateAccount = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const goToPage = (link) => {
    props.history.push(`/${link}`);
  };

  const clickLink = (e) => {
    e.preventDefault();
    const link = e.target.value;
    goToPage(link);
  };

  const register = () => {
    registerUser("https://divercity-test.herokuapp.com/register", {
      username,
      password,
      name
    }).then((data) => {
      return data;
    });
    goToPage("login");
  };

  return (
    <div>
      <Container>
        <PageTitle>Create Account</PageTitle>
        <Form onSubmit={register}>
          <Input
            type="text"
            required
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          ></Input>
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
          <Button type="submit">SIGN UP</Button>
        </Form>
      </Container>
      <NoAccount>
        Already have an account?
        <SignUpButton onClick={clickLink} value="login">
          Sign Up
        </SignUpButton>
      </NoAccount>
    </div>
  );
};

export default CreateAccount;
