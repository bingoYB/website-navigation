const localKey = 'nav-data'
export default {
	getLocal() {
		let local = localStorage.getItem(localKey)
		let jsonLocal = JSON.parse(localStorage.getItem(localKey))
		this.data = jsonLocal
		if (local) {
			return jsonLocal
		} else {
			return {}
		}
	},
	setLocal(jsonString) {
		localStorage.setItem(localKey, jsonString);
	},
	clearLocal() {
		localStorage.clear()
	}
}