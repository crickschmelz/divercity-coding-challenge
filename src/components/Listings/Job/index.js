import React from "react";
import PropTypes from "prop-types";
import { Header, ApplyButton, Div } from "./style";

const Job = (props) => {
  Job.propTypes = {
    openApplication: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    company: PropTypes.string
  };

  const { openApplication, title, description, location, company } = props;

  function createMarkup() {
    return { __html: description };
  }

  return (
    <Div>
      <Header>
        {company} - {title}
      </Header>
      <h4>{location}</h4>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <ApplyButton onClick={openApplication}>Apply</ApplyButton>
    </Div>
  );
};

export default Job;
