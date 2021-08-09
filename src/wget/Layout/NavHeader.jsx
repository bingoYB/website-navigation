import store, { menuStore } from '../../store'

const { useState } = React;
export default function NavHeader() {
  const [page, setPage] = useState(store.getState());
  console.log(store.getState());
  store.subscribe(() => {
    setPage(store.getState());
  });

  function changeMenuActive() { 
		menuStore.dispatch({type: 'open'})
	}

  return (
    <div className="header">
      <div className="header-title" id="header-title" onClick={changeMenuActive}>
        <div className="header-title-icon">
          <i className={`iconfont ${page.icon}`}></i>
        </div>
        <h1 className="header-title-text zh">{page.title}</h1>
      </div>
      <div className="header-logo">
        <i className="iconfont icon-logo"></i>
      </div>
      <div className="header-right">
        <a
          className="hint--bottom hint--bounce hint--small"
          aria-label="学习博客"
          href="https://bingoyb.github.io/learn-blog/dist"
          target="_blank"
        >
          <i className="iconfont icon-blog"></i>
        </a>
        <a
          className="hint--bottom hint--bounce hint--small"
          aria-label="项目Git地址"
          href="https://github.com/bingoYB/website-navigation"
          target="_blank"
        >
          <i className="iconfont icon-github"></i>
        </a>
      </div>
    </div>
  );
}
