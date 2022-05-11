import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-blue);
  height: 80vh;
  color: var(--vanilla);
  padding: 0 35px;

  h3 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  img {
    margin-bottom: 32px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  label {
    font-size: 1.5rem;
    margin-right: 8px;
  }

  input {
    border: none;
    padding: 5px;
    width: 250px;
  }
`

export const Button = styled.button`
  padding: 12px;
  width: 125px;
  margin: 0 auto;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  border: 1px solid var(--medium-blue);
  border-radius: 8px;
  color: var(--medium-blue);
  transition: .6s;
  margin-bottom: 2rem;

  :hover {
    background-color: var(--medium-blue);
    color: var(--vanilla);
  }
`

export const Message = styled.p`
  font-size: 1.2rem;

  span {
    font-weight: bold;
    color: var(--light-blue);

    :hover {
      cursor: pointer;
      color: var(--vanilla);
    }
  }
`