import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
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

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  form {
    display: inline-block;
    margin: 0;
  }

  input[type="hidden"],
  input[type="submit"] {
    border: none;
    background: none;
    cursor: pointer;
    font-weight: bold;
    color: #007bff;
  }
`;