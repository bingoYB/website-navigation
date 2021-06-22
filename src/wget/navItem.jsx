const getIconApiUrl = 'https://api.webmasterapi.com/v1/favicon/ENwLmFQiEWTLBzbU/'

function getWebsiteIcon(img,url) {
	if (img.src.indexOf(getIconApiUrl) >= 0) {
		img.src = 'img/404-1.png'
	} else {
		img.src = getIconApiUrl + url
	}
}
export default function (props) {
	return <div className="block block-list">
		{props.data.map((el,index) =>
			<section className="section" data-title={el.title} key={index+el.title}>
				<div className="title">
					{/* {{!-- <div className="title-icon"><i className="iconfont {{icon}}"></i></div> --}} */}
					<h2 className="title-text">{el.title}</h2>
				</div>
				<div className="list">
					<div className="card-wrapper">
						<div className="pure-g">
							{el.item.map((ii,iindex) =>
								<div key={iindex+ii.name} className="pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-23-24 pure-u-1-2">
									<div className="card hint--bottom hint--bounce hint--medium" aria-label={ii.desc}>
										{ii.disabled ? <div className="diabled-item-badge">失效</div> : ''}
										<a href={ii.url} rel="nofollow" target="_blank" className={`card-default ${ii.disabled ? 'web-disabled' : ''}`}>
											<div>
												<img className="card-icon" alt="loading" data-url={ii.url} data-src={getIconApiUrl+ii.url} onError={(e) => getWebsiteIcon(e.target,ii.url)} />
												<div className="card-main">
													<div className="card-name">
														{ii.name}
													</div>
													<div style={{width:'100%'}}>
														<div className="card-des">{ii.desc}</div>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		)}
	</div>
}