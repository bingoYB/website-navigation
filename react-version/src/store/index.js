import { createStore } from 'redux';

const store = createStore(
    (state={
        title: '首页',
        icon: 'icon-shouye'
    }, action) => {
        switch (action.type) {
            case 'pageChange':{
                return action.state
            }
            default: return state
        }
    }
);

export default store;