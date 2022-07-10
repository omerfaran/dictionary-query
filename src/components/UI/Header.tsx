import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.header`
  height: ${({ theme }) => theme.dimensions.headerHeight};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    height: calc(${({ theme }) => theme.dimensions.headerHeight} * 0.7);
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.3rem, 3vw + 0.8rem, 5rem);
  color: white;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>English Dictionary Query!</Title>
    </Wrapper>
  );
};

export default Header;
