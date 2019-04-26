<ul>
  {{#each local}}
  <li class="local-data">
    <div class="result-icon">
      <i style="background-image: url({{icon}}),url(img/404-1.png);"></i>
    </div>
    <div class="result-text">
      <span>{{name}}</span>
      <span class="desc">- {{desc}}</span>
    </div>

    <div class="result-url" data-url="{{url}}">
      - {{url}}
    </div>
  </li>
  {{/each}}
  {{#each engine}}
  <li>
    <div class="result-icon">
      <i class="engine-icon" style="background-image: url(img/searchBtn.png?v=2.0);"></i>
    </div>
    <div class="result-text">
      <span>{{Txt}}</span>
    </div>
    <div class="result-type">
      - {{../type}}搜索
    </div>
  </li>
  {{/each}}
</ul>