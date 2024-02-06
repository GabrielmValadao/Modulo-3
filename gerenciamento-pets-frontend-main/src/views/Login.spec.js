import { describe, it } from 'vitest'
import Login from './Login.vue'
import { mount } from '@vue/test-utils'
//FAZER ISSO SOMENTE PARA TELAS QUE USAM VUETIFY
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Tela de login', () => {
  it('Espera-se que que tela seja renderizada', () => {
    const component = mount(Login, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(component).toBeTruthy()
  })

  it('Espera-se que ao submeter o formulário, seja redirecionado para tela home', () => {})
})
