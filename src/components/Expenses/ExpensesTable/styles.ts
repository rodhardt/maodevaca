import styled from "styled-components";

export const ExpensesTableStyled = styled.section`
  width: 95%;
  margin: auto;
  padding-bottom: 40px;

  table {
    width: 100%;
    max-width: 720px;
    margin: auto;
    border-collapse: collapse;
    border-radius: 7px;
  }

  h3 {
    margin: 10px auto 10px;
    width: 100%;
    position: absolute;
    background-color: #ffffff00;
    color: #404040;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .head-value {
    width: 84px;
  }
  .head-date {
    width: 72px;
  }

  .head-icons {
    width: 34px;
  }

  th {
    background-color: #9090f0;
    color: #ffffff;
  }

  th:first-child,
  tr:first-child {
    border-top-left-radius: 7px;
  }

  th:last-child,
  tr:first-child {
    border-top-right-radius: 7px;
  }

  tr,
  td {
    position: relative;
  }

  td {
    text-align: center;
  }

  tr {
    height: 38px;
    color: #404040;
  }

  tr:nth-child(2n + 1):not(.title-row) {
    background-color: #9090f030;
  }

  .title-row {
    background-color: #ffffff00;
    color: #404040;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }

  tr:hover:not(.title-row):not(.heads) {
    cursor: pointer;
    font-weight: bold;
  }

  .icon-container {
    display: flex;
    height: 38px;
    margin-left: 5px;
    justify-content: center;
    align-items: center;
  }

  .delete-icon {
    color: #ee0000;
  }
  .delete-icon:hover {
    color: #aa0000;
  }
`;
