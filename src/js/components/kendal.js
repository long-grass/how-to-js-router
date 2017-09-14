export class KendalComponent extends HTMLElement {
   
    handleClick(){
        console.log("clicked")
        this.state.clicked = "yes"
        this.render()
    }

    connectedCallback() {
        this.state = {}
        this.state.clicked = "no"
        this.render();
        this.addEventListener('click',this.handleClick)
    }

    render() {
        this.innerHTML = (
            `<div style="height:100px;background:orange">
                <span>clicked? ${this.state.clicked}</span>
            </div>`
        )
    }
}

customElements.define('kendal-component', KendalComponent);