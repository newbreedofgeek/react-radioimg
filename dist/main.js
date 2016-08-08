'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioImg = function (_Component) {
  _inherits(RadioImg, _Component);

  function RadioImg(props) {
    _classCallCheck(this, RadioImg);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioImg).call(this, props));

    _this.state = {
      options: props.options
    };

    _this.optionStyle = {
      marginRight: props.marginSpace + 'px',
      marginBottom: props.marginSpace + 'px'
    };

    _this.value = props.defaultValue;

    _this.click = _this._click.bind(_this);
    return _this;
  }

  _createClass(RadioImg, [{
    key: '_click',
    value: function _click(e) {
      e.preventDefault();

      if (this.value != e.target.dataset.val) {
        this.value = e.target.dataset.val;

        if (this.props.onChange) {
          this.props.onChange({
            target: {
              value: this.value
            }
          });
        }

        this.forceUpdate();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'radio-img' },
        this.state.options.map(function (item, index) {
          var optionLook = Object.assign({}, _this2.optionStyle);
          var clsToUse = _this2.value == item.val ? item.btnSelCls : item.btnCls;

          if (item.img) {
            optionLook.backgroundImage = 'url(' + item.img + ')';
          }

          return _react2.default.createElement(
            'button',
            {
              style: optionLook,
              key: index,
              className: clsToUse,
              onClick: _this2.click,
              'data-val': item.val },
            item.label
          );
        })
      );
    }
  }]);

  return RadioImg;
}(_react.Component);

exports.default = RadioImg;


RadioImg.defaultProps = {
  marginSpace: 5,
  defaultValue: '',
  onChange: null
};