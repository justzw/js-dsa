const Queue = (function () {
  /** Simulate private variable */
  let _items = []

  /**
   * @desc Creates a new Queue
   * @class
   * @classdesc This is a description of Queue class
   */
  return class {
    constructor (...elements) {
      _items = [..._items, ...elements]
    }

    /**
     * @desc Judge the whether the Queue is empty
     * @return {boolean}
     */
    isEmpty () {
      return !_items.length
    }

    /**
     * @desc Get the amount of the elements in Queue
     * @return {number}
     */
    size () {
      return _items.length
    }

    /**
     * @desc Get the first elements is Queue
     * @return {*}
     */
    front () {
      return _items[0]
    }

    /**
     * @desc Add elements to the Queue tail
     * @param {...*} elements - The elements add to Queue tail
     * @return {number} - The amount of the elements in the Queue
     */
    enqueue (...elements) {
      return _items.push(...elements)
    }

    /**
     * @desc Remove element in the Queue head
     * @return {*} - The element in the Queue head
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
