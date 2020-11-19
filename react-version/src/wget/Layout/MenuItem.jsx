import data from '../../data/data'
import store from '../../store'
const { useState } = React

let navData = data.navData


export default function (props) {

  const [active, setActive] = useState(0)
  const [subActive, setSubActive] = useState(0)

  function menuClick(index, e) {
    setActive(index)
    setSubActive(0)
    const { title, icon } = navData[index]
    window.location.hash = navData[index].hashUrl
    window.scrollTo(0,0)
    store.dispatch({
      type: 'pageChange',
      state: {
        title,
        icon
      }
    })
    e.preventDefault()
  }

  function subItemClick(index, title) {
    setSubActive(index)
    let scrollTop = document.querySelector('[data-title="' + title + '"').offsetTop
    window.scrollTo(0,scrollTop)
  }

  return navData.map((data, index) =>
    <div id={`menu-item-${data.id}`} className={`item ${active === index && 'active'}`} key={index}>
      <a href={data.hashUrl} className="item-text zh" onClick={(e) => menuClick(index, e)} key={data.title}>
        <span className="item-icon">
          <i className={`iconfont ${data.icon}`}></i>
        </span>
        <span>{data.title}</span>
      </a>
      {
        (data.sub && data.sub.length) ?
          <div className="item-subs">
            <div className="item-subs-wrapper">
              <div className="positioner">
                <div className="nonius" style={{ top: `${subActive * 40}px` }}></div>
              </div>
              {data.sub.map((el, ii) =>
                <div className={`sub-item ${subActive === ii ? 'active' : ''}`} key={el.title}
                  onClick={(e) => subItemClick(ii, el.title)}>
                  <div className="sub-item-text">{el.title}</div>
                </div>
              )}
            </div>
          </div>
          : ''
      }
    </div>
  )
}
