import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('StudentLife',  {
    state: () => {
        const studentLife = ref([
            {
                id: 1,
                image:"../public/images/StudentLife/150-billi-mqeYaK6gQ10-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 2,
                image:"../public/images/StudentLife/cie-ptit-kI0wrjVajtQ-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
        
                id: 3,
                image:"../public/images/StudentLife/dex-ezekiel-dl5D4qO_H2o-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 4,
                image:"../public/images/StudentLife/divaris-shirichena-fXPFexUz-fc-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 5,
                image:"../public/images/StudentLife/fatih-kayar-nkjW0hW7HsY-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 6,
                image:"../public/images/StudentLife/fum-XyG8Sh1BO8U-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 7,
                image:"../public/images/StudentLife/leiada-krozjhen-SIcL-4Dpfeg-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 8,
                image:"../public/images/StudentLife/wang-sheeran-_sydCDtdIck-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 9,
                image:"../public/images/StudentLife/yousef-salhamoud-31tZqJGYxN8-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 10,
                image:"../public/images/StudentLife/yustinus-tjiuwanda-BCBGahg0MH0-unsplash.jpg",
                title: "Beyond the Books: A Journey Through Student Life",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
        
        ])
        return{
            studentLife,
        }
    }, 

})
