import { store  } from "../store";

export class KendalComponent extends HTMLElement {
    
    handleClick(){
        console.log("clicked")
        document.dispatchEvent(new CustomEvent('action', { detail: 'increaseCount' }));
        this.render()
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click',this.handleClick)
        document.addEventListener('state', () => this.render());        
    }

    render() {
        this.innerHTML = (
            `<div style="height:100px;background:orange">
               <div>Page Counter = ${store.counter}</div>
            </div>`
        )
    }
}

customElements.define('kendal-component', KendalComponent);