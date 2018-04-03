# Simple vue-fontawesome-css plugin

This plugin provides simple functionality to add font awesome 5 icons in your vue components.
This plugin works with fontawesome.css stylesheet not with svg javascript.
Is a very simple plugin that provides this functionalityk.

## Install

```javascript
npm install vue-fontawesome-css [--save]
```

## Dependencies

- This package depends on '@fortawesome/fontawesome-free-webfonts'

## Usage

- First import and install plugin

```javascript
import Vue from 'vue'
import Main from './Main.vue'
import VueFontAwesomeCss from 'vue-fontawesome-css'

Vue.use(VueFontAwesomeCss)

const app = new Vue({
  el: '#app',
  render: h => h(Main)
})
```

- Second use the xml tag `<fa-icon />` in your html

```html
<fa-icon icon="user-circle" icon-id="buttonProfile" other-classes="my-bg-color" />
```

or

```html
<fa-icon :icon="['fab', 'youtube']" icon-id="chanelIcon" other-classes="my-personal-class" />

```

## Props

|Option                    |Type                        |Description                 |Required
|--------------------------|:--------------------------:|:--------------------------:|--------------------------:|
|icon                      |String or Array             |This option set the icon, it is not necesary to put 'fa-' prefix e.g. for 'fa-user' write only 'user'. The 'fa-' prefix is automaticaly added. If it is a string, the plugin assumes a 'fa' or 'fas' prefix, otherwise the first place in the array set the prefix 'fa', 'fas', 'far' or 'fab' and in the second place it sets the icon.|True
|icon-id                   |String                      |Set the id tag if you need  |False
|other-classes             |String                      |Add other classes for you icon tag, only if you needed|False

## Repository

[https://github.com/diegoazh/vue-fontawesome-css](https://github.com/diegoazh/vue-fontawesome-css)

## License

"MIT"
