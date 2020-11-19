import { createStore } from 'redux';

const store = createStore(
    (state = {
        title: '首页',
        icon: 'icon-shouye'
    }, action) => {
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