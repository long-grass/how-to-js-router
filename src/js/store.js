function Store ()  {
  this.previousState = {}
  this.state = {route:{path:null},
                kendal:{counter:0}
              }
};

let subscribers = []

Store.prototype.subscribe = function(fn){
  subscribers.push(fn)
}

Store.prototype.unsubscribe = function(fn){
  subscribers.push(fn)
}

Store.prototype.getState = function(){
  return this.state
}

Store.prototype.dispatch = function(action){
  this.previousState =  { ...this.state }
  this.state = {
    route: changeRoute(this.state.route,action),
    kendal: kendalCount(this.state.kendal,action)
  }
  subscribers.forEach(subscriber => subscriber(this.previousState,this.state))
}

function changeRoute(route,action){
  switch (action.type){
      case 'CHANGE_ROUTE':
          let newRoute = action.route
          return newRoute
      default:
          return route || {path:null}

  }
}

function kendalCount(kendal,action){
  switch (action.type){
      case 'INCREASE_KENDAL':
          let newState = {counter: kendal.counter + 1}
          return newState
      default:
          return kendal
      
  }
}

export const store = new Store()