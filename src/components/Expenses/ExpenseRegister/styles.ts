import styled from "styled-components";

export const ExpensesRegisterStyled = styled.section`
  width: 95%;
  margin: auto auto 40px;
  padding-bottom: 20px;
  border-bottom: 2px dashed #dddddd;
  color: #404040;

  h2 {
    margin-bottom: 15px;
    text-align: center;
    background-color: #dddddd;
    border-radius: 7px;
    padding: 5px;
    color: #404040;
  }

  .fail {
    border-color: red;
  }

  form {
    width: 100%;
    margin: auto;
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  form * {
    margin-bottom: 5px;
  }

  .input-container {
    width: 100%;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .frequency {
    height: auto;
  }

  .input-container input,
  .input-container select {
    flex-grow: 1;
    height: 100%;
  }

  .frequency input {
    height: auto;
  }

  .group-switch {
    background-color: #00900090;
    color: white;
    padding: 6px 8px;
    border-radius: 5px;
    margin: 0 2px 5px;
    font-size: 14px;
    font-weight: bold;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .group-switch:hover {
    cursor: pointer;
    background-color: #00cc0020;
    color: #006000;
  }

  .group-switch svg {
    margin: 0;
  }

  .group input {
    width: 30%;
  }

  label {
    font-weight: bold;
  }

  .frequency label:not(:first-child) {
    font-weight: 400;
    color: #202020;
  }

  label:first-child {
    width: 84px;
  }

  .frequency label:first-child {
    width: 100%;
    margin: 5px auto 8px;
  }

  button {
    background-color: #e663a3;
    color: white;
    padding: 5px 8px;
    border: 1px solid var(--darkerGray);
    border-radius: 5px;
    border-color: #00000000;
    transition: 0.3s;
    margin-top: 5px;
  }

  button:hover {
    color: #c64383;
    font-weight: bold;
    background-color: #e663a360;
  }
`;
