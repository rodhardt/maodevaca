import styled from "styled-components";

export const CurrentBalanceStyled = styled.section`
  width: 95%;
  margin: auto;

  table {
    margin: auto;
    border-collapse: collapse;
  }

  tr {
    position: relative;
  }

  .day {
    text-align: center;
  }

  input,
  input::placeholder {
    font-weight: bold;
    opacity: 1;
    color: #009000;
    text-align: center;
    width: 100%;
  }

  td:first-child {
    text-align: center;
  }

  tr svg {
    position: absolute;
    left: 20px;
    color: #cc2020;
  }
`;
