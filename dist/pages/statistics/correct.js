'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatisticsCorrect = function (_wepy$page) {
  _inherits(StatisticsCorrect, _wepy$page);

  function StatisticsCorrect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatisticsCorrect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatisticsCorrect.__proto__ || Object.getPrototypeOf(StatisticsCorrect)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      result: [],
      name: ''

      // 获取文案内容
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatisticsCorrect, [{
    key: '_getContent',
    value: function _getContent(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/textbook/statistics/correct',
          data: {
            chapterId: id
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                _context.next = 3;
                return this._getContent(options.id);

              case 3:
                this.result = _context.sent;

                this.name = _wepy2.default.getStorageSync('gnb_middle_User').name;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()

    /** 分享全局 */

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return {
        title: '各位家长：这样记错题，速度快、好处多',
        path: '/pages/statistics/share?content=' + this.result.content + '&date=' + this.result.date + '&name=' + this.name
      };
    }
  }]);

  return StatisticsCorrect;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsCorrect , 'pages/statistics/correct'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3QuanMiXSwibmFtZXMiOlsiU3RhdGlzdGljc0NvcnJlY3QiLCJkYXRhIiwicmVzdWx0IiwibmFtZSIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIl9nZXRDb250ZW50IiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJwYXRoIiwiY29udGVudCIsImRhdGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7Ozs0TUFDbkJDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsWUFBTTs7QUFHUjtBQUxPLEs7Ozs7O2dDQU1NQyxFLEVBQUk7QUFDZixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDJEQURNO0FBRVhSLGdCQUFNO0FBQ0pTLHVCQUFXTjtBQURQLFdBRks7QUFLWE8saUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTixvQkFBUU0sR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7MkZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRWixJQUFoQixFQUF6Qjs7dUJBQ29CLEtBQUtnQixXQUFMLENBQWlCSixRQUFRWCxFQUF6QixDOzs7QUFBcEIscUJBQUtGLE07O0FBQ0wscUJBQUtDLElBQUwsR0FBWSxlQUFLaUIsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNqQixJQUFuRDtBQUNBLHFCQUFLa0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRjs7OztzQ0FDbUJULEcsRUFBSztBQUN0QixhQUFPO0FBQ0xNLGVBQU8sb0JBREY7QUFFTEksbURBQXlDLEtBQUtwQixNQUFMLENBQVlxQixPQUFyRCxjQUFxRSxLQUFLckIsTUFBTCxDQUFZc0IsSUFBakYsY0FBOEYsS0FBS3JCO0FBRjlGLE9BQVA7QUFJRDs7OztFQXJDNEMsZUFBS3NCLEk7O2tCQUEvQnpCLGlCIiwiZmlsZSI6ImNvcnJlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzQ29ycmVjdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHJlc3VsdDogW10sXG4gICAgICBuYW1lOiAnJ1xuICAgIH1cblxuICAgIC8vIOiOt+WPluaWh+ahiOWGheWuuVxuICAgIF9nZXRDb250ZW50IChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi90ZXh0Ym9vay9zdGF0aXN0aWNzL2NvcnJlY3QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAgIHRoaXMucmVzdWx0ID0gYXdhaXQgdGhpcy5fZ2V0Q29udGVudChvcHRpb25zLmlkKVxuICAgICAgdGhpcy5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykubmFtZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIC8qKiDliIbkuqvlhajlsYAgKi9cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICAgIHBhdGg6IGAvcGFnZXMvc3RhdGlzdGljcy9zaGFyZT9jb250ZW50PSR7dGhpcy5yZXN1bHQuY29udGVudH0mZGF0ZT0ke3RoaXMucmVzdWx0LmRhdGV9Jm5hbWU9JHt0aGlzLm5hbWV9YFxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19