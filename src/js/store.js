export const store =  {
    counter: 0
};

document.addEventListener('action', (e) => {
    console.log(e)
    console.log(store)
    let result = counter(store, e.detail);
    console.log(result)
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