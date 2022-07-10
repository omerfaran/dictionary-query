import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      keyboard: string;
      tooltip: string;
    };
    dimensions: {
      headerHeight: string;
    };
    animations: {
      cardAnimationDelay: string;
      scrollDur: string;
    };
  }
}
