export class DefaultComponent extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = (`i am the homepage`)
    }
}

customElements.define('default-component', DefaultComponent);