export class GlossopComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return (`<ul style="color:white;background: cornflowerblue;display:block;list-style:none">
                     <li>glossop</li>
                     <li>hadfield</li>
                     <li>tintwistle</li>
                 </ul>`)
    }
}

customElements.define('glossop-component', GlossopComponent);