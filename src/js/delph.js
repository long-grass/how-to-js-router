export class Delph {
    
    constructor(routes,el,page){
        this.routes = routes;
        this.el = el;
        this.load(page)
    }

    load(page){
        history.pushState({ page}, null, `/${page}`);
        console.log(page)
        let route =  this.routes[page];
        if (route) {
            route.load().then(r => route.show(this.el));
        } else {
            this.el.innerHTML = "no page found"
        }
    }
}