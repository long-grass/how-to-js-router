export class KendalComponent extends HTMLElement {
    // constructor() {
    //     super();
    // }

    handleClick(){
        console.log("clicked")
    }

    connectedCallback() {
        this.innerHTML = this.render();
        this.addEventListener('click',this.handleClick)
    }

    render() {
        return (`<div style="height:500px;background:orange">
                    <span style="margin-top:25%;color:steelblue">placeholder for kendal information</span>
                </div>`)
    }
}

customElements.define('kendal-component', KendalComponent);