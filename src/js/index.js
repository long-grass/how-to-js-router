export class Index {

    constructor(){
      let div = document.getElementById('header')
      div.innerHTML = "click"
    }


};
document.addEventListener('DOMContentLoaded', () => {
  new Index()
});
