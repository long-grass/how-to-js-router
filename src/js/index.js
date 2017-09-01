import { Delph } from './delph'
import { routes } from './routes'

export class Index {

    constructor(){      
      var main = document.getElementById('main')
      this.delph = new Delph(routes,main)
      this.makeHeader(routes)
    }

    makeHeader(routes){
      let el = document.getElementById('header')
      Object.keys(routes).map(route => {
        var e = document.createElement("li");
        e.innerHTML = route
        e.addEventListener('click', () => {this.load(route)})
        el.appendChild(e);
      })
    }
 
    load(link){
      this.delph.load(link)
    }
    
};
document.addEventListener('DOMContentLoaded', () => {
  new Index()
});
