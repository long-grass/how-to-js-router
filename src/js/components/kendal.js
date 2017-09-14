export class KendalComponent extends HTMLElement {
   

    handleClick(){
        console.log("clicked")
        this.state.clicked = "clicked"
        this.render()
    }

    connectedCallback() {
        this.state = {}
        this.state.clicked = "no"
        this.render();
        this.addEventListener('click',this.handleClick)
    }

    render() {
        this.innerHTML = `<div style="height:500px;background:orange">
                    <span style="margin-top:25%;color:steelblue">clicked? ${this.state.clicked}</span>
                </div>`
    }
}

customElements.define('kendal-component', KendalComponent);