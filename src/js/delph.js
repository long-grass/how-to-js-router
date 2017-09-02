export class Delph {
    
    constructor(routes,el){
        this.routes = routes
        this.el = el
    }

    load(page){ 
        
        history.pushState({ page}, null, `/${page}`);
        let route =  this.routes[page];
        route.load().then(r => route.show(this.el));
    }
}