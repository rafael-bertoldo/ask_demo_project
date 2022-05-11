import styled from "styled-components";

export const SpanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .delete-span {
    color: var(--red);
    font-size: 24px;
    margin: 0 16px 16px 0;

    :hover {
      cursor: pointer;
    }

  }
  
  .check-span {
    color: var(--green);
    font-size: 24px;
    margin: 0 16px 16px 0;

    :hover {
      cursor: pointer;
    }
  }
`