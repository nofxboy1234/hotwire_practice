import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['name', 'output'];
  static values = { count: { type: Number, default: 0 } };

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
}
