import styled from "styled-components";

export const AskButton = styled.span`
  background-color: var(--medium-blue);
  padding: 8px;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
  border: 1px solid var(--medium-blue);
  transition: 0.6s;

  :hover {
    background-color: var(--white);
    color: var(--medium-blue);
    cursor: pointer;
  }
`;

export const CreateAskContainer = styled.form`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: var(--box-shadow);
  height: 300px;
  font-size: 1.5rem;
`;

export const SelectContainer = styled.div`
  margin: 16px 0;
`;

export const AskBody = styled.textarea`
  width: 400px;
  height: 200px;
  padding: 16px;
  font-size: 1rem;
`;

export const AskFormButton = styled.button`
  background-color: var(--medium-blue);
  padding: 8px;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
  border: 1px solid var(--medium-blue);
  transition: 0.6s;
  margin: 16px 0;

  :hover {
    background-color: var(--white);
    color: var(--medium-blue);
    cursor: pointer;
  }
`;
