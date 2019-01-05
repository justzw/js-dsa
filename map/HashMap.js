const  HashMapOuter = function () {
	/** Simulate private variable */
	const loseloseHashCode = key => {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % 40
	}
	let _items = []

	/**
	 * @desc Creates a new HashMap
	 * @class
	 * @classdesc This is a description of the HashMap class
	 */
	class HaspMap {
		/**
		 * @desc Get element in the HaspMap
		 * @param {*} key - The key of the element
		 */
		get (key) {
			const position = loseloseHashCode(key)
			return _items[position]
		}

		/**
		 * @desc Add element into the HaspMap
		 * @param {*} key - The key of the element
		 * @param {*} value - The value of the element 
		 */
		put (key, value) {
			const position = loseloseHashCode(key)
			_items[position] = value
		}

		/**
		 * @desc Remove element into the HaspMap
		 * @param {*} key - The key of the element
		 */
		remove (key) {
			const position = loseloseHashCode(key)
			_items[position] = undefined
		}
	}

	return new HaspMap()
}

export default HashMapOuter