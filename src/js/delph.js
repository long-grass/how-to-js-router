export class Delph {
    
    constructor(routes,el){
        this.routes = routes
        this.el = el
    }
    
    load(page){
        this.el.innerHTML = page
    }
}