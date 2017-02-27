import { createHero } from '../actions';

export default class FormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.el.addEventListener('submit', (anything) => {
      // Stop reloading the page
      anything.preventDefault();

      const name = this.el.querySelector('.hero-form__name').value;
      const power = this.el.querySelector('.hero-form__power').value;

      this.store.dispatch(createHero(name, power));

      // Clear the form and local stuff to this view
    });
  }
}
