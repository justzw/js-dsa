class LinkedListElement {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

const LinkedList = (function () {
  let length = 0
  let head = null

  /**
   * @desc Creates a new LinkedList
   * @class
   * @classdesc This is a description of the LinkedList class
   */
  return class {
    /**
     * @desc Judge whether the LinkedList is empty
     * @return {number}
     */
    isEmpty () {
      return !length
    }

    /**
     * @desc Get amount of the elements in the LinkedList
     * @return {number}
     */
    size () {
      return length
    }

    /**
     * @desc Get the element in the head of the LinkedList
     * @return {*}
     */
    getHead () {
      if (!head) throw new Error('The LinkedList is empty')
      return head.element
    }

    /**
     * @desc Get the position of the element in the LinkedList from head to tail
     * @param {*} element - The element need to to be position
     * @return {number} - The position of the element
     */
    indexOf (element) {
      let current = head
      let position = 0

      while (current) {
        if (current.element === element) return position

        current = current.next
        position++
      }

      return -1
    }

    /**
     * @desc Add element to the tail of the LinkedList
     * @param {*} element - The element add to the tail of the LinkedList
     * @return {number} - The amount of the elements in the LinkedList
     */
    append (element) {
      const linkedListElement = new LinkedListElement(element)

      if (head === null) {
        head = linkedListElement
      } else {
        let current = head

        while (current.next) {
          current = current.next
        }

        current.next = linkedListElement
      }

      return ++length
    }

    /**
     * @desc Insert element into the LinkedList according to the position
     * @param {*} element - The element insert into the LinkedList
     * @param {number} position - The position where the element insert into
     * @return {number} - The amount of the elements in the LinkedList
     */
    insert (element, position) {
      // 判断是否越界
      if (position < 0 || position > length) throw new Error('The position is out of the LinkedList')

      const linkedListElement = new LinkedListElement(element)
      let current = head
      let previous = null

      if (position === 0) {
        linkedListElement.next = current
        head = linkedListElement
      } else {
        for (let i = 0; i < position; i++) {
          previous = current
          current = current.next
        }

        previous.next = linkedListElement
        linkedListElement.next = current
      }

      return ++length
    }

    /**
     * @desc Remove element in the LinkedList according to the position
     * @param {number} position - The position of the element will be removed
     * @return {*} - The element be removed
     */
    removeAt (position) {
      // 判断是否越界
      if (position < 0 || position >= length) throw new Error('The position is out of the LinkedList')

      let current = head
      let previous = null

      if (position === 0) {
        head = current.next
      } else {
        for (let i = 0; i < position; i++) {
          previous = current
          current = current.next
        }

        previous.next = current.next
      }

      length--

      return current.element
    }

    /**
     * @desc Remove the element in the LinkedList
     * @return {*} - The element need to be removed
     */
    remove (element) {
      const position = this.indexOf(element)

      if (position === -1) throw new Error('The LinkedList does not have the element')

      return this.removeAt(position)
    }

    /**
     * @desc
     * @return {string}
     */
    toString () {
      let current = head
      let str = ''

      while (current) {
        str += current.element + (current.next ? ',' : '')
        current = current.next
      }

      return str
    }
  }
})()

export default LinkedList
