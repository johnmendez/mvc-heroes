class ItemView {
  constructor(hero, store) {
    this.hero = hero;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('column');

    this.el.innerHTML = `
      <div class="card">
        <div class="card-content">
          <h2 class="hero-name"></h2>
          <h3 class="hero-power"></h3>
        </div>
      </div>`;
  }

  render() {
    this.el.querySelector('.hero-name').innerText = this.hero.name;
    this.el.querySelector('.hero-power').innerText = this.hero.power;
  }
}

export default class ListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    // Listen for changes and update what the user sees
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    const heroes = this.store.getState().heroes;
    heroes.forEach((data) => {
      const view = new ItemView(data, this.store);
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
