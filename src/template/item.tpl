<div class="block block-list">
  {{#each this}}
  <section class="section" data-title="{{title}}">
    <div class="title">
      {{!-- <div class="title-icon"><i class="iconfont {{icon}}"></i></div> --}}
      <h2 class="title-text">{{title}}</h2>
    </div>
    <div class="list">
      <div class="card-wrapper">
        <div class="pure-g">
          {{#each item}}
          <div class="pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-23-24 pure-u-1-2">
            <div class="card hint--bottom hint--bounce hint--medium" aria-label="{{desc}}">
              {{#if disabled}}
              <div class="diabled-item-badge">失效</div>
              {{/if}}
              <a href="{{url}}" rel="nofollow" target="_blank" class="card-default  {{#if disabled}}web-disabled{{/if}}">
                <div>
                  <img class="card-icon" alt="loading" data-src="{{icon}}" onerror="CONF.getWebsiteIcon(this)">
                  <div class="card-main">
                    <div class="card-name">
                      {{name}}
                    </div>
                    <div style="width:100%;">
                      <div class="card-des">{{desc}}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {{/each}}
        </div>
      </div>
    </div>
  </section>
  {{/each}}
</div>