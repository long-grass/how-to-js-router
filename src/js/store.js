function Store ()  {
  this.state = {route: null}
};

let routeChanger

Store.prototype.subscribe = function(fn){
  console.log(fn)
  routeChanger = fn
}

Store.prototype.dispatch = function(action){
  console.log(action)
  console.log(this.state)
  this.state.route = changeRoute(this.state.route,action)
  routeChanger(this.state.route)
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