'use strict';
import {mount} from '@vue/test-utils';
import Icon from '../src/components/Icon.vue';

describe('Icon.vue', () => {
  const wrapper = mount(Icon);

  it('Renders the correct markup withot props', () => {
    expect(wrapper.html()).toContain('<i id="" aria-hidden="true" data-fa-transform="" class="fa fa-user"></i>');
  });

  it('Renders the correct markup with fas prop', () => {
    wrapper.setProps({fas: true});
    expect(wrapper.html()).toContain('<i id="" aria-hidden="true" data-fa-transform="" class="fas fa-user"></i>');
  });

  it('Renders the correct markup with far prop', () => {
    wrapper.setProps({far: true});
    expect(wrapper.html()).toContain('<i id="" aria-hidden="true" data-fa-transform="" class="far fa-user"></i>');
  });

  it('Renders the correct markup with fab prop', () => {
    wrapper.setProps({fab: true});
    expect(wrapper.html()).toContain('<i id="" aria-hidden="true" data-fa-transform="" class="fab fa-user"></i>');
  });

  it('Renders the correct markup with fal prop', () => {
    wrapper.setProps({fal: true});
    expect(wrapper.html()).toContain('<i id="" aria-hidden="true" data-fa-transform="" class="fal fa-user"></i>');
  });
});
