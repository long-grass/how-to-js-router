import { loadRoute } from '../actions'

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
    this.store.dispatch(loadRoute({path:this.route.path}))
  }

  connectedCallback() {
    this.store.subscribe(this.render.bind(this));
    this.addEventListener('click',this.handleClick)
  }

  render(previousState,state) {
    if (previousState.route.path != state.route.path ){
      let linkColour
      this.route.path === state.route.path ?
        linkColour = "color:red" :
        linkColour = "color:blue"
      this.innerHTML = (`<li style=${linkColour}>${this.route.text}</liv>`)
    }
  }
}

customElements.define('list-item', ListItem);