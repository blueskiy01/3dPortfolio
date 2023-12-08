import { gritlab, discord, photoshop, illustrator, golang } from "../images";
import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    miro,
    react,
    tailwindcss,
    openai,
    threads,
    typescript,
    figma,
    midjourney

} from "../icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {   
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "User Experience",
    },
    {
        imageUrl: miro,
        name: "Miro",
        type: "User Experience",
    },
    {
        imageUrl: midjourney,
        name: "Midjourney",
        type: "AI",
    },
    {
        imageUrl: openai,
        name: "Artificial Intelligence tools",
        type: "AI",
    },
    {
        imageUrl: photoshop,
        name: "Adobe Photoshop",
        type: "Design",
    },
    {
        imageUrl: illustrator,
        name: "Adobe Illustrator",
        type: "Design",
    },
    {
        imageUrl: discord,
        name: "Discord",
        type: "Communication",
    },
];

export const experiences = [
    {
        title: "Full Stack Developer student",
        company_name: "grit:lab Åland Islands",
        icon: gritlab,
        iconBg: "#accbe1",
        date: "Sept 2022 - August 2024",
        points: [
            "Coding and innovation platform based on the 01.edu system",
            "Collaborating with cross-functional teams",
            "Implementing responsive design and ensuring cross-browser compatibility.", 
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/blueskiy01',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/korinlim',
    }
];

export const projects = [
   
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '',
        description: '',
        link: '',
    },
];