// const getIconApiUrl = 'https://api.webmasterapi.com/v1/favicon/ENwLmFQiEWTLBzbU/'
// const getIconApiUrl = 'https://api.clowntool.cn/getico/?url='
// const getIconApiUrl = 'https://api.qqsuu.cn/api/favicon/get.php?url='
// const getIconApiUrl = 'http://statics.dnspod.cn/proxy_favicon/_/favicon?domain='

import webData from "@/data";
import { getWebsiteIcon } from "@/utils/getWebsiteIcon";
import Image from "next/image";

export default function NavItem(props: {
  data: typeof webData.navData[number]["sub"];
}) {
  return (
    <div className='block block-list'>
      {props.data.map((el, index) => (
        <section
          className='section'
          data-title={el.title}
          key={index + el.title}
        >
          <div className='title'>
            {/* {{!-- <div className="title-icon"><i className="iconfont {{icon}}"></i></div> --}} */}
            <h2 className='title-text'>{el.title}</h2>
          </div>
          <div className='list'>
            <div className='card-wrapper'>
              <div className='pure-g'>
                {el.item.map((ii, iindex) => (
                  <div
                    key={iindex + ii.name}
                    className='pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-23-24 pure-u-1-2'
                  >
                    <div
                      className='card hint--bottom hint--bounce hint--medium'
                      aria-label={ii.desc}
                    >
                      {ii.disabled ? (
                        <div className='diabled-item-badge'>失效</div>
                      ) : (
                        ""
                      )}
                      <a
                        href={ii.url}
                        rel='nofollow'
                        target='_blank'
                        className={`card-default ${
                          ii.disabled ? "web-disabled" : ""
                        }`}
                      >
                        <div>
                          <Image
                            className='card-icon'
                            alt='loading'
                            src={getWebsiteIcon(ii.url)}
                            width={32}
                            height={32}
                          />
                          <div className='card-main'>
                            <div className='card-name'>{ii.name}</div>
                            <div style={{ width: "100%" }}>
                              <div className='card-des'>{ii.desc}</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
