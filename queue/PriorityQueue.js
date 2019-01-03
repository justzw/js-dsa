class QueueElement {
  constructor (element, priority) {
    this.element = element
    this.priority = priority
  }
}

const PriorityQueue = (function () {
  /** Simulate private variable */
  let _items = []

  /**
   * @desc Creates a new PriorityQueue
   * @class
   * @classdesc This is a description of PriorityQueue class
   */
  return class {
    /**
     * @desc Judge the whether the PriorityQueue is empty
     * @return {boolean}
     */
    isEmpty () {
      return !_items.length
    }

    /**
     * @desc Get the amount of the elements in PriorityQueue
     * @return {number}
     */
    size () {
      return _items.length
    }

    /**
     * @desc Get the first elements is PriorityQueue
     * @return {*}
     */
    front () {
      return _items[0].element
    }

    /**
     * @desc Add element to the PriorityQueue according to the priority
     * @param {*} element - The element add to the PriorityQueue
     * @param {number} priority - The priority of the element
     * @return {number} - The amount of the elements in the PriorityQueue
     */
    enqueue (element, priority) {
      let addIndex = -1

      element = new QueueElement(element, priority)
      _items.forEach((item, index) => {
        // 最小优先队列
        if (element.priority < item.priority) addIndex = index
        // 最大优先队列
        // if (element.priority > item.priority) addIndex = index
      })

      if (addIndex !== -1) {
        _items.splice(addIndex, 0, element)
      } else {
        _items.push(element)
      }

      return _items.length
    }

    /**
     * @desc Remove element in the PriorityQueue head
     * @return {*} - The element in the PriorityQueue head
     */
    dequeue () {
      return _items.shift()
    }

    /**
     * @desc Remove all the elements in the PriorityQueue
     * @return {Queue}
     */
    clear () {
      _items = []
      return this
    }

    /**
     * @desc Print the PriorityQueue
     * @return {string}
     */
    print () {
      console.log(_items.map(item => item.element).toString())
    }
  }
})()

export default PriorityQueue
