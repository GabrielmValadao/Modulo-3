<template>
  <h1 class="title">Espécies cadastradas</h1>
  <div class="list-specie">
    <router-link to="/pets">
      <v-card v-for="specie in species" :key="specie.id" width="30%" :title="specie.name" link />
    </router-link>
  </div>
</template>

<script>
import SpecieService from '../services/SpecieService'
export default {
  data() {
    return {
      species: []
    }
  },
  mounted() {
    SpecieService.getAllSpecies()
      .then((data) => {
        this.species = data
      }) // quando a requisição da certo
      .catch((error) => {
        alert('Houve um erro')
      }) // quando a requisição da errado
      .finally(() => {}) //executa mesmo que de certo ou errado
  }
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  margin-left: 20px;
}
.list-specie {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
