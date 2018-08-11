import Icon from './components/Icon.vue';

const VueFontAwesomeCss = {
  install: (Vue) => {
    Vue.component('fa-icon', Icon);
    Vue.component('v-icon', Icon);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFontAwesomeCss);
}

export default VueFontAwesomeCss;
