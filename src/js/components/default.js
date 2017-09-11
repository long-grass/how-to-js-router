export class DefaultComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return (`i am the homepage`)
    }
}