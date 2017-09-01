import { Delph } from './delph'
import { routes } from './routes'
export class Index {
    constructor(){      
      let header = document.getElementById('header')
      let main = document.getElementById('main')
      header.innerHTML = "click"
      header.addEventListener('click', () => {this.load('glossop')})
      this.delph = new Delph(routes,main)
    }
    load(link){
      this.delph.load(link)
    }
};
document.addEventListener('DOMContentLoaded', () => {
  new Index()
});