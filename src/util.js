export default {
	/**
	* 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
	* @param delay  {number}    延迟时间，单位毫秒
	* @param action {function}  请求关联函数，实际应用需要调用的函数
	* @return {function}    返回客户调用函数
	*/
	throttle(fn, mustRun = 100) {
		const timer = null;
		let previous = null;
		const context = this;
		return function () {
			const now = new Date();
			const args = arguments;
			if (!previous) {
				previous = now;
			}
			const remaining = now - previous;
			if (mustRun && remaining >= mustRun) {
				fn.apply(context, args);
				previous = now;
			}
		}
	},
	/**
	* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
	* @param idle   {number}    空闲时间，单位毫秒
	* @param action {function}  请求关联函数，实际应用需要调用的函数
	* @return {function}    返回客户调用函数
	*/
	debounce(action, idle) {
		if (typeof action != 'function') {
			throw new TypeError('Expected a function')
		}
		let timer = null
		return function () {
			let context = this
			let arg = arguments
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				action.apply(context, arg)
			}, idle)
		}
	},

	lazyLoad(options) {
		let { content, imgs = [] } = options
		let index = 0
		checkImgs()
		content.onscroll = this.throttle(checkImgs)

		function isInSight(el) {
			const bound = el.getBoundingClientRect();
			const clientHeight = window.innerHeight;
			//如果只考虑向下滚动加载
			//const clientWidth=window.innerWeight;
			return bound.top <= clientHeight;
		}

		function loadImg(el) {
			if (!el.src) {
				const source = el.dataset.src;
				el.src = source;
			}
		}

		function checkImgs() {
			for (let i = index; i < imgs.length; i++) {
				if (isInSight(imgs[i])) {
					loadImg(imgs[i]);
					index = i;
				}
			}
		}
	},
	/**
	 * 事件代理封装函数
	*/
	EA(ele) {
		function next(target) {
			return target !== document.body && target !== null
		}
		return {
			on(event, selector, callback) {
				ele.addEventListener(event, (e) => {
					let selectMap = new Map()
					ele.querySelectorAll(selector).forEach(function (el) {
						selectMap.set(el, true)
					})
					let target = e.target
					if (selector) {
						while (next(target)) {
							if (selectMap.has(target)) {
								callback(e, target);
								return
							}
							target = target.parentElement
						}
					} else {
						callback(e, target);
					}
				})
			},
			once(event, selector, callback) {
				ele.addEventListener(event, (e) => {
					let selectMap = new Map()
					ele.querySelectorAll(selector).forEach(function (el) {
						selectMap.set(el, true)
					})
					let target = e.target
					while (next(target)) {
						if (selectMap.has(target)) {
							callback(e, target);
							return
						}
						target = target.parentElement
					}
				}, {
					once: true
				})
			},
			onOther(event, selector, callback) {
				ele.addEventListener(event, (e) => {
					let selectMap = new Map()
					ele.querySelectorAll(selector).forEach(function (el) {
						selectMap.set(el, true)
					})
					let target = e.target
					while (next(target)) {
						if (selectMap.has(target)) {
							return
						}
						target = target.parentElement
					}
					callback(e)
				})
			},
			onOtherOnce(event, selector, callback) {
				ele.addEventListener(event, function bindCallback(e) {
					let selectMap = new Map()
					ele.querySelectorAll(selector).forEach(function (el) {
						selectMap.set(el, true)
					})
					let target = e.target
					while (next(target)) {
						if (selectMap.has(target)) {
							return
						}
						target = target.parentElement
					}
					callback(e)
					ele.removeEventListener(event, bindCallback)
				})
			}
		}
	},


	jsonp(option) {
		let { url, data, jsonp, success } = option
		const callbackName = 'jsonpCallback' + ~~(Math.random() * 1000000)
		let script = document.createElement('script')
		script.src = url + '?' + this.serializeObject(data) + `&${jsonp}=${callbackName}`
		document.body.append(script)
		window[callbackName] = function (res) {
			document.body.removeChild(script)
			success(res)
		}
	},

	serializeObject(Obj) {
		let str = ''
		for (const key in Obj) {
			if (Obj.hasOwnProperty(key)) {
				str += `&${key}=${Obj[key]}`
			}
		}
		return str.substr(1)
	},

	getPageParam() {
		var urls = location.href.split("?");
		var paramUrl = urls.length > 1 && urls[1];
		var obj = {};
		if (paramUrl) {
			var params = paramUrl.split("&");
			if (params) {
				for (var i = 0; i < params.length; i++) {
					var param = params[i];
					var nameAndValue = param.split("=");
					if (nameAndValue.length == 2) {
						obj[nameAndValue[0]] = nameAndValue[1];
					}
				}
			}
		}

		return obj;
	}

}


