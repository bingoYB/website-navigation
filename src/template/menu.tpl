{{#each this}}
<div id="menu-item-{{id}}" class="item">
  <a href="{{hashUrl}}" class="item-text zh">
    <span class="item-icon">
      <i class="iconfont {{icon}}"></i>
    </span>
    <span>{{title}}</span>
  </a>
  {{#if sub}}
  <div class="item-subs">
    <div class="item-subs-wrapper">
      <div class="positioner">
        <div class="nonius" style="top:0px;"></div>
      </div>
      {{#each sub}}
      <div class="sub-item">
        <div class="sub-item-text">{{title}}</div>
      </div>
      {{/each}}
    </div>
  </div>
  {{/if}}
</div>
{{/each}}