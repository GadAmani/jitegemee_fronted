<script setup>
import { ref } from 'vue';
import {useCoursesStore} from '../stores/courses'

const coursesStore = useCoursesStore() //unwrapping the object. Making the object available
const courses = coursesStore.courses

const selectedCourse = courses.find(course => course.id == coursesStore.selectedCourse);
//instructions is give me the data for a course with this id (selected course)
//response: check for the id in the list of courses and place it in the selectedCourse


//models to uniquely identify each text field
const firstName = defineModel("firstName")
const middleName = defineModel("middleName")
const lastName = defineModel("lastName")
const emailAddress = defineModel("emailAddress")
const phoneNumber = defineModel("phoneNumber")
const physicalAddress = defineModel("physicalAddress")
const gender = defineModel("gender")
const dob = defineModel("dateOfBirth")
const nationality = defineModel("nationality")

//creating objects to hold form data
const applicationFormDetails = ref({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    physicalAddress: physicalAddress,
    gender: gender,
    dob: dob,
    nationality: nationality,
    course: selectedCourse
})

//funcion to save data
function saveData(){
    for(let item in applicationFormDetails.value){
        console.log(applicationFormDetails.value[item])
    }
}
</script>

<template>
    <v-container>
        <v-row>
            <p>you are appplying for {{ selectedCourse.name }}.
                the next intake is in {{ selectedCourse.intake }}</p>
        </v-row>
    </v-container>

    <!-- Apply form -->
     <v-container>
        <!-- First Name, Middle Name, Last Name -->
        <v-row>
            <v-col md="4">
                <v-text-field label="first Name" v-model="firstName"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Middle Name" v-model="middleName"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Last Name" v-model="lastName"> </v-text-field>
            </v-col>
        </v-row>
        <!-- Email Address, Phone number, Physical address -->
        <v-row>
            <v-col md="4">
                <v-text-field label="Email Address" v-model="emailAddress"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Phone number" v-model="phoneNumber"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Physical address" v-model="physicalAddress"> </v-text-field>
            </v-col>
        </v-row>
        <!-- Gender, Date of Birth, Nationality -->
        <v-row>
            <v-col md="4">
                <v-text-field label="Gender" v-model="gender"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Date of Birth" v-model="dob"> </v-text-field>
            </v-col>
            <v-col md="4">
                <v-text-field label="Nationality" v-model="nationality"> </v-text-field>
            </v-col>
        </v-row>
        <!-- Button -->
        <v-row>
            <v-btn block color="#575353" @click="saveData()">Submit</v-btn>
        </v-row>
     </v-container>
</template>