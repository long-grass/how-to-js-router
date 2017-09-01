import { Delph } from './delph'

export class Index {

    constructor(){      
      let main = document.getElementById('main')
      let el = document.getElementById('header')
      el.innerHTML = 'click'
      el.addEventListener('click', () => {this.load('glossop')})
      this.delph = new Delph(main)
    }
 
    load(link){
      this.delph.load(link)
    }
    
};
document.addEventListener('DOMContentLoaded', () => {
  new Index()
});
