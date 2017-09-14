export const store =  {
  counter: 0
};

document.addEventListener('action', (e) => {
  let result = counter(store, e.detail);
  document.dispatchEvent(new CustomEvent('stateChange'));
})

function counter(state, action) {
  console.log(state,action)
	switch (action) {
    case 'increaseCount':
      const newState = Object.assign(state, {
				counter: state.counter + 1
			});
			return newState
		default:
			return state;
  }
}