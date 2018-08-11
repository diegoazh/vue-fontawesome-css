<template>
  <i :id="defineId"
    :class="defineClass"
    aria-hidden="true"
    :data-fa-transform="parseTransform"
    :data-fa-mask="parseMask"></i>
</template>

<script>
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';

export default {
  name: 'Icon',
  props: {
    fas: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    far: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    fal: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    fab: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    name: {
      type: String,
      default: 'user',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    size: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    fw: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    rotate: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    flip: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    spin: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    pulse: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    pullLeft: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    pullRight: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    border: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    inverse: {
      type: Boolean,
      default: false,
      required: false,
      validator(value) {
        return typeof value === 'boolean';
      },
    },
    shrink: {
      type: Number,
      default: 0,
      required: false,
      validator(value) {
        return typeof value === 'number';
      },
    }
    grow: {
      type: Number,
      default: 0,
      required: false,
      validator(value) {
        return typeof value === 'number';
      },
    }
    up: {
      type: [Number, String],
      default: 0,
      required: false,
      validator(value) {
        return typeof value === 'number' || typeof value === 'string';
      },
    }
    down: {
      type: [Number, String],
      default: 0,
      required: false,
      validator(value) {
        return typeof value === 'number' || typeof value === 'string';
      },
    }
    left: {
      type: [Number, String],
      default: 0,
      required: false,
      validator(value) {
        return typeof value === 'number' || typeof value === 'string';
      },
    }
    right: {
      type: [Number, String],
      default: 0,
      required: false,
      validator(value) {
        return typeof value === 'number' || typeof value === 'string';
      },
    },
    transformRotate: {
      type: [Number, String],
      default: 0,
      required: false,
      validator(value) {
        return (typeof value === 'number' || typeof value === 'string');
      },
    },
    transformFlip: {
      type: [Array, String],
      default: 0,
      required: false,
      validator(value) {
        let nonOk = 0;
        if (Array.isArray(value)) {
          value.forEach((el) => {
            if (typeof el !== 'string') nonOk++;
          });
        } else if (typeof value !== 'string') {
          nonOk++;
        }
        return Boolean(!nonOk);
      },
    },
    maskType: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return ['fas', 'far', 'fab', 'fal'].indexOf(value) !== -1;
      },
    },
    mask: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    id: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    class: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    icon: {
      type: [String, Array],
      default: 'fas',
      required: false,
      validator(value) {
        let nonOk = 0;
        if (Array.isArray(value)) {
          value.forEach((el) => {
            if (typeof el !== 'string') nonOk++;
          });
        } else if (typeof value !== 'string') {
          nonOk++;
        }
        return Boolean(!nonOk);
      },
    },
    iconId: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    otherClasses: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    }
  },
  computed: {
    parseTransform() {
      let transform = '';
      if (this.shrink) {
        transform += `shrink-${this.shrink}`;
      } else if (this.grow) {
        transform += `grow-${this.grow}`;
      }
      if (this.up) {
        !transform ? transform += `up-${this.up}` : transform += ` up-${this.up}`;
      } else if (this.down) {
        !transform ? transform += `down-${this.down}` : transform += ` down-${this.down}`;
      }
      if (this.left) {
        !transform ? transform += `left-${this.left}` : transform += ` left-${this.left}`;
      } else if (this.right) {
        !transform ? transform += `right-${this.right}` : transform += ` right-${this.right}`;
      }
      if (this.transformRotate) {
        !transform ? transform += `rotate-${this.transformRotate}` : transform += ` rotate-${this.transformRotate}`;
      }
      if (this.transformFlip) {
        !transform ? transform += `flip-${this.transformFlip}` : transform += ` flip-${this.transformFlip}`;
      }

      return transform;
    },
    parseMask() {
      if (this.maskType && this.mask) {
        return `${this.maskType} fa-${this.mask}`;
      }
    },
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

      this.pullLeft ? classes += ' fa-pull-left' : this.pullRight ? ' fa-pull-right' : null;

      this.border ? classes += ' fa-border' : null;

      this.inverse ? classes += ' fa-inverse' : null;

      this.class ? classes += ` ${this.class}` : this.otherClasses ? classes += ` ${this.otherClasses}` : null;

      return classes;
    }
  }
};
</script>
