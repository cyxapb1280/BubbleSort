/**
 * Created by Ruslan on 10-Apr-16.
 */
class Controls extends Component {
  constructor(options) {
    super(options);

    this._el.addEventListener('click', this._onCancelButtonClick.bind(this));
    this._el.addEventListener('click', this._onNextButtonClick.bind(this));
  }

  enable() {
    let buttons = this._el.children;

    [].forEach.call(buttons, function (button) {
      button.disabled = false;
    });
  }

  disable() {
    let buttons = this._el.children;

    [].forEach.call(buttons, function (button) {
      button.disabled = true;
    });
  }

  _onCancelButtonClick(event) {
    let button = event.target;

    if (button.dataset.selector !== 'cancel-button') {
      return;
    }

    this._trigger('cancel');
  }

  _onNextButtonClick(event) {
    let button = event.target;

    if (button.dataset.selector !== 'next-button') {
      return;
    }

    this._trigger('next');
  }
}