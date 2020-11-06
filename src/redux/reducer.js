const TEST = 'TEST';

export const test = () => ({
  type: TEST,
});

const INITIAL_STATE = {
  testValue: 23,
};

export const reducer = (state = INITIAL_STATE, action) => {
  console.log('in REDUCER');
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testValue: state.testValue + 5,
      };
    default:
      return state;
  }
};
