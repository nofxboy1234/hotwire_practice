import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['name', 'output', 'classdiv'];
  static values = { count: { type: Number, default: 0 } };
  static classes = ['change'];

  connect() {
    this.countValue = 5;
  }

  addOne() {
    this.countValue++;
  }

  countValueChanged() {
    console.log(this.countValue);
  }

  greet() {
    this.outputTarget.innerHTML = `Hello ${this.nameTarget.value}!`;
    this.addOne();
  }

  toggle() {
    console.log(this.element);
    console.log(this.classdivTarget)
    this.element.classList.toggle(this.changeClass);
    // this.classdivTarget.classList.toggle(this.changeClass);
  }
}
