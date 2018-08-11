<template>
  <span :id="spanId" :class="['fa-layers fa-fw', parseClass(spanClass)]">
    <v-icon v-for="(item, index) in icons" :key="index"
      :fas="item.icon && item.icon.fas"
      :far="item.icon && item.icon.far"
      :fab="item.icon && item.icon.fab"
      :fal="item.icon && item.icon.fal"
      :name="item.icon && item.icon.name"
      :size="item.icon && item.icon.size"
      :fw="item.icon && item.icon.fw"
      :rotate="item.icon && item.icon.rotate"
      :flip="item.icon && item.icon.flip"
      :spin="item.icon && item.icon.spin"
      :pulse="item.icon && item.icon.pulse"
      :pull_left="item.icon && item.icon.pull_left"
      :pull_right="item.icon && item.icon.pull_right"
      :border="item.icon && item.icon.border"
      :inverse="item.icon && item.icon.inverse"
      :shrink="item.icon && item.icon.shrink"
      :grow="item.icon && item.icon.grow"
      :up="item.icon && item.icon.up"
      :down="item.icon && item.icon.down"
      :left="item.icon && item.icon.left"
      :right="item.icon && item.icon.right"
      :transformRotate="item.icon && item.icon.transformRotate"
      :transformFlip="item.icon && item.icon.transformFlip"
      :maskType="item.icon && item.icon.maskType"
      :mask="item.icon && item.icon.mask"
      :id="item.icon && item.icon.id"
      :class="item.icon && item.icon.class"
    />
    <span v-if="text.message" :id="text.id" 
      :class="['fa-layers-text', 'fa-inverse', parseClass(text.class)]"
      :data-fa-transform="parseTransform(text.transform)"
      :style="parseClass(text.style)">{{ text.message }}</span>
    <span v-if="counter.number" :id="counter.id"
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
      default: [],
      validator(value) {
        return Array.isArray(value);
      },
    },
    text: {
      type: Object,
      required: false,
      default: () => ({
        message: 'NEW',
        transform: {
          shrink: '',
          grow: '',
          up: '',
          down: '',
          left: '',
          right: '',
          rotate: '',
          flip: '',
        },
        id: '',
        class: [],
        style: []
      }),
      validator(value) {
        return typeof value === 'object' && !Array.isArray(value);
      },
    },
    counter: {
      type: Object,
      required: false,
      default: () => ({
        number: 100,
        transform: {
          shrink: '',
          grow: '',
          up: '',
          down: '',
          left: '',
          right: '',
          rotate: '',
          flip: '',
        },
        id: '',
        class: [],
        style: [],
      }),
      validator(value) {
        return typeof value === 'object' && !Array.isArray(value);
      }
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
}
</script>
