# react radioimg
is a simple custom radio button component for your react projects. it lets you create your own radio buttons using your own images or css classes. very useful if you want to create yes/no buttons or similar single value input ui components and you don't want the default radio buttons that html or bootstrap gives you.


### what does it do?
- something like this of course:

![react-stepzilla](https://raw.githubusercontent.com/newbreedofgeek/react-radioimg/master/radioimg-eg.png)

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

#### change logM
- 1.0.0
  - initial working version
