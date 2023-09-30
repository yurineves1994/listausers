import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ccc;

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f7f7f7;
  } 
`;

export const Button = styled.a` 
  text-decoration: none;
  color: #f7f7f7;
  background-color: #007bff;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #f7f7f7;
  cursor: pointer;
  width: 100px;
  text-align: center;
  margin: 25px;

  &:hover {
    text-decoration: underline;
  }
`