<template>
  <i :id="defineId" :class="defineClass" aria-hidden="true"></i>
</template>

<script>
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';

export default {
  name: 'v-icon',
  props: {
    fas: {
      type: Boolean,
      default: true,
      required: false
    },
    far: {
      type: Boolean,
      default: false,
      required: false
    },
    fal: {
      type: Boolean,
      default: false,
      required: false
    },
    fab: {
      type: Boolean,
      default: false,
      required: false
    },
    name: {
      type: String,
      default: 'user',
      required: false
    },
    size: {
      type: String,
      default: '',
      required: false,
    },
    fw: {
      type: Boolean,
      default: false,
      required: false
    },
    rotate: {
      type: String,
      default: '',
      required: false,
    },
    flip: {
      type: String,
      default: '',
      required: false,
    },
    spin: {
      type: Boolean,
      default: false,
      required: false,
    },
    pulse: {
      type: Boolean,
      default: false,
      required: false,
    },
    pull_left: {
      type: Boolean,
      default: false,
      required: false,
    },
    pull_right: {
      type: Boolean,
      default: false,
      required: false,
    },
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
    id: {
      type: String,
      default: '',
      required: false
    },
    class: {
      type: String,
      default: '',
      required: false
    },
    icon: {
      type: [String, Array],
      default: 'fas',
      required: false
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
    defineId() {
      return id || iconId;
    },
    defineClass() {
      let classes = '';

      this.fas ? classes += 'fas ' : this.far ? classes += 'far ' : this.fal ? classes += 'fal ' : classes += 'fab ';

      if (this.name) {
        classes += `fa-${this.name}`;
      } else if (Array.isArray(this.icon)) {
        classes = this.icon[0] + ' fa-' + this.icon[1];
      } else if (this.icon) {
        classes = 'fas fa-' + this.icon;
      }

      if (this.size) classes += ` fa-${this.size}`;

      if (this.fw) classes += ' fa-fw';

      if (this.rotate) classes += ` fa-rotate-${this.rotate}`;

      if (this.flip) classes += ` fa-flip-${this.flip}`;

      this.spin ? classes += ` fa-spin` : this.pulse ? ` fa-pulse` : null;

      this.pull_left ? classes += ' fa-pull-left' : this.pull_right ? ' fa-pull-right' : null;

      this.border ? classes += ' fa-border' : null;

      this.class ? classes += ` ${this.class}` : this.otherClasses ? classes += ` ${this.otherClasses}` : null;

      return classes;
    }
  }
};
</script>
