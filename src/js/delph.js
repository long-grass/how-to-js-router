export class Delph {
    
    constructor(routes,el){
        this.routes = routes
        this.el = el
    }
    
    load(page){
        const data = this.routes[page]
        this.el.innerHTML = data
    }
}