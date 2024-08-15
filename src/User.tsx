import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandFacebook } from "@tabler/icons-react";
const Info = {
    name: "Abhijit Das",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Student"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications. Let's connect and create something amazing together!"
}

const ProjectInfo = [
    {
        title: "Social Media App",
        desc: "Introducing a social media platform designed to showcase and share moments through captivating visual content. This app allows users to post photos and videos, apply various filters and effects, and engage with others through likes, comments, and direct messaging. With a clean, intuitive interface, it makes discovering and connecting with friends and influencers effortless. Enjoy real-time notifications to stay updated on interactions and new content. Additionally, explore curated content tailored to your interests and trends, making it easy to stay inspired. Whether you’re a casual user or a content creator, this platform offers a vibrant space for creativity and social interaction.",
        image: "Instagram.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "Shadcn-UI"],
        link: "https://social-media-app-61r2.onrender.com/",
        github: "https://github.com/Abhijit2244/social-media-app/"
    },
    {
        title: "Abhijit Portfolio",
        desc: "Welcome to my portfolio website! Designed to be fully mobile-responsive, this site ensures that my work shines no matter the device you're using—whether on a smartphone, tablet, or desktop. With a sleek, modern design, it highlights my projects, skills, and achievements in a way that's both visually appealing and easy to navigate. Explore my portfolio with a smooth, intuitive interface and discover how my unique talents and experience can bring value to your projects. I’ve tailored every aspect of this site to ensure a seamless experience, allowing you to view my work and get in touch with me effortlessly, wherever you are.",
        image: "Portfolio.png",
        live: true,
        technologies: ["React", "Mantine-UI","Firebase","Tailwind", "Redux", "Heroicons"],
        link: "https://social-media-app-61r2.onrender.com/",
        github: "https://github.com/Abhijit2244/abhijit-portfolio/"
    },
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS","JavaScript", "React JS", "Redux", "Tailwind CSS"]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman"]
    }
]
const socialLinks = [
    { link: "https://github.com/Abhijit2244", icon: IconBrandGithub },
    { link: "https://leetcode.com/u/jeetabhi055/", icon: IconBrandLeetcode },
    { link: "https://www.linkedin.com/in/abhijitdas1065/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/abhijit_das9038/", icon: IconBrandInstagram },
    { link: "https://www.facebook.com/profile.php?id=100011382155748", icon: IconBrandFacebook },
];


const ExperienceInfo = [
    {
        role: " ",
        company: " ",
        date: " ",
        desc: "",
        skills: []
    },
]

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };