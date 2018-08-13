const FETCH = 'FETCH';

const fetch = () => ({
  type: FETCH,
  data: [{id: 12, name: 'test'}, {id: 321, name: 'hey!'}]
});

const INITIAL_STATE = {
  tasks: [{
    id: 123,
    name: 'sdfsdf'
  }, {
    id: 456,
    name: 'sdfsdfsdf'
  }]
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return { tasks: action.data }
    default:
      return state;
  }
}

export default reducer;
