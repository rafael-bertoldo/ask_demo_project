import styled from "styled-components";

export const MainContainer = styled.section`
  background-color: var(--dark-blue);
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 3rem;
`;

export const LogoFigure = styled.figure`
  margin-bottom: 2rem;
  margin-top: 5rem;
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--vanilla);

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  span {
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.6s;
    margin-bottom: 1.5rem;

    :hover {
      color: var(--light-blue);
    }
  }
`;

export const ProfileInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 30%;
    margin-bottom: 1rem;
  }
`;

export const EditButton = styled.span`
  border: 1px solid var(--light-blue);
  padding: 16px;
  margin-top: 8px;
  border-radius: 8px;

  :hover {
    color: var(--light-blue);
    background-color: var(--white);
  }
`;
