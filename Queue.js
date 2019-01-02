/**
 * @desc Creates a new Queue
 * @class
 * @classdesc This is a description of Queue class
 */
class Queue {
  _items = []

  constructor (...elements) {
    this._items = [...this._items, ...elements]
  }

  /**
   * @desc Judge the whether the Queue is empty
   * @return {boolean}
   */
  isEmpty () {
    return !this._items.length
  }

  /**
   * @desc Get the amount of the elements in Queue
   * @return {number}
   */
  size () {
    return this._items.length
  }

  /**
   * @desc Get the first elements is Queue
   * @return {*}
   */
  front () {
    return this._items[0]
  }

  /**
   * @desc Add elements to the Queue tail
   * @param {...*} elements - The elements add to Queue tail
   * @return {number} - The amount of the elements in the Queue
   */
  enqueue (...elements) {
    return this._items.push(...elements)
  }

  /**
   * @desc Remove element in the Queue head
   * @return {*} - The element in the Queue head
   */
  dequeue () {
    return this._items.shift()
  }

  /**
   * @desc Remove all the elements in the Queue
   * @return {Queue}
   */
  clear () {
    this._items = []
    return this
  }

  /**
   * @desc Print the Queue
   * @return {string}
   */
  print () {
    console.log(this._items.toString())
  }
}

export default Queue
