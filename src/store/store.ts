import { action, makeObservable, observable } from "mobx";
import { queryResults } from "../interfaces";
const words = require("an-array-of-english-words");

export class QueriesStoreImpl {
  results: queryResults[] = [];
  currentLetter: string = "";

  constructor() {
    makeObservable(this, {
      results: observable,
      currentLetter: observable,
      dispatchQueryResult: action,
    });
  }

  dispatchQueryResult(letter: string) {
    // run queries for letter only if not queried before
    if (!this.results.map((resultItem) => resultItem.letter).includes(letter)) {
      this.results.push(this.runAllQueries(letter));
    }

    this.currentLetter = letter;
  }

  runAllQueries(letter: string) {
    const queryCountsObj = {
      letter,
      startsWith: 0,
      endsWith: 0,
      appearIn: 0,
      notAppear: 0,
      repeatConjunction: 0,
    };
    for (const word of words) {
      const position = word.indexOf(letter);
      if (position < 0) {
        // does not appear
        queryCountsObj.notAppear++;
      } else {
        // run rest of queries

        // starts with
        if (position === 0) queryCountsObj.startsWith++;

        // ends with
        if (word.lastIndexOf(letter) === word.length - 1)
          queryCountsObj.endsWith++;

        // appears in
        queryCountsObj.appearIn += word.split(letter).length - 1;

        // repeated in conjunction
        const exp = new RegExp(`${letter}{2,}`);
        if (word.split(exp).length >= 2) queryCountsObj.repeatConjunction++;
      }
    }
    return queryCountsObj;
  }
}

export const queriesStore = new QueriesStoreImpl();
