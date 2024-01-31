<template>
  <form @submit.prevent="handleSubmit">
    <v-card width="80%" class="mx-auto px-6 pt-8" title="Cadastro de pet">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field label="Nome" variant="outlined" v-model="name" />
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <v-text-field label="Idade" variant="outlined" v-model="age" />
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <v-text-field label="Peso" variant="outlined" v-model="weight" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-select
            label="Porte"
            :items="itemsSize"
            variant="outlined"
            placeholder="Selecione o porte do seu pet"
            v-model="size"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            label="Espécie"
            :items="itemsSpecies"
            variant="outlined"
            placeholder="Selecione uma espécie"
            v-model="specie"
            item-title="name"
            item-value="id"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            label="Raça"
            :items="itemsRaces"
            variant="outlined"
            placeholder="Selecione uma raça"
            v-model="race"
            item-title="name"
            item-value="id"
          />
        </v-col>
      </v-row>

      <v-card-actions class="d-flex justify-end">
        <v-btn color="orange" type="submit" variant="flat"> Cadastrar </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import { optionsSize } from '../constants/pets.constans'
import SpecieService from '../services/SpecieService'
import RaceService from '../services/RaceService'
import PetService from '../services/PetService'

export default {
  data() {
    return {
      name: '',
      age: 1,
      weight: 1,
      size: '',
      specie: '',
      race: '',

      itemsSize: optionsSize,
      itemsSpecies: [],
      itemsRaces: []
    }
  },

  mounted() {
    SpecieService.getAllSpecies()
      .then((data) => {
        this.itemsSpecies = data
      })
      .catch(() => alert('Houve um erro ao buscar as opções'))
    RaceService.getAllRaces().then((data) => {
      this.itemsRaces = data
    })
  },

  methods: {
    handleSubmit() {
      PetService.createPet({
        name: this.name,
        age: this.age,
        size: this.size,
        race_id: this.race,
        specie_id: this.specie,
        weight: this.weight
      })
    }
  }
}
</script>

<style scoped></style>
