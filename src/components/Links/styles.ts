import styled from "styled-components";

export const LinksStyled = styled.nav`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
  }

  li {
    margin: 20px 10px;
    padding: 3px 8px;
    font-weight: bold;
  }

  .current-page {
    color: #303030;
    border-bottom: 3px solid #303030;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    transition: 0.2s;
  }

  .new-page {
    color: #a0a0a0;
    border-bottom: 3px solid #30303000;
    cursor: pointer;
    transition: 0.2s;
  }

  ul:hover .new-page {
    color: #303030;
    border-bottom: 3px solid #303030;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    transition: 0.2s;
  }

  ul:hover .current-page {
    color: #a0a0a0;
    border-bottom: 3px solid #30303000;
    transition: 0.2s;
  }

  li svg {
    color: #909090;
    margin: 0 5px;
  }
`;
