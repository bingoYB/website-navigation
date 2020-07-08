define([
  'require',
  'text-loader!../template/item.tpl',
  '../script/search',
  'text-loader!../template/searchResult.tpl',
  '../script/lazyLoad',
  '../script/utils'
], function (require, tpl, s, searchTpl, lazyLoad,ut) {
  'use strict';
  let searchUrl = {
    '百度': 'https://www.baidu.com/s?wd=',
    '必应': 'https://cn.bing.com/search?q=',
    'Google': 'https://www.google.com/search?q='
  };
    
  const imgUrls = {
    '百度': 'img/scbaidu.png',
    '必应': 'img/scbing.png',
    'Google': 'img/scgoogle.png'
  }

  // 搜索类型（百度，谷歌，必应）
  let searchRst = {
    type: localStorage.getItem('searchType')||'百度'
  }

  $('.sChoiceBtn').css('background', 'url(' + imgUrls[searchRst.type] + ')')

  let suggestUrl = '//api.bing.com/qsonhs.aspx'


  // 搜索引擎返回处理
  window.dealSearchReturn = (datas) => {
    console.log(datas.AS.Results[0].Suggests)
    searchRst.engine = datas.AS.Results[0].Suggests
    Interactive.loadRst()
  }

  const isVisible = (el, parent) => {
    let sTop = parent.scrollTop()
    let offsetTop = el[0].offsetTop
    let elHeight = el.outerHeight();
    let pHeight = parent.height()
    if (sTop + pHeight > offsetTop + elHeight && sTop < offsetTop) {
      return true
    } else {
      return false
    }
  }
  // 页面交互事件
  let Interactive = {
    searchKeydown() {
      $('#search').on('keyup', function (e) {
        let rs = $('.search-result')
        let active = $('.search-result li.active')
        let next = active.next()
        let prev = active.prev()
        let first = $('.search-result li:first')
        let last = $('.search-result li:last')
        // 回车
        if (event.which == 13) {
          Interactive.searchEnter();
        }
        //按下下方向键
        else if (event.which == 40) {
          active.length ? active.removeClass('active') : ''
          if (active.length && next.length) {
            if (!isVisible(next, rs)) {
              rs[0].scrollTop = next[0].offsetTop - 6 * 40
            }
            next.addClass('active')
          } else {
            if (!isVisible(first, rs)) {
              rs[0].scrollTop = '0'
            }
            first.addClass('active')
          }
        }
        //按下上方向键
        else if (event.which == 38) {
          active.length ? active.removeClass('active') : ''
          if (active.length && prev.length) {
            if (!isVisible(prev, rs)) {
              rs[0].scrollTop = prev[0].offsetTop
            }
            prev.addClass('active')
          } else {
            if (!isVisible(last, rs)) {
              rs[0].scrollTop = rs.height()
            }
            last.addClass('active')
          }
        }
      });

      $('#search').on('input',ut.debunce(se))

      function se(e) {
        let searchText = this.value

        if (searchText == '') {
          $('.search-result').hide()
          return
        }
        $('.search-result').show()

        searchRst.local = s.search(searchText)

        // http://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug
        $.ajax({
          url: suggestUrl,
          type: "GET",
          dataType: "jsonp",
          jsonp: 'jsoncallback',
          async: false,
          timeout: 5000,//请求超时
          data: {
            type: 'cb',
            q: searchText,
            cb: 'dealSearchReturn'
            // "wd": searchText,
            // "cb": "dealSearchReturn"
          }
        });
      }
    },
    searchEnter() {
      let active = $('.search-result li.active')
      if (active.length) {
        active.click()
      } else {
        let url = searchUrl[searchRst.type] + $('#search').val()
        window.open(url, '_blank');
      }
    },
    changeSearch() {
      $('.sChoiceBtn').on('click', function (e) {
        $('.scBigBox').css({
          display: 'block',
          height: '160px'
        });
      });

      $('.scBigBox').on('click', '.scSmallBox', function (e) {
        let imgUrl = $(this).find('img')[0].src
        $('.sChoiceBtn').css('background', 'url(' + imgUrl + ')')
        $('.scBigBox').hide()
        searchRst.type = $(this).find('span').text()
        // 缓存此次选择结果，方便下次打开依旧此选项
        localStorage.setItem('searchType', searchRst.type);
      });
    },

    loadRst() {
      //预编译模板
      let template = Handlebars.compile(searchTpl)
      //匹配json内容
      let html = template(searchRst)
      //输入模板
      $('.search-result').html(html)
    },

    rstClick() {
      $('.search-result').on('click', 'li', function (e) {
        e.stopPropagation()
        let islocal = $(this).hasClass('local-data')
        let url = ''
        if (islocal) {
          url = $(this).find('.result-url').data('url')
        } else {
          url = searchUrl[searchRst.type] + $(this).find('.result-text span').text()
        }
        window.open(url, '_blank');
      })

      $('#container').on('click', function () {
        $('.search-result').hide()
      })
    },

    searchClick() {
      $('#searchBtn').on('click', function (e) {
        Interactive.searchEnter()
      })
    }
  }

  // 页面加载渲染
  let Render = {
    getOften() {
      let data = require('../data/often.json')
      //预编译模板
      var template = Handlebars.compile(tpl)
      //匹配json内容
      let html = template(data)
      //输入模板
      $('.often').html(html)

      new lazyLoad({
        content: window,
        imgs: $('.often')[0].querySelectorAll('img')
      })


      $('#header-title').find('h1').html('首页')
      $('#header-title').find('.iconfont').removeClass().addClass('iconfont icon-shouye')
    }
  }

  return function () {
    Render.getOften()
    Interactive.searchKeydown()
    Interactive.changeSearch()
    Interactive.rstClick()
    Interactive.searchClick()
  }
});