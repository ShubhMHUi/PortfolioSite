// stores/useProfileStore.js

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  // 🔹 Personal Info
  const personalInfo = ref({
    firstName: 'Mahesh',
    lastName: 'Tawar',
    fullName: 'Mahesh Tawar',
    titles: ['Full Stack Developer', 'Backend Engineer'],
    bio: 'I am a passionate full stack developer with experience in building scalable web applications using modern technologies like Vue.js, Node.js, and Python.',
    location: 'Nagpur, India',
    email: 'maheshtawar@example.com',
    phone: '+91-9876543210',
    resume: 'https://example.com/mahesh-resume.pdf',
    profileImage: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    social: {
      github: 'https://github.com/maheshtawar',
      linkedin: 'https://linkedin.com/in/maheshtawar',
      portfolio: 'https://maheshtawar.github.io',
    },

    contacts: [
      {
        type: 'Email',
        value: 'maheshtawar@example.com',
        icon: new URL('../assets/img/Logo/email-logo.png', import.meta.url).href,
        link: 'mailto:maheshtawar@example.com',
      },
      {
        type: 'Phone',
        value: '+91-9876543210',
        icon: new URL('../assets/img/Logo/phone.png', import.meta.url).href,
        link: 'tel:+919876543210',
      },
      {
        type: 'Location',
        value: 'Nagpur, India',
        icon: new URL('../assets/img/Logo/location.png', import.meta.url).href,
        link: null,
      },
      {
        type: 'GitHub',
        value: 'github.com/maheshtawar',
        icon: new URL('../assets/img/Logo/github-logo.png', import.meta.url).href,
        link: 'https://github.com/maheshtawar',
      },
      {
        type: 'LinkedIn',
        value: 'linkedin.com/in/maheshtawar',
        icon: new URL('../assets/img/Logo/linkedin.png', import.meta.url).href,
        link: 'https://linkedin.com/in/maheshtawar',
      },
    ],
  })

  // 🔹 Projects
  const projects = ref([
    {
      title: 'Face Recognition Attendance System',
      subtitle: 'Python - tkinter and MySQL',
      description: 'Face Recognition Attendance System Using Python',
      image: new URL('../assets/img/img1.jpg', import.meta.url).href,
      github: 'https://github.com/maheshtawar/face-recognition-attendance-system',
      demo: 'https://youtu.be/XvSJLnrZtmo?si=xwiiu48wmmSY_AeO',
      tags: ['Python', 'Tkinter', 'MySQL', 'AI'],
      category: 'AI',
    },
    {
      title: 'Portfolio Projects',
      subtitle: 'Web Projects Showcase',
      description: 'A collection of my web projects and experiments.',
      image: new URL('../assets/img/img2.jpg', import.meta.url).href,
      github: 'https://github.com/maheshtawar/maheshtawar.github.io',
      demo: 'https://maheshtawar.github.io/projects.html',
      tags: ['Web', 'HTML', 'CSS', 'JavaScript'],
      category: 'Web',
    },
    {
      title: 'Image to PDF Converter',
      subtitle: 'Python - tkinter',
      description: 'Convert images to PDF using Python and Tkinter.',
      image: new URL('../assets/img/img3.jpg', import.meta.url).href,
      github: 'https://github.com/maheshtawar/Image2PDF_Converter',
      demo: null,
      tags: ['Python', 'Tkinter', 'PDF'],
      category: 'Utility',
    },
  ])

  // 🔹 Experiences
  const experiences = ref([
    {
      title: 'Full Stack Developer',
      company: 'XYZ Corp',
      period: '2022 - Present',
      description: 'Worked on building scalable web applications using Vue.js and Node.js.',
    },
    {
      title: 'Backend Engineer',
      company: 'ABC Ltd',
      period: '2020 - 2022',
      description: 'Developed REST APIs and optimized database queries.',
    },
  ])

  // 🔹 Skills with Categories
  const skills = ref([
    {
      title: 'Frontend (Client-Side)',
      items: [
        { name: 'HTML', image: new URL('../assets/img/Logo/html-logo.png', import.meta.url).href },
        { name: 'CSS', image: new URL('../assets/img/Logo/css-logo.png', import.meta.url).href },
        {
          name: 'JavaScript',
          image: new URL('../assets/img/Logo/javascript-logo.png', import.meta.url).href,
        },
        { name: 'Vue.js', image: new URL('../assets/img/Logo/vue-logo.png', import.meta.url).href },
        {
          name: 'TypeScript',
          image: new URL('../assets/img/Logo/typescript-logo.png', import.meta.url).href,
        },
        {
          name: 'Bootstrap',
          image: new URL('../assets/img/Logo/bootstrap-logo.png', import.meta.url).href,
        },
      ],
    },
    {
      title: 'Backend (Server-Side)',
      items: [
        {
          name: 'Java',
          image: new URL('../assets/img/Logo/java-logo.png', import.meta.url).href,
        },
        {
          name: 'Node.js',
          image: new URL('../assets/img/Logo/nodejs-logo.png', import.meta.url).href,
        },
        // {
        //   name: 'Express',
        //   image: new URL('../assets/img/Logo/express-logo.png', import.meta.url).href,
        // },
        {
          name: 'Python',
          image: new URL('../assets/img/Logo/python-logo.png', import.meta.url).href,
        },
        {
          name: 'Django',
          image: new URL('../assets/img/Logo/django-logo.png', import.meta.url).href,
        },
        // {
        //   name: 'Flask',
        //   image: new URL('../assets/img/Logo/flask-logo.png', import.meta.url).href,
        // },
      ],
    },
    {
      title: 'Database',
      items: [
        {
          name: 'MySQL',
          image: new URL('../assets/img/Logo/mysql-logo.png', import.meta.url).href,
        },
        {
          name: 'MongoDB',
          image: new URL('../assets/img/Logo/mongo-db-logo.png', import.meta.url).href,
        },
      ],
    },
    {
      title: 'Tools & DevOps',
      items: [
        { name: 'Git', image: new URL('../assets/img/Logo/git-logo.png', import.meta.url).href },
        {
          name: 'GitHub',
          image: new URL('../assets/img/Logo/github-logo.png', import.meta.url).href,
        },
        // { name: 'CI/CD', image: new URL('../assets/img/Logo/cicd-logo.png', import.meta.url).href },
      ],
    },
    // inside personalInfo
  ])

  return {
    personalInfo,
    projects,
    experiences,
    skills,
  }
})
