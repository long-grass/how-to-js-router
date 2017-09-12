export class DefaultComponent extends HTMLElement {
    // constructor() {
    //     // super();
    // }

    connectedCallback() {
        console.log(DefaultComponent)
        console.log(HTMLElement)
        this.innerHTML = this.render();
    }

    render() {
        return (`i am the homepage`)
    }
}

customElements.define('default-component', DefaultComponent);