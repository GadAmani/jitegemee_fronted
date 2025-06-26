import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('Library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                image:"../public/library/71puzLM98mL.jpg",
                title: "You are a badass",
                description:"by Jen Sincero is a motivational guide to overcoming self-doubt, embracing confidence, and creating a life you love",
            },
            {
                id: 2,
                image:"../public/library/98a1bafe4cc57a5a617039df31b9a8e4.png",
                title: "Start With why",
                description:"by Simon Sinek explores how great leaders inspire action by focusing on purpose rather than just results. It introduces the Golden Circle framework, emphasizing that people are motivated by why you do something, not just what you do",
            },
            {
        
                id: 3,
                image:"../public/library/aa714140464efeb2273063157e92b096.jpg",
                title: "Atomic Habits",
                description:"by James Clear is a practical guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results. It introduces the Four Laws of Behavior Change and emphasizes the power of tiny improvements over time",
            },
            {
                id: 4,
                image:"../public/library/baedeceb1be31ad6d36d22494cf7781d.png",
                title: "Einstein, His life and universe",
                description:"by Walter Isaacson is a biography that explores Albert Einstein’s life, personality, and scientific genius. Based on newly released personal letters, it examines how his rebellious nature fueled his groundbreaking discoveries",
            },
            {
                id: 5,
                image:"../public/library/OIP (1).jpeg",
                title: "Life Beyond likes",
                description:"by Isa Watson explores the impact of social media on self-worth, friendships, and mental health. It encourages readers to disconnect from the pressure of online validation and build genuine, meaningful connections in real life",
            },
            {
                id: 6,
                image:"../public/library/OIP (2).jpeg",
                title: "the ultimate business book planner",
                description:"by Tatiana Smith is designed to help entrepreneurs organize, strategize, and grow their businesses. It provides tools for goal-setting, financial planning, and business management to help users build a successful and structured enterprise",
            },
            {
                id: 7,
                image:"../public/library/OIP (3).jpeg",
                title: "Investment guide for teens",
                description:"by David and Tom Gardner is a practical and engaging book that teaches teens how to manage money, save wisely, and start investing with just a few dollars. It helps young investors build a portfolio, avoid financial pitfalls, and take advantage of time to grow wealth",
            },
            {
                id: 8,
                image:"../public/library/OIP (4).jpeg",
                title: "Book 8",
                description:"Student life is a journey of learning, growth, and new experiences, balancing academics, friendships, and self-discovery.",
            },
            {
                id: 9,
                image:"../public/library/OIP (5).jpeg",
                title: "5 money myths",
                description:"by Ed Kinsey and Marc Roethel challenges common misconceptions about personal finance and retirement planning. It provides practical strategies to achieve financial independence and rethink traditional money advice",
            },
            {
                id: 10,
                image:"../public/library/OIP.jpeg",
                title: "How did we get Here",
                description:"by Mpoomy Ledwaba is a powerful coming-of-age memoir that explores personal growth, resilience, and self-discovery. Ledwaba shares her journey from university dropout to entrepreneur, highlighting the challenges, lessons, and faith that shaped her path",
            },
        
        ])
        return{
            library,
        }
    }, 

})
