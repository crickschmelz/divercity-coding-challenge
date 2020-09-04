import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  ExitButton,
  SuccessModal,
  RegisterHeader
} from "./style";
import { applyToJob } from "../../utils";

const ApplyModal = (props) => {
  const { closeApplication } = props;
  const [motivation, setMotivation] = useState("");
  const [cover_letter, setCoverLetter] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const openMessage = (e) => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      closeApplication();
    }, 2000);
    e.currentTarget.reset();
  };

  const apply = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    applyToJob("https://divercity-test.herokuapp.com/jobs/2/apply", token, {
      motivation,
      cover_letter
    }).then((data) => {
      return data;
    });
    openMessage(e);
  };

  return (
    <Modal>
      <ExitButton onClick={closeApplication}>x</ExitButton>
      <RegisterHeader>Apply</RegisterHeader>
      {showMessage && (
        <SuccessModal>
          <p>Success! You've applied to this job.</p>
        </SuccessModal>
      )}
      <Form onSubmit={apply} enctype="application/x-www-form-urlencoded">
        <Input
          type="textarea"
          required
          placeholder="Why do you want the job?"
          onChange={(event) => setMotivation(event.target.value)}
        ></Input>
        <Input
          type="textarea"
          required
          placeholder="Anything else to add? (i.e. cover letter)"
          onChange={(event) => setCoverLetter(event.target.value)}
        ></Input>
        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  );
};

export default ApplyModal;
