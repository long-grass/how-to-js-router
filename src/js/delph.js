import { loadRoute } from './actions'

export class Delph {
    
  constructor(config){
    this.routes = config.routes;
    this.routerOutlet = document.createElement('div')
    document.body.appendChild(this.routerOutlet)
    config.store.subscribe(this.render.bind(this));
    config.store.dispatch(loadRoute({path:config.path}))
    this.handleBackButton()
  }
    
  handleBackButton(){    
    window.onpopstate = (event) => {  
      let content = "";
      if (event.state) {
        content = event.state.page;
        this.load(content, true)
      }
    }
  }

  inject(component) {
    const routerOutlet = this.routerOutlet
    while (routerOutlet.firstChild) {
      routerOutlet.removeChild(routerOutlet.firstChild);
    }
    routerOutlet.appendChild(new component);
  }

  render(page, backButtonUsed){
    if (!backButtonUsed){
      history.pushState({ page}, null, `/${page.path}`);
    }
    let route =  this.routes[page.path];
    if (route) {
      this.inject(route)
    } else {
      this.routerOutlet.innerHTML = "no page found"
    }
  }
}