'use strict';

class Storage {
  #items = [];

  constructor(items) {
    this.#items = items;
  }

  addItem(itemToAdd) {
    this.#items.push(itemToAdd);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(el => el !== itemToRemove);
  }

  getItems() {
    return this.#items;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]