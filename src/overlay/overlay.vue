<template>
  <div :class="classes" @click="handleClick" @touchmove.prevent />
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from 'vue';
import config from '../config';

const { prefix } = config;
const name = `${prefix}-overlay`;

export interface OverlayProps {
  transparent: boolean;
}

export default defineComponent({
  name,
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props: OverlayProps, context: SetupContext) {
    const classes = computed(() => ({
      [`${name}`]: !props.transparent,
      [`${name}--transparent`]: props.transparent,
    }));

    return {
      classes,
      handleClick: () => context.emit('click'),
    };
  },
});
</script>