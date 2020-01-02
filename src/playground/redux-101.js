import { createStore } from 'redux';
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = action.incrementBy ? action.incrementBy : 1;
      return { count: state.count + incrementBy };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
});

// Increment Count Action
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
// Reset Action
// store.dispatch({
//   type: 'RESET'
// });
// Decrement Action
store.dispatch({
  type: 'DECREMENT'
});

export default store;
