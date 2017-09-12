export class Counter extends PElement {
    constructor() {
      super();
      this.state.counter = 1;
    }
  
    get template() {
      return `
        <section>
          <h1>Click counter</h1>
          <h2>${this.state.counter}</h2>
          <wc-image src="http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg"/>
        <section>
      `;
    }
  
    connectedCallback() {
      this.addEventListener('click', this.onClick);
      super.connectedCallback();
    }
  
    onClick() {
      this.state.counter++;
      this.setState(this.state)
    }
  }
  customElements.define('wc-counter', Counter);