export class GlossopComponent extends HTMLElement {

    handleClick(){
        console.log("ive been clicked")
    }

    connectedCallback() {
        this.render();
        this.onClick = this.handleClick
    }

    render() {
        this.innerHTML = (`<ul style="color:white;background: cornflowerblue;display:block;list-style:none">
                     <li>glossop</li>
                     <li>hadfield</li>
                     <li>tintwistle</li>
                 </ul>`)
    }
}

customElements.define('glossop-component', GlossopComponent);