/*@jsx jsx*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jsx } from "@emotion/core";
import {
  Container,
  Title,
  InfoContainer,
  InfoName,
  InfoEmployee,
} from "./layout";

import { CancelButton, DeleteButton } from "./layout";
import { Link, useHistory } from "react-router-dom";
import { deleteEmployee } from "./personalSlice";

function EmployeeDetail({ match }) {
  const employeeId = match.params.id;
  const employee = useSelector((state) =>
    state.personal.employees.find((employee) => employee.id === employeeId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  function handleDelete() {
    dispatch(deleteEmployee(employee.id));
    history.push("/");
  }
  console.log(employee);
  return (
    <Container>
      <Title>Personal detail</Title>
      <InfoContainer>
        <InfoName>Name: </InfoName>
        <InfoEmployee>{employee.name}</InfoEmployee>
      </InfoContainer>
      <InfoContainer>
        <InfoName>Last name: </InfoName>
        <InfoEmployee>{employee.last_name}</InfoEmployee>
      </InfoContainer>
      <InfoContainer>
        <InfoName>Area: </InfoName>
        <InfoEmployee>{employee.area}</InfoEmployee>
      </InfoContainer>
      <InfoContainer>
        <InfoName>Years in the company: </InfoName>
        <InfoEmployee>{employee.years}</InfoEmployee>
      </InfoContainer>
      <Link to={"/"}>
        <CancelButton css={{ marginTop: 10 }}>Cancel</CancelButton>
      </Link>
      <DeleteButton onClick={handleDelete}>Delete employee</DeleteButton>
    </Container>
  );
}

export default EmployeeDetail;
