/**
 * Created by Ruslan on 10-Apr-16.
 */
'use strict';

class Bubble {
  constructor(options) {
    this._array = options.array || [];
    this._showSwap = options.showSwap;
    this._showComparing = options.showComparing;
    this._showSorted = options.showSorted;
    this._iteration = 0;
    this._index = 0;
    this._length = 0;
  }

  get array(){
    return this._array;
  }

  set array(value){
    this._array = value;
    this._length = this._array.length - 1;
  }

  nextStep() {
    this._showComparing(this._index, this._index + 1);

    if(this._array[this._index] > this._array[this._index + 1]) {
      this._swap(this._index, this._index + 1);
    }
    
    this._index++;
    
    if(this._index >= this._length){
      this._showSorted(this._index);
      this._length--;
      this._index = 0;
      this._iteration++;
    }
    
    return this._iteration < this._array.length - 1;
  }

  _swap(first, second) {
    var temp = this._array[first];
    this._array[first] = this._array[second];
    this._array[second] = temp;
    
    this._showSwap(first, second);
  }
}
