import styled from "styled-components";

export const MainContent = styled.div`
  padding: 1.25rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FlexUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexLi = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 33.333333%;
  }
`;
