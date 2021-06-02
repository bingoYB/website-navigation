import store from '../../store'
const { useState } = React
export default function NavHeader() {

  const [page, setPage] = useState(store.getState())
  console.log(store.getState())
  store.subscribe(() => {
    setPage(store.getState())
  })

  return <div id="header">
    <div className="header">
      <div className="row">
        <div className="header-title" id="header-title">
          <div className="header-title-icon"><i className={`iconfont ${page.icon}`}></i></div>
          <h1 className="header-title-text zh">{page.title}</h1>
        </div>
        <div className="header-right">
          <a className="hint--bottom hint--bounce hint--small" aria-label="学习博客" href="https://bingoyb.github.io/learn-blog/dist">
            <i className="iconfont icon-blog"></i>
          </a>
          <a className="hint--bottom hint--bounce hint--small" aria-label="项目Git地址" href="https://github.com/bingoYB/website-navigation" target="_blank">
            <i className="iconfont icon-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
}