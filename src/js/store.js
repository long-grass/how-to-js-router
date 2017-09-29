function Store ()  {
  this.state = {}
};

let subscribers = []

Store.prototype.subscribe = function(fn){
  subscribers.push(fn)
}

Store.prototype.dispatch = function(action){
  this.state.route = changeRoute(this.state.route,action)
  subscribers.forEach(subscriber => subscriber(this.state))
}

function changeRoute(route,action){
  switch (action.type){
      case 'CHANGE_ROUTE':
          let newRoute = action.route
          return newRoute
      default:
          return route || ''

  }
}

function kendalCount(kendal,action){
  console.log(kendal)
  switch (action.type){
      case 'INCREASE_KENDAL':
          // debugger
          let newState = {counter: kendal.counter + 1}
          return newState
      default:
          return kendal
      
  }
}

export const store = new Store()