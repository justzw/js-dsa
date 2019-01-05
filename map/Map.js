const MapOuter = function () {
	/** Simulate private variable */
	let _items = {}
	
	/**
	 * @desc Creates a new Map
	 * @class
	 * @classdesc This is a description of the Map class
	 */
	class Map {
		/**
     * @desc Get amount of the elements in the Map
     * @return {number}
     */
		size () {
			// return Object.getOwnPropertyNames(_items).length
			return Object.keys(_items).length
		}

		/**
     * @desc Judge whether the Map has the element
     * @param {*} key - The key to search the element
     * @return {boolean}
     */
		has (key) {
			return _items.hasOwnProperty(key)
		}
		
		/**
     * @desc Add element into the Map
     * @param {*} key - The key of the element
		 * @param {*} value - The value of the element
     */
		set (key, value) {
			_items[key] = value
		}

		/**
     * @desc Get element into the Map
     * @param {*} key - The key apply to get the element
		 * @return {*}
     */
		get (key) {
			return _items[key]
		}

 		/**
     * @desc Delete element in the Map
     * @param {*} key - The key apply to delete the element
     * @return {boolean} - Whether the delete is success or fail
     */
		delete (key) {
			if (_items.hasOwnProperty(key)) {
				delete _items[key]
				return true
			}

			return false
		}
		
		/**
     * @desc Delete all the elements in the Map
     */
		clear () {
			_items = {}
		}

		/**
		 * @desc Get keys of all the elements
		 * @return {Array} - The keys of all the elements
		 */
		keys () {
			const keys = []

			for (let k in _items) {
				if (_items.hasOwnProperty(k)) {
					keys.push(k)
				} 
			}

			return keys
		}

		/**
		 * @desc Get values of all the elements
		 * @return {Array} - The values of all the elements
		 */
		values () {
			const values = []
			
			for (let k in _items) {
				if (_items.hasOwnProperty(k)) {
					values.push(_items[k])
				}
			}

			return values
		}
	}

	return new Map()
}

export default MapOuter