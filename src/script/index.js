define([
  'require',
  'script/router',
  'script/menu',
  'script/local',
  'script/data'
], function (require, Router, menu, localFun, data) {
  'use strict';
  // 添加个方法
  $.fn.serializeObject = function () {
    var ct = this.serializeArray();
    var obj = {};
    $.each(ct, function () {
      if (obj[this.name] !== undefined) {
        if (!obj[this.name].push) {
          obj[this.name] = [obj[this.name]];
        }
        obj[this.name].push(this.value || "");
      } else {
        obj[this.name] = this.value || "";
      }
    });
    return obj;
  }

  let bro = CONF.browseVersion()
  if (bro.ie && bro.ie < 11) {
    alert('请使用其他浏览器打开或者更高版本的IE浏览器打开。建议使用Chrome浏览器')
  }

  menu();
  Router.init()

  $('#setting').click(function (e) {
    $('.setting').toggleClass('closed')
  })

  $('#saveLocal').click(() => {
    let local = localFun.getLocal()
    console.log(local)
    let addLocal = $("#addForm").serializeObject()
    let subType = addLocal.subType
    let type = addLocal.type
    if (!local[type]) {
      local[type] = {}
      local[type][subType] = []
    } else if (!local[type][subType]) {
      local[type][subType] = []
    }
    local[type][subType].push(addLocal)
    localFun.setLocal(JSON.stringify(local))
  })

  let {typeList,subTypeList} = data
  let string = ''
  for (let i = 0; i < typeList.length; i++) {
    const item = typeList[i];
    string += `<option>${item}</option>`
  }

  $('#type').html(string)
    $('#type').change(e=>{
      let type = $('#type').val()
      let subType = subTypeList[type]
      let string = ''
      for (let i = 0; i < subType.length; i++) {
        const item = subType[i];
        string += `<option>${item}</option>`
      }
      $('#subtype').html(string)
    })
    $('#type').change()

  // ToolTip.init({
  //   delay: 200,
  //   fadeDuration: 250,
  //   fontSize: '12PX',
  //   // theme: 'light',
  //   // textColor: '#757575',
  //   // shadowColor: '#000',
  //   // fontFamily: "'Roboto-Medium', 'Roboto-Regular', Arial"
  // });
});