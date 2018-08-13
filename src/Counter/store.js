const ADD = 'ADD';
const SUB = 'SUB';

export const add = () => ({
  type: ADD
});

export const sub = () => ({
  type: SUB
});


const INITIAL_STATE = {
  counterValue: 99,
  open: false,
  list: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counterValue: state.counterValue + 1
      };
    case SUB:
      return {
        ...state,
        counterValue: state.counterValue - 1
      };
    default:
      return state;
  }
}

export default reducer;
