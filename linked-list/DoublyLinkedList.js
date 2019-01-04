class Node {
  constructor (element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}


const DoublyLinkedListOuter = function () {
  let length = 0
  let head = null
  let tail = null

  /**
   * @desc Creates a new DoublyLinkedList
   * @class
   * @classdesc This is a description of the DoublyLinkedList class
   */
  class DoublyLinkedList {
    /**
     * @desc Judge whether the DoublyLinkedList is empty
     * @return {number}
     */
    isEmpty () {
      return !length
    }

    /**
     * @desc Get amount of the elements in the DoublyLinkedList
     * @return {number}
     */
    size () {
      return length
    }

    /**
     * @desc Get the element in the head of the DoublyLinkedList
     * @return {*}
     */
    getHead () {
      if (!head) throw new Error('The DoublyLinkedList is empty')
      return head.element
    }

    /**
     * @desc Get the element in the tail of the DoublyLinkedList
     * @return {*}
     */
    getTail () {
      if (!tail) throw new Error('The DoublyLinkedList is empty')
      return tail.element
    }

    /**
     * @desc Get the position of the element in the DoublyLinkedList from head to tail
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
     * @desc Get the position of the element in the DoublyLinkedList from tail to head
     * @param {*} element - The element need to to be position
     * @return {number} - The position of the element
     */
    lastIndexOf (element) {
      let current = tail
      let position = 0

      while (current) {
        if (current.element === element) return length - 1 - position

        current = current.prev
        position++
      }

      return -1
    }

    /**
     * @desc Add element to the tail of the DoublyLinkedList
     * @param {*} element - The element add to the tail of the DoublyLinkedList
     * @return {number} - The amount of the elements in the DoublyLinkedList
     */
    append (element) {
      const node = new Node(element)

      if (head === null) {
        head = node
        tail = node
      } else {
        let current = head

        while (current.next) {
          current = current.next
        }

        node.prev = current
        current.next = node
        tail = node
      }

      return ++length
    }

    /**
     * @desc Insert element into the DoublyLinkedList according to the position
     * @param {*} element - The element insert into the DoublyLinkedList
     * @param {number} position - The position where the element insert into
     * @return {number} - The amount of the elements in the DoublyLinkedList
     */
    insert (element, position) {
      if (position < 0 || position > length) throw new Error('The position is out of the DoublyLinkedList')

      const node = new Node(element)
      let current = head
      let previous = null

      if (position === 0) {
        node.next = current
        head = node
      } else if (position === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        if (position === length - 1) {
          current = tail
          previous = tail.prev
        } else {
          for (let i = 0; i < position; i++) {
            previous = current
            current = current.next
          }
        }

        node.prev = previous
        node.next = current

        previous.next = node
        current.prev = node
      }

      return ++length
    }

     /**
     * @desc Remove element in the DoublyLinkedList according to the position
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

        if (length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length - 1) {
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        for (let i = 0; i < position; i++) {
          previous = current
          current = current.next
        }

        previous.next = current.next
        current.next.prev = previous
      }

      length--

      return current.element
    }

    /**
     * @desc Remove the element in the DoublyLinkedList
     * @return {*} - The element need to be removed
     */
    remove (element) {
      const position = this.indexOf(element)

      if (position === -1) throw new Error('The DoublyLinkedList does not have the element')

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

  return new DoublyLinkedList()
}

export default DoublyLinkedListOuter
