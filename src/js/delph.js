export class Delph {
    
  constructor(config){
    this.routes = config.routes;
    // this.el = el;
    this.load(config.path)
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
    const routerOutlet = this.el
    while (routerOutlet.firstChild) {
      routerOutlet.removeChild(routerOutlet.firstChild);
    }
    routerOutlet.appendChild(new component);
  }

  load(page, backButtonUsed){
    if (!backButtonUsed){
      history.pushState({ page}, null, `/${page}`);
    }
    let route =  this.routes[page];
    if (route) {
      this.inject(route)
    } else {
      this.el.innerHTML = "no page found"
    }
  }
}