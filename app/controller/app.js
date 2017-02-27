import FormView from '../view/form';
import ListView from '../view/list';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.formView = new FormView(el.querySelector('.hero-form'), store);
    this.listView = new ListView(el.querySelector('.hero-list'), store);
  }

  created() {
    // setup listening to store in order to save localstorage
    this.store.subscribe(() => {
      window.localStorage.heroes = JSON.stringify(this.store.getState().heroes);
    });

    this.formView.mounted();
    this.listView.mounted();

    // Load data from localStorage to start the app
    this.store.dispatch({
      type: 'HERO@FINDALL_COMPLETE',
      heroes: JSON.parse(window.localStorage.heroes || '[]')
    });
  }
}
