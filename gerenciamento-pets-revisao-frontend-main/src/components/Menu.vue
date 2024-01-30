<template>
  <v-layout>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item
          prepend-avatar="https://avatars.githubusercontent.com/u/135287636?s=400&u=5d00338a434031175b33d5dd9b753d8637d1050c&v=4"
          title="Gabriel Valadão"
          subtitle="metzdorfgabriel@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <router-link to="/">
          <v-list-item prepend-icon="mdi-folder" title="Home" value="myfiles"></v-list-item>
        </router-link>
        <router-link to="">
          <v-list-item prepend-icon="mdi-star" title="Novo pet" value="starred"></v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
