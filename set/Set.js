const SetOuter = function () {
  let _items = []

  /**
   * @desc Creates a new Set
   * @class
   * @classdesc This is a description of the Set class
   */
   class Set {
    /**
     * @desc Get amount of the values in the Set
     * @return {number}
     */
    size () {
      return _items.length
    }

    /**
     * @desc Judge whether the Set has the value
     * @param {*} value - The value need to be search
     * @return {boolean}
     */
    has (value) {
      return _items.indexOf(value) !== -1
    }

    /**
     * @desc Add value into the Set
     * @param {*} value - The value add into the Set
     * @return {boolean}  - Whether the add is success or fail
     */
    add (value) {
      if (_items.indexOf(value) === -1) {
        _items.push(value)
        return true
      }

      return false
    }

    /**
     * @desc Delete value in the Set
     * @param {*} value - The value need to be deleted
     * @return {boolean} - Whether the delete is success or fail
     */
    delete (value) {
      const index = _items.indexOf(value)

      if (index !== -1) {
        _items.splice(index, 1)
        return true
      }

      return false
    }

    /**
     * @desc Delete all the values in the Set
     * @return {boolean}
     */
    clear () {
      _items = []
      return true
    }

    /**
     * @desc Get all the values in the Set
     * @return {Array}
     */
    values () {
      return [..._items]
    }

    /**
     * @desc Get the union relative to the otherSet
     * @param {Set} otherSet - The otherSet apply to get the union
     * @return {Set} - The new united Set
     */
    union (otherSet) {
      const newSet = new SetOuter()
      const values = [..._items, ...otherSet.values().filter(item => _items.indexOf(item) === -1)]

      values.forEach(item => newSet.add(item))

      return newSet
    }

    /**
     * @desc Get the intersection relative to the otherSet
     * @param {Set} otherSet - The otherSet apply to get the intersection
     * @return {Set} - The new intersectional Set
     */
    intersection (otherSet) {
      const newSet = new SetOuter()
      const values = otherSet.values().filter(item => _items.indexOf(item) !== -1)

      values.forEach(item => newSet.add(item))

      return newSet
    }

    /**
     * @desc Get the difference relative to the otherSet
     * @param {Set} other - The otherSet apply to get the difference
     * @return {Set} - The new different Set
     */
    difference (otherSet) {
      const newSet = new SetOuter()
      const otherValues = otherSet.values()
      const values = _items.filter(item => otherValues.indexOf(item) === -1)

      values.forEach(item => newSet.add(item))

      return newSet
    }

    /**
     * @desc Judge whether the current instance is subset of the otherSet
     * @param {Set} otherSet - The otherSet apply to judge
     * @return {boolean}
     */
    subset (otherSet) {
      if (_items.length > otherSet.size()) return false

      return _items.every(item => otherSet.has(item))
    }
  }

  return new Set()
}

export default SetOuter
