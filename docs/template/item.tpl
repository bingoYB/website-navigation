<div class="block block-list">
  {{#each this}}
  <section class="section" data-title="{{title}}">
    <div class="title">
      <div class="title-icon"><i class="iconfont {{icon}}"></i></div>
      <h2 class="title-text">{{title}}</h2>
    </div>
    <div class="list">
      <div class="card-wrapper">
        {{#each item}}
        <div class="card">
          <a href="{{url}}" rel="nofollow" target="_blank" class="card-default">
            <div>
              <img class="card-icon" alt="loading" data-src="{{icon}}" onerror="this.src='img/404-1.png'">
              {{!-- <div class="bg-img round card-icon" style="background-image: url(&quot;&quot;);"></div> --}}
              <div class="card-main">
                <div class="card-name">
                  {{name}}
                </div>
                <div style="width:100%;" class="hint--bottom hint--bounce" aria-label="{{desc}}">
                  <div class="card-des">{{desc}}</div>
                </div>
              </div>
            </div>
            <!-- <div class="card-count">
              <div class="like">
                <div class="btn-like count-symbol"><i class="iconfont icon-seed-filled"></i></div><span
                  class="count-num">2188</span>
              </div>
              <div class="view">
                <div class="count-symbol"><i class="iconfont icon-eye"></i></div>
                <div class="count-num">161941</div>
              </div>
            </div> -->
          </a>
        </div>
        {{/each}}
      </div>
    </div>
  </section>
  {{/each}}
</div>