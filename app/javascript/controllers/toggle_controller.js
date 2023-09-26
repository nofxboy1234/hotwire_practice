import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static classes = ['change'];

  toggle() {
    console.log(this.element);
    this.element.classList.toggle(this.changeClass);
  }
}
