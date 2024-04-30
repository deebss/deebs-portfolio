import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    golang,
    docker,
    cloud,
    network,
    geniusRx,
    homeDepot,
    mobilePhone,
    java,
    kotlin, workoutBuddy, lamaEstate, portfolio,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Fullstack Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Native Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Kotlin",
        icon: kotlin,
    },
    {
        name: "Golang",
        icon: golang,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Lead Software Engineer",
        company_name: "Edge Cloud Solutions Company",
        icon: cloud,
        iconBg: "#E6DEDD",
        date: "November 2022 - Present",
        points: [
            "Conceptualized, designed, and successfully implemented a cloud-ready platform.",
            "Took on the leadership role for a team of talented front-end developers, guiding them through the creation of an intuitive user interface in React.JS + Typescript.",
            "Established an Agile/Scrum process that leveraged weekly ritual meetings, including stand-ups and grooming sessions.",
            "Successfully increased alignment across the company by establishing metrics.",
        ],
    },
    {
        title: "Lead Software Engineer",
        company_name: "Commercial Real Estate Internet Provider",
        icon: network,
        iconBg: "#383E56",
        date: "Feb 2022 - Oct 2022",
        points: [
            "Migrated a 10,000+ line legacy commercial tenant internet management system built in ASP.NET to a more modern .NET Core framework.",
            "Developed a single-page HTML microsite to enable the client to collect contact information for prospective leads and store into an internal CRM tool.",
            "Created a login portal for a hotel Wi-Fi service, allowing both guests and non-guests to access the internet after providing data such as last name, email, and room number for usage tracking.",
        ],
    },
    {
        title: "Lead Software Engineer",
        company_name: "Multinational Technology Conglomerate",
        icon: mobilePhone,
        iconBg: "#E6DEDD",
        date: "Oct 2021 - Jan 2022",
        points: [
            "Designed and implemented a management system for internet providers in developing countries.",
            "Developed a companion mobile application for Android devices to allow providers to update in real-time statuses of devices deployed to residential properties.",
        ],
    },
    {
        title: "Sr Software Engineer",
        company_name: "GeniusRx",
        icon: geniusRx,
        iconBg: "#383E56",
        date: "Jun 2020 - November 2021",
        points: [
            "Designed and implemented the primary E-Commerce platform using React.js, taking it from initial discovery to production in a short span of a few weeks by utilizing Agile methodologies.",
            "Led the front-end initiative to cultivate an environment of growth and learning among fellow engineers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "The Home Depot",
        icon: homeDepot,
        iconBg: "#E6DEDD",
        date: "Feb 2017 - Jul 2020",
        points: [
            "Managed the backend Spring Boot API responsible for coordinating and scheduling all customer deliveries originating from stores.",
            "Designed and implemented  a CI/CD pipeline solution in Pivotal Concourse and Node.JS that fully automates various processes, including deploying, running unit & end-to-end testing, and publishing releases to production environments.",
            "Developed a cross-platform mobile application in React Native for delivery drivers to review and engage with daily routes and stop details.",
            "Pioneered a product availability manager to replace an outdated system that could not meet modern business requirements. This engine calculates the quantity of a specific product available at a location by considering the number of items on-hand and those reserved for future outgoing orders.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Lama Estate",
        description:
            "Web-based platform that allows users to browse, explore, and research rentals from various providers, providing a convenient and efficient solution for vacation rental needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "sass",
                color: "green-text-gradient",
            },
            {
                name: "leaflet",
                color: "pink-text-gradient",
            },
        ],
        image: lamaEstate,
        source_code_link: "https://github.com/deebss/react-estate-ui",
    },
    {
        name: "My Portfolio Website",
        description:
            "This very website! I built it utilizing a variety of libraries I am proficient with. Feel free to interact with the various 3D objects sprinkled throughout.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "framer",
                color: "pink-text-gradient",
            },
            {
                name: "threejs",
                color: "orange-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/",
    },
    {
        name: "Workout Buddy",
        description:
            "A fullstack application that allows you to build, track, and manage workouts. The app runs on the MERN stack with a React UI and an Express API on top of MongoDB.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: workoutBuddy,
        source_code_link: "https://github.com/deebss/workout-mern-stack",
    },
];

export {services, technologies, experiences, testimonials, projects};