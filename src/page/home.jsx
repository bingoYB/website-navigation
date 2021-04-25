import util from '../util';
import LocalSearch from '../wget/search'
import NavItem from '../wget/navItem'
import homeData from '../data/often.json'
const { useState, useEffect } = React


const searchEngine = [
	{
		name: '百度', icon: 'img/scbaidu.png',
		searchUrl: 'https://www.baidu.com/s?wd='
	},
	{
		name: '必应', icon: 'img/scbing.png',
		searchUrl: 'https://cn.bing.com/search?q='
	},
	{
		name: 'Google', icon: 'img/scgoogle.png',
		searchUrl: 'https://www.google.com/search?q='
	}
]
// 关键词联想地址
const suggestUrl = '//api.bing.com/qsonhs.aspx'
// 百度
//sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=%E6%B5%8B%E8%AF%95&json=1

export default function () {
	// 输入框搜索结果
	const [searchRst, setSearchRst] = useState({
		txt: [],
		local: [],
		engine: []
	})

	//搜索引擎选择的下拉框显示
	const [sChoiceVis, setSChoiceVis] = useState(false)

	// 目前选取的搜索引擎
	const [currentEngine, setCurrentEngine] = useState(
		searchEngine.find(el => {
			return (localStorage.getItem('searchType') || '百度') === el.name
		})
	)

	let [activeRst, setActiveRst] = useState({
		index: 0,
		type: 'local'
	})
	const [searchState, setSearchState] = useState(false)

	// const [sChoiceVis, setSChoiceVis] = useState(false)
	function sChoiceBtnClick() {
		setSChoiceVis(true)
	}

	function selectSearchEngine(engine) {
		setCurrentEngine(engine)
		localStorage.setItem('searchType', engine.name);
	}

	// util.EA(document).onOtherOnce('click', '#sChoiceBtn', () => {
	// 	// let box = document.getElementsByClassName('scBigBox')[0]
	// 	// box.style['display'] = 'none'
	// 	// box.style.height = '0'
	// 	// 设置选项不可见
	// 	setSChoiceVis(false)
	// 	// TODO:虽然在执行后移除了这个事件，但是还是会存在执行多次的情况
	// })
	// 使用blur事件替代
	// util.EA(document).onOtherOnce('click', '.search-result,.search-input', () => {
	// 	// 设置搜索下拉不可见
	// 	setSearchState(false)
	// })

	function search(e) {
		let searchText = document.getElementById('search').value

		activeRst = {
			index: 0,
			type: 'txt'
		}

		if (searchText === '') {
			setSearchState(false)
			return
		}

		// http://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug
		util.jsonp({
			url: suggestUrl,
			jsonp: 'cb',
			data: {
				type: 'cb',
				q: searchText,
				// cb: 'dealSearchReturn'
				// "wd": searchText,
				// "cb": "dealSearchReturn"
			},
			success(datas) {
				let local = LocalSearch.search(searchText)
				if (datas.AS.FullResults) {
					setSearchRst({
						txt: [],
						engine: datas.AS.Results[0].Suggests,
						local
					})
					setSearchState(true)
				} else {
					setSearchRst({
						txt: [],
						engine: [],
						local
					})
					setSearchState(true)
				}
				setActiveRst({
					index: 0,
					type: 'txt'
				})
			}
		});
	}

	function onKeyUp(event) {
		let { type, index } = activeRst

		if (event.which == 13) {
			if (type === 'local') {
				var url = searchRst[type][index].url
			} else {
				if (type != 'txt' && searchRst[type].length) {
					var url = currentEngine.searchUrl + searchRst[type][index].Txt
				} else {
					var url = currentEngine.searchUrl + document.getElementById('search').value
				}
			}

			window.open(url, '_blank')

			return
		}
		//按下下方向键
		else if (event.which == 40) {

			if (type !== 'txt' && index <= searchRst[type].length - 1) {
				index++
			} else {
				type = nextType(type)
				index = 0
			}
		}
		//按下上方向键
		else if (event.which == 38) {
			if (index === 0) {
				type = nextType(type, true)
				index = searchRst[type].length
			} else {
				index--
			}
		}

		setActiveRst({
			index,
			type
		})
	}
	// 下一个类型
	function nextType(type, prevFlag) {
		const typeMap = ['txt', 'local', 'engine']
		let i = typeMap.findIndex(el => el === type)
		while (true) {
			if (prevFlag) {
				i = i === 0 ? 2 : (i - 1)
			} else {
				i = (i + 1) % 3
			}
			// 下一个类型
			let next = typeMap[i]
			if (next === 'txt') return next
			if (searchRst[next].length) return next
		}
	}

	// 应用图片懒加载
	useEffect(() => {
		util.lazyLoad({
			content: window,
			imgs: document.getElementsByClassName('often')[0].querySelectorAll('img')
		})
	}, [])

  // mousedown ->（other）blur -> mouseup -> click
	function searchClick() {
		var url = currentEngine.searchUrl + document.getElementById('search').value

		window.open(url, '_blank')
	}

	return <div>
		<div className="search inputing">
			<div style={{ overflow: 'hidden' }}>
				<div className="search-pre">
					<div id="sChoiceBtn" onBlur={()=>{setSChoiceVis(false)}} style={{ background: `url(${currentEngine.icon})` }} title="切换搜索引擎" className="sChoiceBtn" onClick={sChoiceBtnClick} tabIndex='1'></div>
				</div>
				<div className="search-input">
					<input type="text" onBlur={()=>{setTimeout(()=>setSearchState(false),500)}} onFocus={() => setSearchState(true)} onInput={util.debounce(search, 500)} onKeyUp={onKeyUp} lang="zh-CN" placeholder="搜索" name="https://www.baidu.com/s?wd="
						id="search" autoComplete="off" className="textb"></input>
				</div>
				<div className="search-post btn-search" id="searchBtn" onClick={searchClick}></div>
			</div>
			<div className="scBigBox" style={{ height: sChoiceVis ? '160px' : '0', display: sChoiceVis ? 'block' : 'none' }}>
				{searchEngine.map(s =>
					<div className="scSmallBox" key={s.name} onClick={() => {
						selectSearchEngine(s)
					}}><img src={s.icon} className="scImg"></img>
						<span className="scName">{s.name}</span>
					</div>
				)}
			</div>
			<div className="search-result" style={{ display: searchState ? 'block' : 'none' }}>
				<ul>
					<li className="" style={{ display: (searchRst.local.length || searchRst.engine.length) ? 'none' : 'flex' }}>
						<div className="result-icon">
							<i className="engine-icon" style={{ backgroundImage: 'url(img/searchBtn.png?v=2.0' }}></i>
						</div>
						<div className="result-text">
							<span>无搜索结果</span>
						</div>
					</li>
					{searchRst.local.map((el, i) =>
						<li className={`local-data ${(activeRst.type === 'local' && activeRst.index === i)
							? 'active' : ''}`}
							key={i + 'local'} onClick={() => { window.open(el.url, '_blank') }}>
							<div className="result-icon">
								<i style={{ backgroundImage: `url(https://ico.mikelin.cn/${el.url}),url(img/404-1.png)` }}></i>
							</div>
							<div className="result-text">
								<span>{el.name}</span>
								<span className="desc">- {el.desc}</span>
							</div>
							<div className="result-url" data-url={el.url}>
								- {el.url}
							</div>
						</li>
					)}
					{searchRst.engine.map((el, i) =>
						<li className={`${(activeRst.type === 'engine' && activeRst.index === i)
							? 'active' : ''}`}
							key={i + 'engine'} onClick={() => { window.open(currentEngine.searchUrl + el.Txt, '_blank') }}>
							<div className="result-icon">
								<i className="engine-icon" style={{ backgroundImage: 'url(img/searchBtn.png?v=2.0' }}></i>
							</div>
							<div className="result-text">
								<span>{el.Txt}</span>
							</div>
							<div className="result-type">
								- {currentEngine.name + '搜索'}
							</div>
						</li>
					)}
				</ul>
			</div>
		</div>
		<div className="often">
			<NavItem data={homeData}></NavItem>
		</div>
	</div>
}