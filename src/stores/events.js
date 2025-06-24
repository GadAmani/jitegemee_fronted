import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
  const events = ref([
    {
        name:"Community Outreach at Northern Kenya",
        image:"../../public/eventsImages/meredith-spencer-KXtTWJZgw8g-unsplash.jpg",
        date:"July 6th 2025",
        location:"Northern Kenya School",
        category:"Community Outreach"
    },
    {
        name: "Strathmore Data Science Symposium",
        image: "../../public/eventsImages/hackernoon-TqlkMXqq0xo-unsplash.jpg",
        date: "2025-07-15",
        location: "Strathmore University Auditorium",
        category: "Data Science"
    },
    {
        name: "Medical Innovations Expo 2025",
        image: "../../public/eventsImages/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg",
        date: "2025-08-10",
        location: "Strathmore Medical School Campus",
        category: "Medicine"
    },
    {
        name: "CodeFest University Hackathon",
        image: "../../public/eventsImages/thisisengineering-lLrZy195sIU-unsplash.jpg",
        date: "2025-09-05",
        location: "Innovation Lab, Strathmore University",
        category: "Computer Science"
    }
])

  return { events }
})
