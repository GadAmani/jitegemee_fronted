<script setup>

import {ref} from 'vue'
 import { useLibraryStore } from '../stores/Library';
 const libraryStore = useLibraryStore()
 const library = libraryStore.library

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for = "book in library" :key="book">
                  <v-card
    class="mx-auto"
    max-width="400"
    color="#fdf5e6"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="book.image"
      cover
    >
      <v-card-title>{{book.title}}</v-card-title>
    </v-img>

    <v-card-text>
      <div>{{ book.description }}</div>

    </v-card-text>

    <!-- <v-card-actions>
      <v-btn color="orange" :text="event.category"></v-btn>

       <v-btn color="orange" text="Explore"></v-btn> 
    </v-card-actions> -->
  </v-card>
            </v-col>
        </v-row>
    </v-container>
 
</template>