export class DefaultComponent extends HTMLElement {

    connectedCallback() {
        console.log(DefaultComponent)
        console.log(HTMLElement)
        this.render();
    }

    render() {
        this.innerHTML = (`i am the homepage`)
    }
}

customElements.define('default-component', DefaultComponent);