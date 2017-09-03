export class Page {
  constructor(url) {
    this.url = `views/${url}.html`;
  }

  load() {
    return fetch(this.url).then(r => r.text())
    .then(data => this.html = data)
    .catch(e => console.log("Booo"))
  }

  show(el) {
    el.innerHTML = this.html;
  }
}
