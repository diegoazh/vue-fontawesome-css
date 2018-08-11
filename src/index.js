import Icon from './components/icon.vue';
import IconList from './components/IconList.vue';
import StackingIcon from './components/StackingIcon.vue';

const VueFontAwesomeCss = {
  install: (Vue) => {
    Vue.component('fa-icon', Icon);
    Vue.component('v-icon', Icon);
    Vue.component('v-icon-list', IconList);
    Vue.component('v-stacking-icon', StackingIcon);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFontAwesomeCss);
}

export default VueFontAwesomeCss;
