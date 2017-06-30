/**
 * Created by Ruslan on 10-Apr-16.
 */
'use strict';

let Component = require('./component');

class SortingDisplay extends Component {
  constructor(options) {
    super(options);

    this._template = document.getElementById('sorting-display-template').innerHTML;
  }

  renderElements(array) {
    this._el.innerHTML = _.template(this._template)({
      elements: array
    });
  }

  swapElements(first, second) {
    let firstElement = this._el.querySelector(`[data-index="${first}"]`);
    let secondElement = this._el.querySelector(`[data-index="${second}"]`);


    firstElement.className = 'element bg-danger';
    secondElement.className ='element bg-danger';
    
    let tempValue = firstElement.dataset.value;
    firstElement.dataset.value = firstElement.innerHTML = secondElement.dataset.value;
    secondElement.dataset.value = secondElement.innerHTML = tempValue;
  }

  compareElements(first, second) {
    let firstElement = this._el.querySelector(`[data-index="${first}"]`);
    let secondElement = this._el.querySelector(`[data-index="${second}"]`);

    this._restoreColorOfElement(first - 1);
    firstElement.className = 'element bg-warning';
    secondElement.className ='element bg-warning';
  }

  markSortedElement(index) {
    let element = this._el.querySelector(`[data-index="${index}"]`);

    element.className = 'element bg-success';
    this._restoreColorOfElement(index - 1);
  }

  _restoreColorOfElement(index) {
    let element = this._el.querySelector(`[data-index="${index}"]`);

    if(!element) {
      return;
    }

    element.className = 'element bg-info';
  }
}

module.exports = SortingDisplay;