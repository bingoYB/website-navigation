import data from '../../data/data'
import store from '../../store'
const { useState } = React

let navData = data.navData


export default function (props) {

  const [active, setActive] = useState(0)
  const [subActive, setSubActive] = useState(0)

  function menuClick(index) {
    setActive(index)
    const { title, icon } = navData[index]
    store.dispatch({
      type: 'pageChange',
      state: {
        title,
        icon
      }
    })
  }

  return navData.map((data, index) =>
    <div id={`menu-item-${data.id}`} className={`item ${active === index && 'active'}`} onClick={() => menuClick(index)} key={data.title}>
      <a href={data.hashUrl} className="item-text zh">
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
                <div className="nonius" style={{ top: '0px' }}></div>
              </div>
              {data.sub.map(el =>
                <div className="sub-item" key={el.title}>
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
