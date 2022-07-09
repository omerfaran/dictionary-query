import React from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { queriesStore } from "../store/store";
import { keyframes } from "@emotion/react";

interface KeyboardProps {
  clicked: (letter: string) => void;
}

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
     transform: translateX(-50%) translateY(-100%)
  }

  40%, 43% {
    transform: translateX(-50%) translateY(calc(-100% - 30px))
  }

  70% {
    transform: translateX(-50%) translateY(calc(-100% - 15px))
  }

  90% {
    transform: translateX(-50%) translateY(calc(-100% - 4px))
  }
`;

const Container = styled.div<{ scaler: number }>`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;

  &::before,
  &::after {
    animation: ${bounce} 2s ease;
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(-100%)
      scale(${({ scaler }) => scaler});

    transition: all 250ms ease;
  }
  &::before {
    content: "Click to query!";
    color: #fff;
    background-color: ${({ theme }) => theme.colors.tooltip};
    padding: 0.7rem;
    border-radius: 0.3rem;
    transform-origin: bottom center;
  }
  &::after {
    content: "";
    // top: 20px;
    top: 10px;
    border: 10px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.tooltip};
    transform-origin: top center;
  }
`;

const Row = styled.div`
  width: 100%;
  margin: 8px 0 0 0;

  @media (max-width: 700px) {
    display: inline;
  }
`;

const Button = styled.button`
  color: black;
  width: 55px;
  height: 55px;
  border: none;
  background: ${({ theme }) => theme.colors.keyboard};
  box-shadow: 5px 5px 10px #474343, -5px -5px 10px #fff;
  font-size: 20px;
  margin: 5px;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20%;
  &:active {
    box-shadow: 1px 1px 2px #fff8f8, -1px -1px 2px #474343;
  }

  @media (max-width: 610px) {
    width: 45px;
    height: 45px;
    margin: 3px;
  }
`;

const Keyboard: React.FC<KeyboardProps> = observer(({ clicked }) => {
  return (
    <Container scaler={queriesStore.currentLetter ? 0 : 1}>
      {keyboard.map((row, i) => (
        <Row key={i}>
          {row.map((letter, i) => (
            <Button onClick={() => clicked(letter)} key={i}>
              {letter}
            </Button>
          ))}
        </Row>
      ))}
    </Container>
  );
});

export default Keyboard;
