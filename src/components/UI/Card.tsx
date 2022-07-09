import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { queryResults } from "../../interfaces";

interface CardProps {
  result: queryResults;
}

const slideIn = keyframes`
  0% {
    opacity: 0.7;
    transform: translateX(-50px);
  }
  70% {
    transform: translateX(15px);
  }
  100% {
    opacity: 1;
  }
`;

const ContainerBox = styled.div`
  margin: 2rem;
  text-align: left;
  opacity: 0;
  animation: ${slideIn} 0.7s
    ${({ theme }) => theme.animations.cardAnimationDelay} forwards ease;
  background-color: white;
  box-shadow: 5px 5px 5px 4px #aaaaaa;
  transition: all 0.1s ease-in;
  &:hover {
    box-shadow: 5px 7px 5px 4px #aaaaaa;
  }
`;

const CardHeader = styled.h2`
  padding: 1rem;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
`;

const Letter = styled.span`
  font-style: italic;
  font-weight: 400;
`;

const Content = styled.div`
  padding: 1.3rem;
  font-size: 1.2rem;
`;

const Card: React.FC<CardProps> = ({ result }) => {
  return (
    <ContainerBox>
      <CardHeader>
        Results for <Letter>{result.letter}</Letter>
      </CardHeader>
      <Content>
        <p>
          There are {result.startsWith} words that start with the letter{" "}
          <i>{result.letter}</i>.
        </p>
        <p>
          The letter <i>{result.letter}</i> appears {result.appearIn} times in
          the dictionary.
        </p>
        <p>
          There are {result.endsWith} words that end with the letter{" "}
          <i>{result.letter}</i>.
        </p>
        <p>
          There are {result.repeatConjunction} words where the letter{" "}
          <i>{result.letter}</i> appears in conjunction.
        </p>
        <p>
          There are {result.notAppear} words that don't have the letter{" "}
          <i>{result.letter}</i> appear in them.
        </p>
      </Content>
    </ContainerBox>
  );
};

export default Card;
