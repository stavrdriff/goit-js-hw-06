'use strict';

class Storage {
  constructor(items) {
    this.items = items;
  }

  addItem(itemToAdd) {
    return this.items.push(itemToAdd);
  }

  removeItem(itemToRemove) {
    return this.items = this.items.filter(el => el !== itemToRemove);
  }

  getItems() {
    return this.items;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]