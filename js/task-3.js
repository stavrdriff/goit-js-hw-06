'use strict';

class StringBuilder {
  _value = '';

  constructor(initialValue) {
    this._value = initialValue;
  }

  padStart(str) {
    return this._value = str + this._value;
  }

  padEnd(str) {
    return this._value = this._value + str;
  }

    padBoth(str) {    
      return this._value = str + this._value + str;
  }

  getValue() { 
    return this._value;
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