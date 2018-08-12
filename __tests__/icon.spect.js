'use strict';
import {mount} from '@vue/test-utils';
import Icon from '../src/components/Icon.vue';

describe('Icon.vue', () => {
  const wrapper = mount(Icon);

  it('Renders the correct markup', () => {
    expect(wrapper.html()).toContain('<i></i>');
  });
});
