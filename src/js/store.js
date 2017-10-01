function Store ()  {
  this.state = {}
};

let subscribers = []

Store.prototype.subscribe = function(fn){
  subscribers.push(fn)
}

Store.prototype.getState = function(){
  return this.state
}

Store.prototype.dispatch = function(action){
  this.state = {
    route: changeRoute(this.state.route,action),
    kendal: kendalCount(this.state.kendal,action)
  }
  console.log(this.state.kendal)
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
  switch (action.type){
      case 'INCREASE_KENDAL':
          let newState = {counter: kendal.counter + 1}
          return newState
      default:
          return kendal || {counter: 0}
      
  }
}

export const store = new Store()