<script setup>
import {ref} from 'vue'
const courses = ref([
    {
        name:"computer science",
        school:"Jitegemee",
        description: "Explore the foundations of programming, software development, and computer systems. This course equips students with the skills to build applications, solve computational problems, and innovate in a fast-paced tech world.",
        intake:"July 2025",
    },
    {
        name:"medecine",
        school:"Jitegemee",
        description: "A rigorous program focused on human biology, clinical practice, and patient care. Students gain deep medical knowledge and hands-on experience, preparing them to become compassionate and skilled healthcare professionals.",
        intake:"September 2025",
    },
    {
  name: "nursing",
  school: "Jitegemee",
  description: "A hands-on program that combines theory and practice in patient care, anatomy, and healthcare ethics. It prepares students for vital roles in hospitals and community health settings.",
  intake: "September 2025"
    },
    {
  name: "pharmacy",
  school: "Jitegemee",
  description: "A specialized course on drug development, pharmacology, and patient counseling. Students learn to ensure safe and effective medication use, preparing for roles in hospitals and retail pharmacy.",
  intake: "September 2025"
    },
    {
  name: "public health",
  school: "Jitegemee",
  description: "A multidisciplinary program exploring epidemiology, health policy, and community health. Students learn to develop strategies for disease prevention and improving population health outcomes.",
  intake: "September 2025"
    },
    {
  name: "artificial intelligence",
  school: "Jitegemee",
  description: "A forward-looking course covering machine learning, neural networks, and intelligent systems. Students learn to build smart applications that can think and adapt.",
  intake: "September 2025"
},
{
  name: "bioinformatics",
  school: "Jitegemee",
  description: "An interdisciplinary program combining biology, computer science, and data analysis. Students explore how to manage and analyze biological data using technology.",
  intake: "September 2025"
},
{
  name: "electrical engineering",
  school: "Jitegemee",
  description: "A technical course focusing on circuits, electronics, and energy systems. Students learn to design, analyze, and maintain electrical devices and infrastructure.",
  intake: "September 2025"
},
    {
        name:"Data science",
        school:"Jitegemee",
        description: "Learn how to collect, analyze, and interpret large volumes of data. This course combines programming, statistics, and machine learning to help students uncover insights and drive decision-making in various industries.",
        intake:"September 2025",
    },
    {
        name:"Statistics",
        school:"Jitegemee",
        description: "Gain a strong foundation in data analysis, probability, and mathematical reasoning. This course trains students to model real-world problems and make accurate, data-driven conclusions in business, research, and beyond.",
        intake:"January 2026",
    }
])
console
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="course in courses">
                <v-card color="#E5E5CB">
        <v-card-item>
          <v-card-title>{{course.name}}</v-card-title>

          <v-card-subtitle>{{course.school}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>{{course.description}}</v-card-text>
        <v-card-text>{{course.intake}}</v-card-text>
      </v-card>
           </v-col>
        </v-row>
    </v-container>
</template>