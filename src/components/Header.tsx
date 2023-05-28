import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: #475569;
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #cbd5e1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">Music Library</StyledLink>
    </StyledHeader>
  );
};

export default Header;
