import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 140px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.3rem, 3vw + 0.8rem, 5rem);
  color: white;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <header>
        <Title>English Dictionary Query!</Title>
      </header>
    </Wrapper>
  );
};

export default Header;
