const Queue = (function () {
  /** Simulate private variable */
  let _items = []

  /**
   * @desc Creates a new Queue
   * @class
   * @classdesc This is a description of the Queue class
   */
  return class {
    constructor (...elements) {
      _items = [..._items, ...elements]
    }

    /**
     * @desc Judge whether the Queue is empty
     * @return {boolean}
     */
    isEmpty () {
      return !_items.length
    }

    /**
     * @desc Get amount of the elements in the Queue
     * @return {number}
     */
    size () {
      return _items.length
    }

    /**
     * @desc Get element in the head of the Queue
     * @return {*}
     */
    front () {
      return _items[0]
    }

    /**
     * @desc Add elements to the tail of the Queue
     * @param {...*} elements - The elements add to the tail of the Queue
     * @return {number} - The amount of the elements in the Queue
     */
    enqueue (...elements) {
      return _items.push(...elements)
    }

    /**
     * @desc Remove element in the head of the Queue
     * @return {*} - The element in the head of the Queue
     */
    dequeue () {
      return _items.shift()
    }

    /**
     * @desc Remove all the elements in the Queue
     * @return {Queue}
     */
    clear () {
      _items = []
      return this
    }

    /**
     * @desc Print the Queue
     * @return {string}
     */
    print () {
      console.log(_items.toString())
    }
  }
})()

export default Queue
