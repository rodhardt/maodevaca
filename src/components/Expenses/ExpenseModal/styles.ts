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
    justify-content: center;
    align-items: center;
    border: 1px solid #202020;
    border-radius: 10px;
  }

  .expense-card table {
    width: 90%;
    border-collapse: collapse;
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
    margin-top: 10px;
  }
`;
