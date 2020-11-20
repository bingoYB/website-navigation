
import store, { menuStore } from '../../store'
export default function Top() {

	function changeMenuActive() { 
		menuStore.dispatch({type: 'open'})
	}
	return <div className="top">
		<div className="nav">
			<div className="btn-menu" onClick={changeMenuActive}><i className="iconfont icon-xuexi"></i></div>
			<div className="nav-logo"><i className="iconfont icon-logo"></i></div>
			<div className="btn-account"><i className="iconfont icon-user"></i>
			</div>
		</div>
	</div>
}