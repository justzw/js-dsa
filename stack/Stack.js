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
     * @desc Judge the whether the Stack is empty
     * @return {boolean}
     */
    isEmpty () {
      return !_items.length
    }

    /**
     * @desc Get the amount of the elements in Stack
     * @return {number}
     */
    size () {
      return _items.length
    }

    /**
     * @desc Get the element in the Stack top
     * @return {*}
     */
    peek () {
      return _items[_items.length - 1]
    }

    /**
     * @desc Add elements to the Stack top
     * @param {...*} elements - The elements add to stack top
     * @return {number} - The amount of the elements in Stack
     */

    push (...elements) {
      return _items.push(...elements)
    }

    /**
     * @desc Remove element in the Stack top
     * @return {*} - The element in the Stack top
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
