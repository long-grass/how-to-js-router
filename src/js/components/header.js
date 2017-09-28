import { ListItem } from './list-item'

export class Header  {
    
  constructor(config){
    this.routes = config.routes
    this.store = config.store
    let header = document.createElement('ul')
    document.body.appendChild(header)
    this.render()
  }

  render(){
    Object.keys(this.routes).map(route => {
      let link = new ListItem(route,this.store)
      header.appendChild(link);
    })
  }
}