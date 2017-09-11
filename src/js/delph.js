export class Delph {
    
  constructor(routes,el,page){
    this.routes = routes;
    this.el = el;
    this.load(page)
    this.handleBackButton()
  }
    
  handleBackButton(){    
    window.onpopstate = () => {  
      let content = "";
      if (event.state) {
        content = event.state.page;
        this.load(content)
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

  load(page){
    history.pushState({ page}, null, `/${page}`);
    let route =  this.routes[page];
    if (route) {
      this.inject(route)
    } else {
      this.el.innerHTML = "no page found"
    }
  }
}