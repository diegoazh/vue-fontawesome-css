import Icon from './components/Icon.vue';
import IconList from './components/IconList.vue';
import StackingIcon from './components/StackingIcon.vue';
import LayersIcocns from './components/LayersIcons.vue';

const VueFontAwesomeCss = {
  install: (Vue, options) => {
    Vue.component('fa-icon', Icon);
    Vue.component('v-icon', Icon);
    Vue.component('v-icon-list', IconList);
    Vue.component('v-icon-stack', StackingIcon);
    Vue.component('v-icon-layer', LayersIcocns);
    if (options && options.cdn) {
      if (options.cdn.css) {
        let lnk = document.createElement('link');
        lnk.setAttribute('rel', 'stylesheet');
        lnk.setAttribute('href', 'https://use.fontawesome.com/releases/v5.2.0/css/all.css');
        lnk.setAttribute('integrity', 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ');
        lnk.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(lnk);
      } else {
        let scr = document.createElement('script');
        scr.setAttribute('defer', '');
        scr.setAttribute('src', 'https://use.fontawesome.com/releases/v5.2.0/js/all.js');
        scr.setAttribute('integrity', 'sha384-4oV5EgaV02iISL2ban6c/RmotsABqE4yZxZLcYMAdG7FAPsyHYAPpywE9PJo+Khy');
        scr.setAttribute('crossorigin', 'anonymous');
        document.body.appendChild(scr);
      }
    }
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFontAwesomeCss);
}

export default VueFontAwesomeCss;
