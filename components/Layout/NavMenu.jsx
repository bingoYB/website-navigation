import MenuItem from './MenuItem'
import { useAppStore } from '@/state/app'

export default function NavMenu() {
	const memuExpand = useAppStore(s=>s.menuExpand);

	function closeMenu(){
		useAppStore.setState({menuExpand: false})
	}

	return <aside className={`${memuExpand ? 'active' : ''}`}>
		<div className="side"><a href="#" className="logo-link"><i className="iconfont icon-logo-slogan"></i></a>
			<div className="logo"><i className="iconfont icon-logo-slogan"></i></div>
			<div id="menu" className={`menu`}>
				<MenuItem></MenuItem>
			</div>
			<div className="btn-side-close"><i className="iconfont icon-menu-close"></i></div>
			<div className="btn-lang-side"><i className="iconfont icon-lang" style={{ fontSize: '28px', color: '#aaa' }}></i></div>
		</div>
		<div className="side-mask" onClick={closeMenu}></div>
	</aside>
}

