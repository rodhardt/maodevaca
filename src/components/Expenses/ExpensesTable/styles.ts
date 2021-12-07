import styled from "styled-components";

export const ExpensesTableStyled = styled.section`
  width: 95%;
  margin: auto;

  table {
    width: 100%;
    margin: auto;
  }

  h3 {
    margin: 15px auto 5px;
  }

  .head-value {
    width: 200px;
  }

  tr,
  td {
    position: relative;
  }

  tr {
    height: 38px;
  }

  .full-name {
    display: none;
    position: absolute;
    z-index: 1;
    background-color: var(--mainGray);
    left: 0;
    font-weight: bold;
  }

  tr:hover .full-name {
    display: block;
    cursor: pointer;
  }

  tr:hover {
    cursor: pointer;
    font-weight: bold;
  }

  .delete-icon {
    color: #ee0000;
  }
  .delete-icon:hover {
    color: #aa0000;
  }
`;
