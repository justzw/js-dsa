class QueueElement {
  constructor (element, priority) {
    this.element = element
    this.priority = priority
  }
}

const PriorityQueueOuter = function () {
  /** Simulate private variable */
  let _items = []

  /**
   * @desc Creates a new PriorityQueue
   * @class
   * @classdesc This is a description of the PriorityQueue class
   */
  class PriorityQueue {
    /**
     * @desc Judge whether the PriorityQueue is empty
     * @return {boolean}
     */
    isEmpty () {
      return !_items.length
    }

    /**
     * @desc Get amount of the elements in the PriorityQueue
     * @return {number}
     */
    size () {
      return _items.length
    }

    /**
     * @desc Get element in the head of the PriorityQueue
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
      const queueElement = new QueueElement(element, priority)
      let addIndex = -1

      _items.forEach((item, index) => {
        // 最小优先队列
        if (queueElement.priority < item.priority) addIndex = index
        // 最大优先队列
        // if (queueElement.priority > item.priority) addIndex = index
      })

      if (addIndex !== -1) {
        _items.splice(addIndex, 0, queueElement)
      } else {
        _items.push(queueElement)
      }

      return _items.length
    }

    /**
     * @desc Remove element in the head of the PriorityQueue
     * @return {*} - The element in the head of the PriorityQueue
     */
    dequeue () {
      return _items.shift()
    }

    /**
     * @desc Remove all the elements in the PriorityQueue
     * @return {PriorityQueue}
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

  return new PriorityQueue()
}

export default PriorityQueueOuter
