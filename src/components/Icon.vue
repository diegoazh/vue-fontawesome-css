<template>
  <i :id="iconId" :class="defineIcon" aria-hidden="true"></i>
</template>

<script>
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';

export default {
  name: 'icon-app',
  props: {
    icon: {
      type: [String, Array],
      default: 'fas',
      required: true
    },
    iconId: {
      type: String,
      default: '',
      required: false
    },
    otherClasses: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    defineIcon() {
      let classes = '';

      if (Array.isArray(this.icon)) {
        classes = this.icon[0] + ' fa-' + this.icon[1];
      } else {
        classes = 'fas fa-' + this.icon;
      }

      if (this.otherClasses) classes += ' ' + this.otherClasses;

      return classes;
    }
  }
};
</script>

<style>

</style>