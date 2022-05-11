import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  text-align: center;

  .title-ask-container {
    padding: 20px;
    background-color: #FFF;
    box-shadow: var(--box-shadow);
    width: 40%;
  }

  > .question-list {
    width: 100%;
  }

   .question-container {
    background-color: var(--white);
    margin: 15px 0;
    padding: 10px 15px;
  }

  > .question-date {
    font-style: italic;
  }
`