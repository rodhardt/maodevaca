import styled from "styled-components";

export const ExpenseModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .opacity {
    z-index: 2;
    background-color: #00000080;
    width: 100%;
    height: 100%;
  }
  .expense-card {
    z-index: 3;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fdfdfd;
    width: 90%;
    min-width: 278px;
    max-width: 520px;
    min-height: 200px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #202020;
    border-radius: 10px;
  }

  .expense-card header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 10px 0;
    background-color: #dddddd;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: #404040;
  }

  .expense-card h2 {
    width: 75%;
    text-align: center;
  }

  .expense-card header button {
    position: absolute;
    right: 10px;
    height: 21px;
    width: 21px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #606060;
    color: #dddddd;
    border: 2px solid #00000000;
    border-radius: 50%;
  }

  .expense-card header button:hover {
    background-color: #cccccc;
    border: 2px solid #606060;
    color: #606060;
    font-weight: bold;
  }

  .expense-card table {
    width: 90%;
    border-collapse: collapse;
    margin: 10px auto;
  }

  tr {
    border-bottom: 1px solid #505050;
    line-height: 1.6;
  }

  tr:last-child {
    border-bottom: 1px solid #50505000;
  }

  th {
    text-align: right;
    width: 30%;
    border-right: 1px solid #505050;
    padding-right: 10px;
    font-size: 14px;
  }

  td {
    text-align: center;
    font-size: 14px;
  }

  .buttons-container {
    margin: 10px auto 15px;
  }

  .buttons-container button {
    width: 80px;
    margin: 0 10px;
    padding: 6px 8px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    transition: 0.3s;
    border: 1px solid #00000000;
  }

  .update-button {
    background-color: #00cc0020;
    color: #006000;
  }

  .update-button:hover {
    background-color: #00900090;
    color: white;
  }

  .delete-button {
    background-color: #ff000020;
    color: #aa0000;
  }

  .delete-button:hover {
    background-color: #ff000090;
    color: white;
  }

  td:first-child {
    width: 100%;
    background-color: red;
  }

  td:last-child {
    width: 18px;
  }

  table input,
  table select {
    width: 100%;
    height: 100%;
  }

  input,
  input::placeholder {
    font-weight: bold;
    opacity: 1;
    font-size: 14px;
    color: #303030;
    text-align: center;
    width: 100%;
  }
`;
