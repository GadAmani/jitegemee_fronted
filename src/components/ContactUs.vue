<script setup>
import { ref } from 'vue';
//Add the plugin to pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


//Add the persist option to the store you want to be persisted


//models to uniquely identify each text field
const firstName = defineModel("firstName")
const lastName = defineModel("lastName")
const emailAddress = defineModel("emailAddress")
const phoneNumber = defineModel("phoneNumber")
const subject = defineModel("subject")
const message = defineModel("message")


//creating objects to hold form data
const applicationFormDetails = ref({
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    message: message,
    subject: subject,
})

//funcion to save data
function saveData(){
    for(let item in applicationFormDetails.value){
        console.log(applicationFormDetails.value[item])
    }
}
</script>

<template>
    
    <!-- Apply form -->
     <v-container>
        <!-- First Name, Middle Name, Last Name -->
        <v-row>
            <v-col md="6">
                <v-text-field label="first Name" v-model="firstName"> </v-text-field>
            </v-col>
            <v-col md="6">
                <v-text-field label="Last Name" v-model="lastName"> </v-text-field>
            </v-col>
        </v-row>
        <!-- Email Address, Phone number -->
        <v-row>
            <v-col md="6">
                <v-text-field label="Email Address" v-model="emailAddress"> </v-text-field>
            </v-col>
            <v-col md="6">
                <v-text-field label="Phone number" v-model="phoneNumber"> </v-text-field>
            </v-col>
        </v-row>
        <!-- Subject -->
        <v-row>
            <v-col md="">
                <v-text-field label="Subject" v-model="subject"> </v-text-field>
            </v-col>
        </v-row>
        <!-- Message -->
         <v-row>
            <v-col md="12">
                <v-text-field  label="Message" v-model="message"></v-text-field>
            </v-col>
        </v-row>
        <!-- Button -->
        <v-row>
            <v-btn block color="#575353" @click="saveData()">Submit</v-btn>
        </v-row>
     </v-container>
</template>