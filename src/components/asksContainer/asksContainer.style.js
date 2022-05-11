import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: auto;
  padding-bottom: 20px;
  margin-top: 16px;

  > ul {
    width: 100%;
  }

  > ul > li {
    background-color: var(--white);
    margin: 15px 0;
    padding: 10px 15px;
  }

  > ul > li > span {
    font-style: italic;
  }

  p {
    font-size: 1.5rem;
    margin: 16px 0;
    box-shadow: var(--box-shadow);
    background-color: var(--white);
    padding: 16px;
  }

  .update-span {
    color: var(--orange);
    font-size: 24px;
    margin: 0 16px 16px 0;

    :hover {
      cursor: pointer;
    }
  }
`;
