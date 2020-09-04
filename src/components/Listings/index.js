import React, { useState, useEffect } from "react";
import Job from "./Job";
import ApplyModal from "./ApplyModal/";
import {
  PageTitle,
  Nav,
  NavLinkContainer,
  NavLink,
  Form,
  Input
} from "./style";
import { getJobs } from "../utils";

const Listings = (props) => {
  const [jobList, setJobList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const loadJobs = async () => {
      const { jobs } = await getJobs();
      setJobList(jobs);
    };
    loadJobs();
  }, []);

  const filterJobs = (list) => {
    if (filter === "") {
      return list;
    }
    const keys = ["location", "skills_tag", "job_type"];
    return list.filter((job) =>
      keys.some((key) => job[key] && job[key].includes(filter))
    );
  };

  const filteredList = filterJobs(jobList);

  const searchJobs = (e) => {
    e.preventDefault();
    const param = e.target.value;
    setFilter(param);
  };

  const logOut = () => {
    props.history.push("/");
    localStorage.clear();
  };

  const openApplication = () => {
    const token = localStorage.getItem("token");
    !token || token === null ? setShowModal(false) : setShowModal(true);
  };

  const closeApplication = () => {
    setShowModal(!showModal);
  };

  return (
    <main>
      {showModal && <ApplyModal closeApplication={closeApplication} />}
      <Nav>
        <a href="https://www.divercity.io/">
          <img
            src="https://www.divercity.io/static/media/complete-logo.f047ae08.svg"
            alt="divercity logo"
          ></img>
        </a>
        <NavLinkContainer>
          <li>
            <NavLink onClick={logOut}>Log Out</NavLink>
          </li>
        </NavLinkContainer>
      </Nav>
      <PageTitle>Job Listings</PageTitle>
      <Form>
        <Input
          type="text"
          required
          placeholder="Filter by location, job type, or skill..."
          onChange={searchJobs}
        ></Input>
      </Form>
      {filteredList.length ? (
        filteredList.map((job) => (
          <Job
            openApplication={openApplication}
            key={job.id}
            title={job.title}
            company={job.company}
            description={job.description}
            location={job.location}
          />
        ))
      ) : (
        <p>Loading jobs...</p>
      )}
    </main>
  );
};

export default Listings;
