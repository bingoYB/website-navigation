import util from '../util';
import LocalSearch from '../wget/search'
const { useState } = React


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

// // 搜索类型（百度，谷歌，必应）
// let searchRst = {
// 	type: localStorage.getItem('searchType') || '百度'
// }


export default function () {
	// 输入框搜索结果
	const [searchRst, setSearchRst] = useState({
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

	const [activeRst, setActiveRst] = useState(false)
	const [searchState, setSearchState] = useState(false)

	// const [sChoiceVis, setSChoiceVis] = useState(false)
	function sChoiceBtnClick() {
		setSChoiceVis(true)
	}

	function selectSearchEngine(engine) {
		setCurrentEngine(engine)
	}

	util.EA(document).onOtherOnce('click', '#sChoiceBtn', () => {
		// let box = document.getElementsByClassName('scBigBox')[0]
		// box.style['display'] = 'none'
		// box.style.height = '0'
		setSChoiceVis(false)
		// TODO:虽然在执行后移除了这个事件，但是还是会存在执行多次的情况
	})

	function onInput(e) {
		util.debounce(search, 100)(e)
	}

	function search(e) {
		let searchText = document.getElementById('search').value

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
				if (datas.AS.FullResults) {
					setSearchRst({
						engine: datas.AS.Results[0].Suggests,
						local: LocalSearch.search(searchText)
					})
					setSearchState(true)
				}else{
					setSearchRst({
						engine: [],
						local: LocalSearch.search(searchText)
					})
					setSearchState(true)
				}
			}
		});
	}

	function onKeyUp(event) {
		if (event.which == 13) {
			Interactive.searchEnter();
		}
		//按下下方向键
		else if (event.which == 40) {

		}
		//按下上方向键
		else if (event.which == 38) {

		}
	}

	function searchRstClick() {

	}

	return <div>
		<div className="search inputing">
			<div style={{ overflow: 'hidden' }}>
				<div className="search-pre">
					<div id="sChoiceBtn" style={{ background: `url(${currentEngine.icon})` }} title="切换搜索引擎" className="sChoiceBtn" onClick={sChoiceBtnClick}></div>
				</div>
				<div className="search-input">
					<input type="text" onInput={onInput} onKeyUp={onKeyUp} lang="zh-CN" placeholder="搜索" name="https://www.baidu.com/s?wd="
						id="search" autoComplete="off" className="textb"></input>
				</div>
				<div className="search-post btn-search" id="searchBtn"></div>
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
					{searchRst.local.map((el, i) =>
						<li className="local-data" key={i + 'local'}>
							<div className="result-icon">
								<i style={{ backgroundImage: `url(${el.icon}),url(img/404-1.png)` }}></i>
							</div>
							<div className="result-text">
								<span>{el.name}</span>
								<span className="desc">- {el.desc}</span>
							</div>
							<div className="result-url" data-url={url}>
								- {el.url}
							</div>
						</li>
					)}
					{searchRst.engine.map((el, i) =>
						<li className="local-data" key={i + 'engine'}>
							<div className="result-icon">
								<i className="engine-icon" style={{ backgroundImage: 'url(img/searchBtn.png?v=2.0' }}></i>
							</div>
							<div className="result-text">
								<span>{el.Txt}</span>
							</div>
							<div className="result-type" data-url={url}>
								- {currentEngine.name + '搜索'}
							</div>
						</li>
					)}
				</ul>
			</div>
		</div>
		<div className="often">

		</div>
	</div>
}