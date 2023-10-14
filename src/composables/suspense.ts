import { h, defineComponent } from 'vue';
import type { Component } from 'vue';
import SuspenseWrapper from '@/components/SuspenseWrapper.vue';

export const withSuspense = (component: Component, propsComponent = []) => {
  return defineComponent({
    props: [...propsComponent],
    components: {
      SuspenseWrapper,
    },
    setup(props) {
      return () => h(SuspenseWrapper, [h(component, { ...props })])
    },
  })
}
