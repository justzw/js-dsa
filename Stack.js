/**
 * @desc Creates a new Stack
 * @class
 * @classdesc This is a description of the Stack class
 */
class Stack {
  //_items = []

  constructor (...elements) {
    this._items = [...this._items, ...elements]
  }

  /**
   * @desc Judge the whether the Stack is empty
   * @return {boolean}
   */
  isEmpty () {
    return !this._items.length
  }

  /**
   * @desc Get the amount of the elements in Stack
   * @return {number}
   */
  size () {
    return this._items.length
  }

  /**
   * @desc Get the element in the Stack top
   * @return {*}
   */
  peek () {
    return this._items[this._items.length - 1]
  }

  /**
   * @desc Add elements to the Stack top
   * @param {...*} elements - The elements add to stack top
   * @return {number} - The amount of the elements in Stack
   */

  push (...elements) {
    return this._items.push(...elements)
  }

  /**
   * @desc Remove element in the Stack top
   * @return {*} - The element in the Stack top
   */
  pop () {
    return this._items.pop()
  }

  /**
   * @desc Remove all the elements in the Stack
   * @return {Stack}
   */
  clear () {
    this._items = []
    return this
  }

  /**
   * @desc Print the Stack
   * @return {string}
   */
  print () {
    console.log(this._items.toString())
  }
}

export default Stack
