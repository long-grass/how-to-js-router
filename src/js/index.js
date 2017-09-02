import { Delph } from './delph'
import { routes } from './routes'

export class Index {

    constructor(){
      const page = window.location.pathname.substr(1) || ''
      let main = document.getElementById('main')
      this.delph = new Delph(routes, main, page)
      this.makeHeader(routes)
    }

    makeHeader(routes){
      let el = document.getElementById('header')
      Object.keys(routes).map(route => {
        let e = document.createElement("li");
        e.innerHTML = route || "index"
        e.addEventListener('click', () => {this.load(route)})
        el.appendChild(e);
      })
    }
 
    load(link){
      console.log(link)
      this.delph.load(link)
    }
    
};
document.addEventListener('DOMContentLoaded', () => {
  new Index()
});
