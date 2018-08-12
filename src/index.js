import Icon from './components/Icon.vue';
import IconList from './components/IconList.vue';
import StackingIcon from './components/StackingIcon.vue';
import LayersIcocns from './components/LayersIcons.vue';

const VueFontAwesomeCss = {
  install: (Vue) => {
    Vue.component('fa-icon', Icon);
    Vue.component('v-icon', Icon);
    Vue.component('v-icon-list', IconList);
    Vue.component('v-icon-stack', StackingIcon);
    Vue.component('v-icon-layer', LayersIcocns);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFontAwesomeCss);
}

export default VueFontAwesomeCss;
