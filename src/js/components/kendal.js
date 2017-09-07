export class KendalComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return (`<div>hello from kendal</div>`);
    }
}