export class Delph {

    constructor(routes,el){
        this.routes = routes
        this.el = el
    }

    load(page){ 
        let route =  this.routes[page]  
        route.load().then(r => route.show(this.el))
    }
}