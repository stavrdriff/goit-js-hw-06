'use strict';

class StringBuilder {
  #value = '';

  constructor(initialValue) {
    this.#value = initialValue;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padEnd(str) {
    this.#value = this.#value + str;
  }

  padBoth(str) {    
    this.#value = str + this.#value + str;
  }

  getValue() { 
    return this.#value;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="