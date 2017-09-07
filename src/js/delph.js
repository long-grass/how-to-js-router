export class Delph {
    
  constructor(routes,el,page){
    this.routes = routes;
    this.el = el;
    this.load(page)
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

  load(page, backButtonUsed){
    if (!backButtonUsed){
      history.pushState({ page}, null, `/${page}`);
    }
    let route =  this.routes[page];
    if (route) {
      // route.load().then(r => route.show(this.el));
    } else {
      this.el.innerHTML = "no page found"
    }
  }
}