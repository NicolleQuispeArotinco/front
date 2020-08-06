import React, { useState } from "react";

import {
  Container,
  Title,
  Table,
  Row,
  TitleTable,
  ContentTable,
  ViewButton,
  NewEmployeeButton,
} from "./layout";
import { useSelector } from "react-redux";

import NewEmployee from "./NewEmployeeForm";
import { Link } from "react-router-dom";

function Personal() {
  const personal = useSelector((state) => state.personal.employees);
  const [showForm, setShowForm] = useState(false);

  console.log(personal);
  return (
    <Container>
      <Title>Personal</Title>
      <Table>
        <thead>
          <Row>
            <TitleTable>Name</TitleTable>
            <TitleTable>Last name</TitleTable>
            <TitleTable>Area</TitleTable>
            <th></th>
          </Row>
        </thead>
        <tbody>
          {personal.map((employee) => (
            <Row key={employee.id}>
              <ContentTable>{employee.name}</ContentTable>
              <ContentTable>{employee.last_name}</ContentTable>
              <ContentTable>{employee.area}</ContentTable>
              <td>
                <Link to={`/employee/${employee.id}`}>
                  <ViewButton>View</ViewButton>
                </Link>
              </td>
            </Row>
          ))}
        </tbody>
      </Table>
      {!showForm ? (
        <NewEmployeeButton onClick={() => setShowForm(true)}>
          Add new employee
        </NewEmployeeButton>
      ) : (
        <NewEmployee onClose={() => setShowForm(false)} />
      )}
    </Container>
  );
}

export default Personal;
