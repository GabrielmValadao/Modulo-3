import api from './api'
class SpecieService {
  async createSpecie() {}

  async getAllSpecies() {
    const response = await api.get('http://127.0.0.1:8000/api/species', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('@token_petshop')
      }
    })
    return response.data
  }
}

export default new SpecieService()
