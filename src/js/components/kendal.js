export class KendalComponent extends HTMLElement {
    
    handleClick(){
        console.log("clicked")
        this.state.counter += 1
        this.render()
    }

    connectedCallback() {
        this.state = {counter:0}
        this.render();
        this.addEventListener('click',this.handleClick)
    }

    render() {
        this.innerHTML = `<div>Page Counter = ${this.state.counter}</div>`
    }
}

customElements.define('kendal-component', KendalComponent);