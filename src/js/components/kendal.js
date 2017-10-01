import { store  } from "../store";
import { increaseKendal } from '../actions'

export class KendalComponent extends HTMLElement {

  constructor(){
    super()
    this.store = store
    this.subscriber = this.shouldUpdate.bind(this)
    this.store.subscribe(this.subscriber)        
  }
    
  handleClick(){
    this.store.dispatch(increaseKendal(1))
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click',this.handleClick);        
  }

  disconnectedCallback() {
    this.store.unsubscribe(this.subscriber)       
  }

  shouldUpdate(){
    if (this.store.previousState.kendal.counter != this.store.state.kendal.counter){
      this.render()
    }
  }
  

  render() {
    console.log('kendal component')
      this.innerHTML = (
        `<div style="height:100px;background:orange">
          <div>Page Counter = ${this.store.state.kendal.counter}</div>
        </div>`
      )
    }
  
}

customElements.define('kendal-component', KendalComponent);