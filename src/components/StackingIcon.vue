<template>
  <span :id="spanId" :class="['fa-stack fa-2x', parseSpanClass]">
    <v-icon 
      :fas="container && container.fas"
      :far="container && container.far"
      :fab="container && container.fab"
      :fal="container && container.fal"
      :name="container && container.name"
      :size="container && container.size"
      :fw="container && container.fw"
      :rotate="container && container.rotate"
      :flip="container && container.flip"
      :spin="container && container.spin"
      :pulse="container && container.pulse"
      :pull_left="container && container.pull_left"
      :pull_right="container && container.pull_right"
      :border="container && container.border"
      :inverse="container && container.inverse"
      :shrink="container && container.shrink"
      :grow="container && container.grow"
      :up="container && container.up"
      :down="container && container.down"
      :left="container && container.left"
      :right="container && container.right"
      :transformRotate="container && container.transformRotate"
      :transformFlip="container && container.transformFlip"
      :maskType="container && container.maskType"
      :mask="container && container.mask"
      :id="container && container.id"
      :class="container && container.class"
    />
    <v-icon 
      :fas="icon && icon.fas"
      :far="icon && icon.far"
      :fab="icon && icon.fab"
      :fal="icon && icon.fal"
      :name="icon && icon.name"
      :size="icon && icon.size"
      :fw="icon && icon.fw"
      :rotate="icon && icon.rotate"
      :flip="icon && icon.flip"
      :spin="icon && icon.spin"
      :pulse="icon && icon.pulse"
      :pull_left="icon && icon.pull_left"
      :pull_right="icon && icon.pull_right"
      :border="icon && icon.border"
      :inverse="icon && icon.inverse"
      :shrink="icon && icon.shrink"
      :grow="icon && icon.grow"
      :up="icon && icon.up"
      :down="icon && icon.down"
      :left="icon && icon.left"
      :right="icon && icon.right"
      :transformRotate="icon && icon.transformRotate"
      :transformFlip="icon && icon.transformFlip"
      :maskType="icon && icon.maskType"
      :mask="icon && icon.mask"
      :id="icon && icon.id"
      :class="icon && icon.class"
    />
  </span>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'StackingIcon',
  props: {
    container: {
      type: Object,
      required: true,
      default: {
        fas: true,
        name: 'square',
        stack: '2x',
      },
      validator(value) {
        return (typeof value === 'object' && !Array.isArray(value))
      },
    },
    icon: {
      type: Object,
      required: true,
      default: {
        fab: true,
        name: 'twitter',
        stack: '1x',
        inverse: true,
      },
      validator(value) {
        return (typeof value === 'object' && !Array.isArray(value))
      },
    },
    spanId: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return typeof value === 'string';
      },
    },
    spanClass: {
      type: [String, Array],
      required: false,
      default: '',
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
    }
  },
  computed: {
    parseSpanClass() {
      if (Array.isArray(this.spanClass)) {
        return this.spanClass.join(' ');
      } else if (typeof this.spanClass === 'string') {
        return this.spanClass;
      }
    },
  },
  components: {
    'v-icon': Icon,
  },
}
</script>
