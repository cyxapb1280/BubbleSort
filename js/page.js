/**
 * Created by Ruslan on 10-Apr-16.
 */

class Page extends Component {
  constructor(options) {
    super(options);

    this._input = new ArrayInput({
      element: this._el.querySelector('[data-component="array-input"]')
    });

    this._controls = new Controls({
      element: this._el.querySelector('[data-component="controls"]')
    });

    this._sortDisplay = new SortingDisplay({
      element: this._el.querySelector('[data-component="sorting-display"]')
    });

    this._bubble = new Bubble({
      showComparing: this._showComparing.bind(this),
      showSwap: this._showSwap.bind(this),
      showSorted: this._showSorted.bind(this)
    });

    this._input.on('array-ready', this._onInputArrayReady.bind(this));
    this._controls.on('cancel', this._onControlsCancel.bind(this));
    this._controls.on('next', this._onControlsNext.bind(this));
  }

  _onInputArrayReady(event) {
    let array = event.detail;
    this._controls.enable();
    this._sortDisplay.renderElements(array);
    this._bubble.array = array;
  }

  _onControlsCancel(event) {
    console.log('Cancel');
  }

  _onControlsNext(event) {
    if (!this._bubble.nextStep()) {
      this._done();
    }
  }

  _showSwap(first, second) {
    this._sortDisplay.swapElements(first, second);
  }

  _showComparing(first, second) {
    this._sortDisplay.compareElements(first, second);
  }

  _showSorted(index) {
    this._sortDisplay.markSortedElement(index);
  }

  _done() {
    this._showSorted(0);
    this._showDoneMessage();

    this._controls.disable();
  }

  _showDoneMessage() {
    let alert = document.createElement('div');
    alert.className = 'message done alert alert-success';
    alert.innerHTML = '<strong>Well done!</strong> Your array is sorted.';

    this._el.appendChild(alert);

    setTimeout(function () {
      alert.classList.add('closing');
    }, 2000);

    setTimeout(function () {
      alert.remove();
    }, 3000);
  }
  
}