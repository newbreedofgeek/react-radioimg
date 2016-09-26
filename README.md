# react radioimg
is a simple custom radio button component for your react projects. it lets you create your own radio buttons using your own images or css classes. very useful if you want to create yes/no buttons or similar single value input ui components and you don't want the default radio buttons that html or bootstrap gives you.

###### if you like this, then check out my easy to use react wizard component called react-stepzilla - [https://github.com/newbreedofgeek/react-stepzilla](https://github.com/newbreedofgeek/react-stepzilla)

### what does it do?
- something like this of course:

![react-stepzilla](https://raw.githubusercontent.com/newbreedofgeek/react-radioimg/master/radioimg-eg.png)

- another use case would be a ratings component like this (check out example on how to do this)

![react-stepzilla](https://raw.githubusercontent.com/newbreedofgeek/react-radioimg/master/radioimg-eg-rating.png)


### get started
- run
```
npm install react-radioimg
```
- require into your project via
```
var RadioImg = require('react-radioimg')
```
- define each radio option. use css classes for default and selected state (using bootstrap in the example below) and your value and label for each button.
```
let yesNoOptions = [
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
```
- and now render it out somewhere in your app
```
<div className='radio-options'>
    <RadioImg options={yesNoOptions} />
</div>
```

- the following params are available

```
// send an array of objects. each object represents a custom radio button
options: [{optionsA}, {optionsB}]

  // option object should be of this schema
  {
    btnCls: 'btn btn-lg btn-default', // a css class string to represent the default base class for each radio button
    btnSelCls: 'btn btn-lg btn-primary sel', // a css class string to represent the selected class
    img: 'mood-01.png', // an image to use (this is optional, use this if you want to render an image)
    val: 'no', // the value when selected
    label: 'No' // the text label of the radio button
  }

// control the space between each radio button
marginSpace: "10"

// grab the selected "val" via local onChange callback. base event propagates through. e.g.
onChange={(e) => {
  this.setState({
    areYouHappy: e.target.value
  })}}
}

// 'fill' the previous radio buttons from current selection location (useful for when you want to use this as a ratings component, so when you pick rating 4 for example it will apply a 'fill' class for items 1-4. This way you can show the rating radio icons before 4 as all selected). Check out the examples on how to do this.
enableSelectionFill: true

// if above 'enableSelectionFill' is true then this is the special fill class that will be applied to radio icons
selectionFillCls : 'fill'
```

example options usage:
```
<div className='radio-options'>
  <RadioImg
      ref="areYouHappy"
      options={yesNoOptions}
      defaultValue={this.state.areYouHappy}
      marginSpace="10",
      onChange={(e) => {
        this.setState({
          areYouHappy: e.target.value
        })}} />
</div>
```


- if you want to use an image and dont want the label text to appear, use css to set the font color to transparent. e.g color: transparent;

### dev
- all node source is in src/main.js
- you need to install dependencies first `npm install`
- make any changes and run `npm run build` to transpile the jsx into `dist`
- the transpilation is run as a auto pre-publish task so it should usually be up to date when consumed via npm

### run and view example in browser
a fully working example is found in the `src/examples` directory.

- run `npm install`
- then run `npm run example`
- then go to `http://localhost:8080/webpack-dev-server/src/examples/index.html` in your browser
- enjoy


### todo
- write the tests

#### change log
- 1.1.0
  - added support for 'enableSelectionFill' and 'selectionFillCls' options and improved examples page
- 1.0.0
  - initial working version
