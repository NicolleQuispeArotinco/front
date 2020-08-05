import styled from "@emotion/styled";

export const Container = styled.div`
  width: 70%;
  margin: auto;
`;

export const Title = styled.h1`
  color: #222222;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  margin: 0;
  margin-bottom: 42px;
`;

export const Table = styled.table`
  width: 60%;
  border-collapse: collapse;
`;

export const Row = styled.tr`
  border-bottom: 1px solid #3c366b;
  padding: 0px 10px;
`;

export const TitleTable = styled.th`
  color: #222222;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  padding: 10px;
`;

export const ContentTable = styled.td`
  font-style: normal;
  font-size: 12px;
  padding: 10px;
`;

export const ViewButton = styled.button`
  border-radius: 10px;
  padding: 5px 10px;
  border: transparent;
  background: #1dacf2;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  color: #fff;
  outline: 0;
  cursor: pointer;
`;

export const NewEmployeeButton = styled.button`
  outline: 0;
  cursor: pointer;
  border: transparent;
  padding: 8px 10px;
  border-radius: 5px;
  margin-top: 20px;
`;
