<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nome</th>
        <th class="text-left">Raça</th>
        <th class="text-left">Porte</th>
        <th class="text-left">Idade</th>
        <th class="text-left">Peso</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pet in pets" :key="pet.id">
        <td>{{ pet.pet_name }}</td>
        <td>{{ pet.race.name }}</td>
        <td>{{ this.translateWeight(pet.size) }}</td>
        <td>{{ pet.age }}</td>
        <td>{{ pet.weight }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import PetService from '../services/PetService'

export default {
  data() {
    return {
      pets: []
    }
  },
  methods: {
    translateWeight(name) {
      switch (name) {
        case 'SMALL': {
          return 'Pequeno'
        }

        case 'MEDIUM': {
          return 'Médio'
        }

        case 'LARGE': {
          return 'Grande'
        }

        case 'EXTRA LARGE': {
          return 'Gigante'
        }
      }
    }
  },
  mounted() {
    PetService.getAllPets(this.$route.params.id)
      .then((data) => {
        this.pets = data
      })
      .catch()
  }
}
</script>
