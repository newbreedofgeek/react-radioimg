import React, { Component, PropTypes } from 'react';

export default class RadioImg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.options
    };

    this.optionStyle = {
      marginRight: props.marginSpace + 'px',
      marginBottom: props.marginSpace + 'px'
    };

    this.value = props.defaultValue;

    this.click = this._click.bind(this);
  }

  _click(e) {
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

  render() {
    return (
      <div className="radio-img">
        {
          this.state.options.map((item, index) => {
            let optionLook = Object.assign({}, this.optionStyle);
            let clsToUse = (this.value == item.val) ? item.btnSelCls : item.btnCls;

            if (this.props.enableSelectionFill) {
              if (++index <= parseInt(this.value)) {
                clsToUse += ' ' + this.props.selectionFillCls
              }
            }

            if (item.img) {
              optionLook.backgroundImage = `url(${item.img})`
            }

            return <button
                      style={optionLook}
                      key={index}
                      className={clsToUse}
                      onClick={this.click}
                      data-val={item.val} >
                        {item.label}
                    </button>
              })
          }
      </div>
    );
  }
}

RadioImg.defaultProps = {
  marginSpace : 5,
  defaultValue: '',
  onChange: null,
  enableSelectionFill: false,
  selectionFillCls:''
};
