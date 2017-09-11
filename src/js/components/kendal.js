export class KendalComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return (`<div style="height:500px;background:orange">
                    <span style="margin-top:25%;color:steelblue">placeholder for kendal information</span>
                </div>`)
    }
}
