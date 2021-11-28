import styled from "styled-components";

export const HorizontalBarStyled = styled.section`
  width: 95%;
  margin: auto;

  table {
    border-collapse: collapse;
  }

  tr {
    position: relative;
  }

  th {
    border-right: 1px solid black;
    padding-right: 4px;
    width: 80px;
  }

  th p {
    width: 94px;
    word-wrap: break-word;
  }

  .group-bar {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
  }

  td {
    border: 1px solid #ffffff00;
    width: 20%;
    height: 50px;
    border-bottom: 1px solid #202020;
  }
`;
