import styled from "styled-components";

export const CurrentBalanceStyled = styled.section`
  width: 95%;
  margin: auto;
  padding-bottom: 35px;

  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    padding: 5px;
    color: #404040;
    border-bottom: 1px solid #909090;
  }

  table {
    margin: auto;
    border-collapse: collapse;
  }

  tr {
    position: relative;
    height: 30px;
  }

  .day {
    text-align: center;
  }

  input {
    height: 30px;
  }

  input,
  input::placeholder {
    font-weight: bold;
    opacity: 1;
    color: #009000;
    text-align: center;
    width: 100%;
  }

  .currency {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .wage-row .currency {
    font-weight: bold;
    opacity: 1;
    color: #009000;
  }

  td:first-child {
    text-align: center;
  }

  tr .currency {
    position: absolute;
    left: 25px;
  }

  .icon-container {
    display: flex;
    align-items: center;
    height: 30px;
  }

  tr .minus {
    color: #cc2020;
  }
  tr .plus {
    color: green;
  }

  .expense-row {
    background-color: #ff000020;
    color: #aa0000;
    font-weight: bold;
  }

  .balance-row {
    font-weight: bolder;
  }

  .profit {
    background-color: #00ff0030;
    color: #005000;
  }

  .wage-row button {
    height: 26px;
    margin: 2px;
    padding: 0 5px;
    font-weight: bold;
    font-size: 14px;
    background-color: #dddddd;
    color: #353535;
    border: 1px solid #00000000;
    border-radius: 8px;
  }

  .wage-row button:hover {
    text-decoration: underline;
    border: 1px solid #00000020;
  }
`;
