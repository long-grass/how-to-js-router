import { loadRoute } from './actions'

export class Delph {
    
  constructor(config){
    this.routes = config.routes;
    this.routerOutlet = document.createElement('div')
    document.body.appendChild(this.routerOutlet)
    config.store.subscribe(this.render.bind(this));
    config.store.dispatch(loadRoute({path:config.path}))
    this.handleBackButton(config.store)
  }

  handleBackButton = (store) => {
 
    window.onpopstate = (event) => {
      let content = "";
      if (event.state) {
        content = event.state.page;
        store.dispatch(loadRoute({path:content,back:true}))
      }
    }
  }
  
  render(previousState,state){
    if (previousState.route.path != state.route.path ){
      let page = state.route.path
      let back = state.route.back
      let route = this.routes.find((route) => route.path === page)
      while (this.routerOutlet.firstChild) {
        this.routerOutlet.removeChild(this.routerOutlet.firstChild);
      }
      if (!back){
        history.pushState({ page}, null, `/${page}`);
      }
      this.routerOutlet.appendChild(new route.component)
    }
  }
}
