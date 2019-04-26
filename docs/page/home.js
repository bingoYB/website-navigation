'use strict';

define(['require', 'text!template/item.tpl', 'script/search', 'text!template/searchResult.tpl', 'script/lazyLoad'], function (require, tpl, s, searchTpl, lazyLoad) {
  'use strict';

  var searchUrl = {
    '百度': 'https://www.baidu.com/s?wd=',
    '必应': 'https://cn.bing.com/search?q=',
    'Google': 'https://www.google.com/search?q='
  };

  var searchRst = {
    type: '百度'
  };

  var suggestUrl = '//api.bing.com/qsonhs.aspx';

  // 搜索引擎返回处理
  window.dealSearchReturn = function (datas) {
    console.log(datas.AS.Results[0].Suggests);
    searchRst.engine = datas.AS.Results[0].Suggests;
    Interactive.loadRst();
  };

  var isVisible = function isVisible(el, parent) {
    var sTop = parent.scrollTop();
    var offsetTop = el[0].offsetTop;
    var elHeight = el.outerHeight();
    var pHeight = parent.height();
    if (sTop + pHeight > offsetTop + elHeight && sTop < offsetTop) {
      return true;
    } else {
      return false;
    }
  };
  // 页面交互事件
  var Interactive = {
    searchKeydown: function searchKeydown() {
      $('#search').on('keyup', function (e) {
        var rs = $('.search-result');
        var active = $('.search-result li.active');
        var next = active.next();
        var prev = active.prev();
        var first = $('.search-result li:first');
        var last = $('.search-result li:last');
        // 回车
        if (event.which == 13) {
          Interactive.searchEnter();
        }
        //按下下方向键
        else if (event.which == 40) {
            active.length ? active.removeClass('active') : '';
            if (active.length && next.length) {
              if (!isVisible(next, rs)) {
                rs[0].scrollTop = next[0].offsetTop - 6 * 40;
              }
              next.addClass('active');
            } else {
              if (!isVisible(first, rs)) {
                rs[0].scrollTop = '0';
              }
              first.addClass('active');
            }
          }
          //按下上方向键
          else if (event.which == 38) {
              active.length ? active.removeClass('active') : '';
              if (active.length && prev.length) {
                if (!isVisible(prev, rs)) {
                  rs[0].scrollTop = prev[0].offsetTop;
                }
                prev.addClass('active');
              } else {
                if (!isVisible(last, rs)) {
                  rs[0].scrollTop = rs.height();
                }
                last.addClass('active');
              }
            }
      });

      $('#search').on('input', function (e) {
        var searchText = this.value;

        if (searchText == '') {
          $('.search-result').hide();
          return;
        }
        $('.search-result').show();

        searchRst.local = s.search(searchText);

        // http://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug
        $.ajax({
          url: suggestUrl,
          type: "GET",
          dataType: "jsonp",
          jsonp: 'jsoncallback',
          async: false,
          timeout: 5000, //请求超时
          data: {
            type: 'cb',
            q: searchText,
            cb: 'dealSearchReturn'
            // "wd": searchText,
            // "cb": "dealSearchReturn"
          },
          success: function success(json) {},
          error: function error(xhr) {
            return;
          }

        });
      });
    },
    searchEnter: function searchEnter() {
      var active = $('.search-result li.active');
      if (active.length) {
        active.click();
      } else {
        var url = searchUrl[searchRst.type] + $('#search').val();
        window.open(url, '_blank');
      }
    },
    changeSearch: function changeSearch() {
      $('.sChoiceBtn').on('click', function (e) {
        $('.scBigBox').css({
          display: 'block',
          height: '160px'
        });
      });

      $('.scBigBox').on('click', '.scSmallBox', function (e) {
        var imgUrl = $(this).find('img')[0].src;
        $('.sChoiceBtn').css('background', 'url(' + imgUrl + ')');
        $('.scBigBox').hide();
        searchRst.type = $(this).find('span').text();
      });
    },
    loadRst: function loadRst() {
      //预编译模板
      var template = Handlebars.compile(searchTpl);
      //匹配json内容
      var html = template(searchRst);
      //输入模板
      $('.search-result').html(html);
    },
    rstClick: function rstClick() {
      $('.search-result').on('click', 'li', function (e) {
        e.stopPropagation();
        var islocal = $(this).hasClass('local-data');
        var url = '';
        if (islocal) {
          url = $(this).find('.result-url').data('url');
        } else {
          url = searchUrl[searchRst.type] + $(this).find('.result-text span').text();
        }
        window.open(url, '_blank');
      });

      $('#container').on('click', function () {
        $('.search-result').hide();
      });
    }
  };

  // 页面加载渲染
  var Render = {
    getOften: function getOften() {
      $.getJSON('data/often.json', function (data, textStatus, jqXHR) {
        //预编译模板
        var template = Handlebars.compile(tpl);
        //匹配json内容
        var html = template(data);
        //输入模板
        $('.often').html(html);

        new lazyLoad({
          content: window,
          imgs: $('.often')[0].querySelectorAll('img')
        });
      });
    },
    getSearchRst: function getSearchRst() {}
  };

  return function () {
    Render.getOften();
    Interactive.searchKeydown();
    Interactive.changeSearch();
    Interactive.rstClick();
  };
});