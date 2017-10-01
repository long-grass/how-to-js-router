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
    // console.log(this.routes)
    this.routes.map(route => {
      let link = new ListItem(route,this.store)
      header.appendChild(link);
    })
  }
}