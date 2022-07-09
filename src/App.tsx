import React, { useEffect } from "react";
import "./styles.css";

import Scroll from "react-scroll";
import Card from "./components/UI/Card";
import styled from "@emotion/styled";
import Header from "./components/UI/Header";
import Keyboard from "./components/Keyboard";

import { theme } from "./components/UI/theme.styled";
import { queriesStore } from "./store/store";
import { observer } from "mobx-react";
import { autorun } from "mobx";
import { ThemeProvider } from "@emotion/react";

const CardsWrapper = styled.div`
  margin: 2rem auto;
  max-width: 800px;
  margin-bottom: 355px;
`;

const Footer = styled.footer`
  margin-top: auto;
  position: fixed;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  bottom: 0;
  border-top: 1px solid #e1e1e1;
`;

const App: React.FC = observer(() => {
  const Element = Scroll.Element;
  const scroller = Scroll.scroller;

  useEffect(() =>
    autorun(() => {
      // scrolling effect
      if (!scroller.get(queriesStore.currentLetter)) return;
      scroller.scrollTo(queriesStore.currentLetter, {
        duration: theme.animations.scrollDur,
        smooth: true,
        offset: -10,
      });
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <CardsWrapper>
          {queriesStore.results.map((result) => (
            <Element key={result.letter} name={result.letter}>
              <Card result={result} />
            </Element>
          ))}
        </CardsWrapper>
      </main>
      <Footer>
        <Keyboard
          clicked={(letter) => queriesStore.dispatchQueryResult(letter)}
        />
      </Footer>
    </ThemeProvider>
  );
});

export default App;
