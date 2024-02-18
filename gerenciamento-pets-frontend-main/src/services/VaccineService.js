import api from './api'

class VaccineService {
  async createVaccine(body) {
    const response = await api.post('vaccines', body)
    return response.data
  }
}

export default new VaccineService()
