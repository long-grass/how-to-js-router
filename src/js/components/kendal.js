import { store  } from "../store";

export class KendalComponent extends HTMLElement {

    constructor(){
        super()
        this.store = store
        this.subscriber = this.render.bind(this)
        this.store.subscribe(this.subscriber)
        this.store.getState() 
    }
    
    handleClick(){
        console.log("clicked")
  
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click',this.handleClick);        
    }

    render() {
        this.innerHTML = (
            `<div style="height:100px;background:orange">
               <div>Page Counter = ${this.store.state.kendal.counter}</div>
            </div>`
        )
    }
}

customElements.define('kendal-component', KendalComponent);
