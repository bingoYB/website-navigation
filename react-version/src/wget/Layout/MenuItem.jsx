
import data from '../../data/data'
const { useState } = React

let navData = data.navData

export default function () {
	return navData.map(data =>
		<div id={`menu-item-${data.id}`} className="item" key={data.title}>
			<a href={data.hashUrl} className="item-text zh">
				<span className="item-icon">
					<i className={`iconfont ${data.icon}`}></i>
				</span>
				<span>{data.title}</span>
			</a>
			{
				(data.sub && data.sub.length)? "":
				<div className="item-subs">
					<div className="item-subs-wrapper">
						<div className="positioner">
							<div className="nonius" style={{top:'0px'}}></div>
						</div>
						{data.sub.map(el =>
							<div className="sub-item" key={el.title}>
								<div className="sub-item-text">{el.title}</div>
							</div>
						)}
					</div>
				</div>
			}
		</div>
	)
}
