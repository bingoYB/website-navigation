import data from '../data/data'
class search {
	option: any
	queryArrayMap: any
	constructor(data, option) {
		this.option = option ? option : {}
		this.queryArrayMap = data.index
		// this.datainit(data)
	}

	search(v) {
		let results = []
		// 等同于使用map.entries()
		for (let [key, value] of this.queryArrayMap) {
			if (value.match(v)) {
				results.push(key)
			}
		}
		return results
	}
	// 相当于建立索引
	datainit(data) {
		let m = this.queryArrayMap = new Map()
		for (const key in data) {
			const el = data[key].sub
			for (let i = 0; i < el.length; i++) {
				const item = el[i].item
				for (let j = 0; j < item.length; j++) {
					const meta = item[j];
					let querystr = ''
					let sks = this.option.searchKeys ? this.option.searchKeys : Object.keys(meta)
					sks.forEach((k) => {
						if (meta.hasOwnProperty(k))
							querystr += " " + meta[k]
					})
					m.set(meta, querystr)
				}
			}
		}
	}
}

export default new search(data)