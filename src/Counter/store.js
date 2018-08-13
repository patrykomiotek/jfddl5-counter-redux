const ADD = 'ADD';
const SUB = 'SUB';
const RESET = 'RESET';

export const add = (number) => ({
  type: ADD,
  number
});

export const sub = (number) => ({
  type: SUB,
  number
});

export const reset = () => ({
  type: RESET
});

const INITIAL_STATE = {
  counterValue: 99,
  open: false,
  list: [],
  jfddl5: {
    openMinded: false,
    list: []
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counterValue: state.counterValue + action.number
      };
    case SUB:
      return {
        ...state,
        counterValue: state.counterValue - action.number
      };
    case RESET:
      return {
        ...state,
        counterValue: 0
      }
    default:
      return state;
  }
}

export default reducer;
