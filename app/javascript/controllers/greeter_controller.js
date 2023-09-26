import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['name', 'output'];
  greet() {
    console.log('greet()')
    this.outputTarget.innerHtml = `Hello ${this.nameTarget.value}!`;
  }
}
