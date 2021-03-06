'use babel';

export default class AtomButterflyView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('atom-butterfly');

    // Create message element
    const image = document.createElement('div');
    image.classList.add('butterfly-image');
    this.element.appendChild(image);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
