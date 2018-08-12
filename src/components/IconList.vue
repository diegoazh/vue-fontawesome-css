<template>
  <ul :id="ulId" :class="['fa-ul', parseUlClass]">
    <li v-for="(item, index) in items" :key="index" :id="liId[index]" :class="parseClassInIndex(liClass, index)">
      <span :id="spanId[index]" :class="['fa-li', parseClassInIndex(spanClass, index)]">
        <v-icon
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
      </span>
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'IconList',
  props: {
    items: {
      type: Array,
      default: () => ([
        {
          icon: {},
          text: '',
        },
      ]),
      required: true,
      validator(value) {
        let notOk = 0;
        value.forEach((el) => {
          if (!el.icon || !el.text) notOk++;
        });
        return Boolean(!notOk);
      },
    },
    ulId: {
      type: String,
      default: '',
      required: false,
      validator(value) {
        return typeof value === 'string';
      },
    },
    ulClass: {
      type: [String, Array],
      default: '',
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
    liId: {
      type: Array,
      default: () => ([]),
      required: false,
      validator(value) {
        let nonstr = 0;
        value.forEach((el) => {
          if (typeof el !== 'string') nonstr++;
        });
        return Boolean(!nonstr);
      },
    },
    liClass: {
      type: Array,
      default: () => ([]),
      required: false,
      validator(value) {
        let nonstr = 0;
        value.forEach((el) => {
          if (typeof el !== 'string') nonstr++;
        });
        return Boolean(!nonstr);
      },
    },
    spanId: {
      type: Array,
      default: () => ([]),
      required: false,
      validator(value) {
        let nonstr = 0;
        value.forEach((el) => {
          if (typeof el !== 'string') nonstr++;
        });
        return Boolean(!nonstr);
      },
    },
    spanClass: {
      type: Array,
      default: () => ([]),
      required: false,
      validator(value) {
        let nonstr = 0;
        value.forEach((el) => {
          if (typeof el !== 'string') nonstr++;
        });
        return Boolean(!nonstr);
      },
    },
  },
  computed: {
    parseUlClass() {
      if (Array.isArray(this.ulClass)) {
        return this.ulClass.join(' ');
      } else if (typeof this.ulClass === 'string') {
        return this.ulClass;
      }
    },
  },
  methods: {
    parseClassInIndex(prop, index) {
      if (Array.isArray(prop[index])) {
        return prop[index].join(' ');
      } else if (typeof prop[index] === 'string') {
        return prop[index];
      }
    },
  },
  components: {
    'v-icon': Icon,
  },
};
</script>
