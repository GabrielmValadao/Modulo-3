import { describe, expect, it, vi } from 'vitest'
import Login from './Login.vue'
import { mount } from '@vue/test-utils'
//FAZER ISSO SOMENTE PARA TELAS QUE USAM VUETIFY
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import AuthenticationService from '../services/AuthenticationService'

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

  it('Espera-se que ao submeter o formulário, seja redirecionado para tela home', () => {
    vi.spyOn(AuthenticationService, 'login').mockResolvedValue({
      data: {
        token: 'token',
        permissions: []
      }
    })

    const component = mount(Login, {
      global: {
        plugins: [vuetify]
      }
    })
    // get -> quando for algo nativo do html
    // getComponent -> quando for algum componente externo
    component.getComponent("[data-test='input-email']").setValue('metzdorfgabriel@gmail.com')
    component.getComponent("[data-test='input-password']").setValue('12345678')
    component.getComponent("[data-test='submit-button']").trigger('submit')
  })
})
