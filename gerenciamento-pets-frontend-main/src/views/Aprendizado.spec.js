import { describe, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'

import Aprendizado from './Aprendizado.vue'

describe('Testa a tela de aprendizado', () => {
  it('Espera-se que a tela seja rendenizada', () => {
    const component = mount(Aprendizado)

    expect(component).toBeTrusthy()
  })

  // busca um elemento no componente
  it('Espera-se que ao submeter o formulário, o item seja adicionado para a lista', async () => {
    const component = mount(Aprendizado)
    component.get("[data-test='input-email']").setValue('abc')

    // clicando no botão de cadastrar
    component.get("[data-test='submit-button']").trigger('submit')

    await flushPromises()

    const list = component.get("[data-test='list']")

    expect(list.text()).not.toContain('abc')
  })
})
