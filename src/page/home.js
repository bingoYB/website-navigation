define([
  'require',
  'text!template/item.tpl',
  'script/search',
  'text!template/searchResult.tpl'
], function (require, tpl, s, searchTpl) {
  'use strict';
  let searchUrl = {
    '百度': 'https://www.baidu.com/s?wd=',
    '必应': 'https://cn.bing.com/search?q=',
    'Google': 'https://www.google.com/search?q='
  };

  let searchRst = {
    type: '百度'
  }

  // 搜索引擎返回处理
  window.dealSearchReturn = (datas) => {
    console.log(datas)
    searchRst.engine = datas.s
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
          active.length ? active.removeClass('active'):''
          if (active.length && next.length) {
            if (!isVisible(next, rs)) {
              rs[0].scrollTop= next[0].offsetTop - 6*40 
            }
            next.addClass('active')
          } else {
            if (!isVisible(first, rs)) {
              rs[0].scrollTop= '0'
            }
            first.addClass('active')
          }
        }
        //按下上方向键
        else if (event.which == 38) {
          active.length ? active.removeClass('active') : ''
          if (active.length && prev.length) {
            if (!isVisible(prev, rs)) {
              rs[0].scrollTop= prev[0].offsetTop 
            }
            prev.addClass('active')
          } else {
            if (!isVisible(last, rs)) {
              rs[0].scrollTop= rs.height()
            }
            last.addClass('active')
          }
        }
      });

      $('#search').on('input', function (e) {
        let searchText = this.value

        if (searchText == '') {
          $('.search-result').hide()
          return
        }
        $('.search-result').show()

        searchRst.local = s.search(searchText)
        $.ajax({
          url: "//suggestion.baidu.com/su",
          type: "GET",
          dataType: "jsonp",
          jsonp: 'jsoncallback',
          async: false,
          timeout: 5000,//请求超时
          data: {
            "wd": searchText,
            "cb": "dealSearchReturn"
          },
          success: function (json) {

          },
          error: function (xhr) {
            return;
          }

        });
      })
    },
    searchEnter() {
      let active = $('.search-result li.active')
      if(active.length){
        active.click()
      }else{
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

      $('#container').on('click',function () { 
        $('.search-result').hide()
      })
    }
  }

  // 页面加载渲染
  let Render = {
    getOften() {
      $.getJSON('data/often.json',
        function (data, textStatus, jqXHR) {
          //预编译模板
          var template = Handlebars.compile(tpl)
          //匹配json内容
          let html = template(data)
          //输入模板
          $('.often').html(html)
        }
      );
    },
    getSearchRst() {

    }
  }

  return function () {
    Render.getOften()
    Interactive.searchEnter()
    Interactive.searchKeydown()
    Interactive.changeSearch()
    Interactive.rstClick()
  }
});