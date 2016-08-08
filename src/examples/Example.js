'use strict';

import React, { Component, PropTypes } from 'react';
import RadioImg from '../main'

let moodImgs = [
  require('./img/mood-06.png'),
  require('./img/mood-05.png'),
  require('./img/mood-04.png'),
  require('./img/mood-03.png'),
  require('./img/mood-02.png'),
  require('./img/mood-01.png'),
]

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areYouHappy: 'no'
    };
  }

  render() {
    const yesNoOptions = [
      {
        btnCls: 'btn btn-lg btn-default',
        btnSelCls: 'btn btn-lg btn-primary sel',
        val: 'no',
        label: 'No'
      },
      {
        btnCls: 'btn btn-lg btn-default',
        btnSelCls: 'btn btn-lg btn-primary sel',
        val: 'yes',
        label: 'Yes'
      }
    ]

    let pnCls = 'radio-img-options',
        pnClsSel = pnCls + ' sel';

    const painRatingOptions = [
      {
        btnCls: pnCls,
        btnSelCls: pnClsSel,
        val: '1',
        label: '1',
        img: moodImgs[0]
      },
      {
        btnCls: pnCls,
        btnSelCls: pnClsSel,
        val: '2',
        label: '2',
        img: moodImgs[1]
      },
      {
        btnCls: pnCls,
        btnSelCls: pnClsSel,
        val: '3',
        label: '3',
        img: moodImgs[2]
      },
      {
        btnCls: pnCls,
        btnSelCls: pnClsSel,
        val: '4',
        label: '4',
        img: moodImgs[3]
      },
      {
        btnCls: pnCls,
        btnSelCls: pnClsSel,
        val: '5',
        label: '5',
        img: moodImgs[4]
      },
      {
        btnCls: pnCls,
        btnSelCls: pnClsSel,
        val: '6',
        label: '6',
        img: moodImgs[5]
      }
    ]

    let showHowHappyCls = 'form-group';

    if (this.state.areYouHappy == 'no') {
        showHowHappyCls += ' hidden';
    }

    return (
      <div className='example'>
        <div className='radio-holder row'>
        <div className="col-md-12 ">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-md-4 control-label">
                Are you a happy person?
              </label>
              <div className="col-md-8 text-right">
                <RadioImg
                  ref="areYouHappy"
                  options={yesNoOptions}
                  defaultValue={this.state.areYouHappy}
                  marginSpace="10"
                  onChange={(e) => {
                    this.setState({
                      areYouHappy: e.target.value
                    })}}
                  />
              </div>
            </div>
            <div className={showHowHappyCls}>
              <label className="col-md-4 control-label">
                How happy are you?
              </label>
              <div className="col-md-8 text-right">
                <RadioImg
                  ref="howHappy"
                  options={painRatingOptions}
                  defaultValue={this.state.howHappy}
                  marginSpace="5" />
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    )
  }
}
