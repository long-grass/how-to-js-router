import { store  } from "../store";
import { increaseKendal } from '../actions'

export class KendalComponent extends HTMLElement {

  constructor(){
    super()
    this.store = store
    this.store.subscribe(this.render.bind(this))        
  }
    
  handleClick(){
    this.store.dispatch(increaseKendal(1))
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click',this.handleClick);        
  }

  render(previousState,state) {
    if (previousState.kendal.counter != state.kendal.counter){
      this.innerHTML = (
        `<div style="height:100px;background:orange">
          <div>Page Counter = ${this.store.state.kendal.counter}</div>
        </div>`
      )
    }
  }
}

customElements.define('kendal-component', KendalComponent);