export class Delph {
    
    constructor(routes,el,page){
        this.routes = routes;
        this.el = el;
        this.load(page)
    }

    load(page){
        history.pushState({ page}, null, `/${page}`);
        let route =  this.routes[page];
        route.load().then(r => route.show(this.el));
    }
}