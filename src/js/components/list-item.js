export class ListItem extends HTMLElement {

    constructor(route,store){
        super()
        this.route = {
            text: route || 'index',
            path: route
        }
        this.store = store
    }

    handleClick(){

    }

    connectedCallback() {
        this.addEventListener('click',this.handleClick)
        this.render()
    }

    render(previousState,state) {
          this.innerHTML = (`<li>${this.route.text}</liv>`)
    }
}

customElements.define('list-item', ListItem);