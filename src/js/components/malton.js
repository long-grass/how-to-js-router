export class MaltonComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return (`<div>hello from malton</div>`);
    }
}