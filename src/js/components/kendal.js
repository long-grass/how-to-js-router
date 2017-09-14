import { store  } from "../store";

export class KendalComponent extends HTMLElement {
    
    handleClick(){
        console.log("clicked")
        document.dispatchEvent(new CustomEvent('action', { detail: 'increaseCount' }));
        this.render()
    }

    connectedCallback() {
        this.state = {}
        this.state.counter = store.counter
        this.render();
        this.addEventListener('click',this.handleClick)
    }

    render() {
        this.innerHTML = (
            `<div style="height:100px;background:orange">
               <div>Page Counter = ${this.state.counter}</div>
            </div>`
        )
    }
}

customElements.define('kendal-component', KendalComponent);