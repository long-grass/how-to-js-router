export class ComponentRegistry {
    
    static register(components) {
        Object.entries(components).map(obj => {
            let tag = obj[0] || 'index'
            let component = {
                tagName : `core-${tag}`,
                callBack: obj[1]
            }
            window.customElements.define(component.tagName, component.callBack);
          })
    }
}