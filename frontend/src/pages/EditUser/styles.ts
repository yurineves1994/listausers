import styled from "styled-components";

export const ButtonSubmit = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
`
export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
`
export const Form = styled.form`
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
`
export const FormControl = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="text"],
  input[type="checkbox"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
  }
`
export const FormControlCheck = styled.div`
  label {
    display: grid;
    align-items: center;
    grid-template-columns: 25px 1fr;
    margin-bottom: 5px;
    font-weight: bold;
  }
  input[type="checkbox"] {
    margin-right: 10px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
  }
`

export const AdressContainer = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  } 
`
export const ListAdressWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th, td {
    text-align: center;
    padding: 12px 15px;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }

  td {
    background-color: #f7f7f7;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;