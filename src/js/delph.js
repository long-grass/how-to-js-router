import { loadRoute } from './actions'

export class Delph {
    
  constructor(config){
    this.routes = config.routes;
    this.routerOutlet = document.createElement('div')
    document.body.appendChild(this.routerOutlet)
    config.store.subscribe(this.render.bind(this));
    config.store.dispatch(loadRoute({path:config.path}))
  }
  
  render(page){
    console.log(page.kendal)
    var self = this
    while (this.routerOutlet.firstChild) {
      this.routerOutlet.removeChild(this.routerOutlet.firstChild);
    }
    setTimeout(function(){
    self.routerOutlet.appendChild(new self.routes[page.route.path])
    console.log("yes")},500)
  }
}

