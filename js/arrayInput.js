/**
 * Created by Ruslan on 10-Apr-16.
 */
'use strict';

class ArrayInput extends Component {
  constructor(options) {
    super(options);

    this._arrayEntry = this._el.querySelector('[data-selector="array-entry"]');

    this._errorTemplate = document.getElementById('error-template');

    this._el.addEventListener('click', this._onSortButtonClick.bind(this));
  }

  _onSortButtonClick(event) {
    let button = event.target;

    if (button.dataset.selector !== 'sort-button') {
      return;
    }

    let data = this._tryParseToArray(this._arrayEntry.value);

    if (!data) {
      return;
    }

    this._trigger('array-ready', data);
  }

  _tryParseToArray(string) {
    string = string.replace(/^\s*/,'').replace(/\s*$/,'');

    let numberStrings = string.split(' ');
    let numbers = [];

    for (let i = 0; i < numberStrings.length; i++) {
      let number = +numberStrings[i];

      if (isNaN(number)) {
        this._showValidationError();
        return null;
      }

      numbers.push(number);
    }

    return numbers;
  }

  _showValidationError() {
    let alert = document.createElement('div');
    alert.className = 'message alert alert-danger';
    alert.innerHTML ='<strong>Sorry</strong> your array don`t pass validation';

    this._el.parentElement.insertBefore(alert, this._el);

    setTimeout(function () {
      alert.classList.add('closing');
    }, 2000);

    setTimeout(function () {
      alert.remove();
    }, 3000);
  }
}
