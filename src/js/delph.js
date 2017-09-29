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
    while (this.routerOutlet.firstChild) {
      this.routerOutlet.removeChild(this.routerOutlet.firstChild);
    }
    this.routerOutlet.appendChild(new this.routes[page.path])
  }
}

