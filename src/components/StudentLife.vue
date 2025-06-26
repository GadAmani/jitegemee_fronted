<script setup>

import {ref} from 'vue'
 import { useStudentLifeStore } from '../stores/StudentLife';
 const studentLifeStore = useStudentLifeStore()
 const studentLife = studentLifeStore.studentLife

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for = "student in studentLife" :key="student">
                  <v-card
    class="mx-auto"
    max-width="400"
    color="#fdf5e6"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="student.image"
      cover
    >
      <v-card-title>{{student.title}}</v-card-title>
    </v-img>

    <v-card-text>
      <div>{{ student.description }}</div>

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