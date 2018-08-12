import Icon from './components/Icon.vue';
import IconList from './components/IconList.vue';
import StackingIcon from './components/StackingIcon.vue';
import LayersIcocns from './components/LayersIcons.vue';

const VueFontAwesomeCss = {
  install: (Vue) => {
    Vue.component('fa-icon', Icon);
    Vue.component('v-icon', Icon);
    Vue.component('v-icon-list', IconList);
    Vue.component('v-stacking-icon', StackingIcon);
    Vue.component('v-layers-icons', LayersIcocns);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFontAwesomeCss);
}

export default VueFontAwesomeCss;
