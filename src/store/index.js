import { createStore } from 'redux';
import data from '../data/data'

function getCurrentPage() {
	let pageNum = window.location.hash.substr(-1)
	return pageNum && pageNum !== '/' ? pageNum : 0
}

let {title,icon} = data.navData[getCurrentPage()]
const defaultState = {
	active:getCurrentPage(),
	title,icon
}

const store = createStore(
	(state = defaultState, action) => {
        switch (action.type) {
            case 'pageChange': {
                return action.state
            }
            default: return state
        }
    }
);

function isMobile() {
   return document.body.clientWidth <= 613
}

export default store;

export const menuStore = createStore(
	(state = false, action) => {
		switch (action.type) {
			case 'toogle': {
				return !state
			}
			case 'open': {
				return true
			}
			case 'close': {
				return false
			}
			default: return state
		}
	}
)