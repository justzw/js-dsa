const Stack = (function () {
  /** Simulate private variable */
  let _items = []

  /**
   * @desc Creates a new Stack
   * @class
   * @classdesc This is a description of the Stack class
   */
  return class {
    constructor (...elements) {
      _items = [..._items, ...elements]
    }

    /**
     * @desc Judge whether the Stack is empty
     * @return {boolean}
     */
    isEmpty () {
      return !_items.length
    }

    /**
     * @desc Get amount of the elements in the Stack
     * @return {number}
     */
    size () {
      return _items.length
    }

    /**
     * @desc Get element in the top of the Stack
     * @return {*}
     */
    peek () {
      return _items[_items.length - 1]
    }

    /**
     * @desc Add elements to the top of the Stack
     * @param {...*} elements - The elements add to the top of the stack
     * @return {number} - The amount of the elements in the Stack
     */

    push (...elements) {
      return _items.push(...elements)
    }

    /**
     * @desc Remove element in the top of the Stack
     * @return {*} - The element in the top of the Stack
     */
    pop () {
      return _items.pop()
    }

    /**
     * @desc Remove all the elements in the Stack
     * @return {Stack}
     */
    clear () {
      _items = []
      return this
    }

    /**
     * @desc Print the Stack
     * @return {string}
     */
    print () {
      console.log(_items.toString())
    }
  }
})()

export default Stack
