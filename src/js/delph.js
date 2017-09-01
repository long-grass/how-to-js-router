export class Delph {

    constructor(el){
        this.el = el
    }

    load(page){     
        this.el.innerHTML = page
    }
}