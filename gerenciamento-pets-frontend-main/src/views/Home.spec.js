import { describe, expect, it, vi } from 'vitest'
import Home from './Home.vue'
import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Tela home', () => {
  it('Espera-se que a tela seja rendenizada', () => {
    const component = mount(Home)
  })
})
