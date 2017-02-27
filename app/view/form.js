export default class ClassName {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (anything) => {
      // Stop reloading the page
      anything.preventDefault();

      this.store.dispatch({
        type: 'HERO@CREATE_COMPLETE',
        hero: {
          name: this.el.querySelector('.hero-form__name').value,
          power: this.el.querySelector('.hero-form__power').value,
        }
      });

      // Clear the form and local stuff to this view
    });
  }
}
