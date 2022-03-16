const TAG_NAME = 'mettle-carousel'


if (!window.customElements.get(TAG_NAME)) {
  window.customElements.define(TAG_NAME, class extends HTMLElement {

    constructor(){
      super('')
      this.attachShadow({ mode: 'open' })
        .appendChild(this._generateTemplate())
    }

    _generateTemplate() {
      const template = document.createElement('div')
      template.innerHTML = `
        <style>
            article {
            scroll-snap-type: y mandatory;
            scroll-padding-top: 15vh;
            height: 50rem;
            }
            section {
            height: 50rem;
            scroll-snap-align: start;
            }
        </style>
        <article class="mettle-carousel">
            <section>ONE</section>
            <section>TWO</section>
            <section>THREE</section>
        </article>
      `
      return template
    }

    connectedCallback(){

    }

  })
}
