function Store ()  {
  this.state = {route: null}
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

export const store = new Store()