"use strict";

/* 

Thanks to Codevolution
https://www.youtube.com/watch?v=apcda524MJA

*/

const redux = require("redux");

// ACTIONS
const TICKET_BOUGHT = "TICKET_BOUGHT";

function ticketBought() {
  return {
    type: TICKET_BOUGHT,
    hmmm: "Some other info, buy why would you?"
  };
}

// INITIAL STATE
const initialState = {
  numOfPassengers: 10
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_BOUGHT:
      return {
        ...state,
        numOfPassengers: state.numOfPassengers + 1
      };

    default:
      return state;
  }
};

// STORE
const store = redux.createStore(reducer);
console.log("Initial state...\n", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state...\n", store.getState())
);
store.dispatch(ticketBought());
store.dispatch(ticketBought());
unsubscribe();
