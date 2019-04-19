'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['require', 'script/data'], function (require, data) {
  'use strict';

  var search = function () {
    function search(data, option) {
      _classCallCheck(this, search);

      this.option = option ? option : {};
      this.datainit(data);
    }

    _createClass(search, [{
      key: 'search',
      value: function search(v) {
        console.time('搜索时间:');
        var results = [];
        // 等同于使用map.entries()
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.queryArrayMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            if (value.match(v)) {
              results.push(key);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        console.timeEnd('搜索时间:');
        return results;
      }
    }, {
      key: 'datainit',
      value: function datainit(data) {
        var _this = this;

        var m = this.queryArrayMap = new Map();
        var sks = this.option.searchKeys;
        for (var key in data) {
          var el = data[key];
          for (var i = 0; i < el.length; i++) {
            var item = el[i].item;

            var _loop = function _loop(j) {
              var meta = item[j];
              var querystr = '';
              var sks = _this.option.searchKeys ? _this.option.searchKeys : Object.keys(meta);
              sks.forEach(function (k) {
                if (meta.hasOwnProperty(k)) querystr += " " + meta[k];
              });
              m.set(meta, querystr);
            };

            for (var j = 0; j < item.length; j++) {
              _loop(j);
            }
          }
        }
      }
    }]);

    return search;
  }();

  return new search(data);
});