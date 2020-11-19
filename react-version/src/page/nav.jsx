import data from '../data/data';
import NavItem from '../wget/navItem'
import util from '../util'
import store from '../store'
const { useState, useEffect } = React



export default function () {
	const[key, setKey] = useState(util.getPageParam().class)
	useEffect(() => {
		util.lazyLoad({
			content: window,
			imgs: document.getElementsByClassName('my-nav')[0].querySelectorAll('img')
		})
	})

	store.subscribe(()=>{
		if(util.getPageParam().class){
			setKey(util.getPageParam().class)
		}
	})
	
	return <div className="my-nav">
		<NavItem data={data.navData[key].sub}></NavItem>
	</div>
}