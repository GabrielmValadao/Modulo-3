<template></template>

<script>
import PetService from '../services/PetService'
export default {
  data() {
    return {
      pets: []
    }
  },
  mounted() {
    PetService.getAllPets()
      .then((data) => {
        this.pets = data
      })
      .catch((error) => {
        alert('Houve um erro')
      })
  }
}
</script>
