import React from "react";
import { Form, FormLable, FormInput, SubmitButton } from "./LoginForm.style";
const LoginForm = () => {
  return (
    <Form>
      <FormLable>Enter you name</FormLable>
      <FormInput placeholder="hey enter your name"></FormInput>
      <FormLable color="gray">Enter you name</FormLable>
      <FormInput placeholder="hey enter your name"></FormInput>
      <FormLable>Enter you name</FormLable>
      <FormInput placeholder="hey enter your name"></FormInput>
      <FormLable>Enter you name</FormLable>
      <FormInput placeholder="hey enter your name"></FormInput>
      <FormLable>Enter you name</FormLable>
      <FormInput placeholder="hey enter your name"></FormInput>
      <FormLable>Enter you name</FormLable>
      <FormInput placeholder="hey enter your name"></FormInput>

      <br></br>
      <br></br>
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default LoginForm;
