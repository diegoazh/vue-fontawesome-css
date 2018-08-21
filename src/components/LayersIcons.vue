<template>
  <span :id="spanId" :class="['fa-layers fa-fw', parseClass(spanClass)]">
    <v-icon v-for="(icon, index) in icons" :key="index"
      :fas="icon && icon.fas"
      :far="icon && icon.far"
      :fab="icon && icon.fab"
      :fal="icon && icon.fal"
      :name="icon && icon.name"
      :size="icon && icon.size"
      :stack="icon && icon.stack"
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
      :style="icon && icon.style"
    />
    <span v-if="text && text.message" :id="text.id"
      :class="['fa-layers-text', 'fa-inverse', parseClass(text.class)]"
      :data-fa-transform="parseTransform(text.transform)"
      :style="parseClass(text.style)">{{ text.message }}</span>
    <span v-if="counter && counter.number" :id="counter.id"
      :class="['fa-layers-counter', parseClass(counter.class)]"
      :data-fa-transform="parseTransform(counter.transform)"
      :style="parseClass(counter.style)">{{ counter.number }}</span>
  </span>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'LayersIcons',
  props: {
    icons: {
      type: Array,
      required: true,
      validator(value) {
        let nonOk = 0;
        if (Array.isArray(value)) {
          value.forEach((el) => {
            if (typeof value !== 'object' || Array.isArray(el)) nonOk++;
          });
        }
        return Boolean(!nonOk);
      },
    },
    text: {
      type: Object,
      required: false,
      validator(value) {
        return typeof value === 'object' && !Array.isArray(value);
      },
    },
    counter: {
      type: Object,
      required: false,
      validator(value) {
        return typeof value === 'object' && !Array.isArray(value);
      },
    },
    spanId: {
      type: String,
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    spanClass: {
      type: [String, Array],
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
  },
  methods: {
    parseClass(prop) {
      if (Array.isArray(prop)) {
        return prop.join(' ');
      } else if (typeof prop === 'string') {
        return prop;
      }
    },
    parseTransform(data) {
      let transform = '';
      if (data.shrink) {
        transform += `shrink-${data.shrink}`;
      } else if (data.grow) {
        transform += `grow-${data.grow}`;
      }
      if (data.up) {
        !transform ? transform += `up-${data.up}` : transform += ` up-${data.up}`;
      } else if (data.down) {
        !transform ? transform += `down-${data.down}` : transform += ` down-${data.down}`;
      }
      if (data.left) {
        !transform ? transform += `left-${data.left}` : transform += ` left-${data.left}`;
      } else if (data.right) {
        !transform ? transform += `right-${data.right}` : transform += ` right-${data.right}`;
      }
      if (data.transformRotate) {
        !transform ? transform += `rotate-${data.transformRotate}` : transform += ` rotate-${data.transformRotate}`;
      }
      if (data.transformFlip) {
        !transform ? transform += `flip-${data.transformFlip}` : transform += ` flip-${data.transformFlip}`;
      }

      return transform;
    },
  },
  components: {
    'v-icon': Icon,
  },
};
</script>
