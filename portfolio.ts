import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Hency Thummar",
  title: "Hi all, I'm Hency",
  description:
    "I'm a passionate Frontend and React.js Developer skilled in building modern, responsive, and high-performance web applications. I specialize in React.js, TypeScript, and modern UI libraries, focusing on creating clean, scalable, and user-friendly interfaces. I'm always eager to learn new technologies, improve performance, and collaborate on impactful projects.",
  resumeLink: "https://drive.google.com/file/d/1zY0unyXOfyVpM2qJx5fc3J16A5EC8Yoo/view",
};

export const openSource = {
  githubUserName: "hensithummar",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:thummarhensi2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/hensithummar",
  github: "https://github.com/hensithummar",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "PASSIONATE REACT.JS DEVELOPER EXPLORING FULL STACK TECHNOLOGIES",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing dynamic and responsive web applications using React.js, Next.js, and Gatsby.js"),
        emoji("⚡ Managing state efficiently with Redux and Redux Toolkit for scalable applications"),
        emoji("⚡ Building reusable UI components with Material UI, Tailwind CSS, and modern design principles"),
        emoji("⚡ Implementing secure authentication, payment gateways (Stripe), and API integrations"),
        emoji("⚡ Collaborating with designers, backend teams, and deploying apps on AWS, Vercel & Netlify"),
      ],
      softwareSkills: [
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        // { skillName: "Gatsby.js", iconifyTag: "logos:gatsby" },
        // { skillName: "Redux", iconifyTag: "logos:redux" },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};
export const SkillBars: SkillBarsType[] = [
  {
    Stack: "React.js / Next.js / Frontend Development",
    progressPercentage: "95",
  },
  {
    Stack: "JavaScript / TypeScript",
    progressPercentage: "90",
  },
  {
    Stack: "UI / UX & Design (Material UI, Tailwind CSS, Figma)",
    progressPercentage: "75",
  },
  {
    Stack: "Backend & API Integration (REST / GraphQL / Stripe)",
    progressPercentage: "80",
  },
  {
    Stack: "Cloud & Deployment (AWS, Vercel, Netlify)",
    progressPercentage: "75",
  },
  {
    Stack: "Version Control & Dev Tools (Git, Postman)",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Sutex Bank College of Computer Applications & Science",
    subHeader: "Bachelor of Computer Applications (BCA)",
    duration: "2019 – 2022",
    desc: "Completed undergraduate studies with a strong foundation in computer programming, web development, and software engineering concepts.",
    grade: "Distinction",
    descBullets: [
      "Gained practical experience in web development and database management.",
      "Developed academic projects using modern web technologies.",
      "Actively participated in coding and teamwork activities to strengthen technical and collaborative skills.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior React.js Developer",
    company: "Andropedia",
    companyLogo: "/img/icons/common/andropedia.jpg",
    date: "Jan 2024 – Present",
    desc: "Leading frontend development and managing multiple large-scale web applications using React.js, Next.js, and modern UI libraries. Collaborate closely with designers, backend teams, and QA to ensure smooth functionality, scalability, and responsive design. Integrate Stripe for payment processing and contribute to performance optimization and code reviews.",
  },
  {
    role: "Junior React.js Developer",
    company: "Webashlar Technologies",
    companyLogo: "/img/icons/common/webashlar.png",
    date: "Sep 2023 – Dec 2023",
    desc: "Worked on building and improving website user interfaces using React.js. Collaborated with designers and backend developers to ensure UI and API consistency. Contributed to adding new features, fixing bugs, and optimizing overall app performance. Gained hands-on experience with component reusability, clean code practices, and teamwork.",
  },
  {
    role: "React.js Developer",
    company: "Tagline Infotech",
    companyLogo: "/img/icons/common/tagline.jpg",
    date: "Jun 2022 – Aug 2023",
    desc: "Developed responsive and high-performance web applications using React.js. Worked on frontend development, API integration, and performance optimization. Participated in daily scrums, client meetings, and code reviews. Improved UI consistency, accessibility, and overall user experience across multiple projects.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Shrunk3D",
    desc: "Developed a complete e-commerce platform with user authentication, product management, and payment integration. Implemented secure checkout using Stripe, handled media uploads, and built a smooth admin panel using React.js and Next.js.",
    link: "https://www.shrunk3d.com/",
  },
  {
    name: "Fairyellow",
    desc: "Contributed to an advanced e-commerce platform featuring product creation, image/video uploads, and live chat between users and vendors. Improved UI performance and implemented secure authentication using React.js.",
  },
  {
    name: "Local First",
    desc: "Developed a full-scale multi-vendor e-commerce platform allowing local store listings, product management, and vendor-user communication. Built vendor and admin panels with role management and CRUD functionality using Next.js.",
  },
  {
    name: "Algo Pilot (Trading Web App)",
    desc: "Built a trading web platform supporting cryptocurrencies, Indian stock market, and forex. Implemented real-time data updates, market and limit order functionality, and advanced strategy-based trading UI using React.js.",
  },
  {
    name: "Blog Factory (CMS Admin Panel)",
    desc: "Created a content management system with nested category and article management, rich text editing, and role-based access. Designed recursive tree-view UIs and used Redux Toolkit for optimized state handling and authentication persistence.",
  },
  {
    name: "Super Admin Panel (Merchant, Bonus, SMS)",
    desc: "Developed a large-scale admin system for managing merchants, user transactions, and communication panels. Integrated real-time APIs for KPIs, role management, and analytics dashboards using React.js.",
  },
  {
    name: "QR App",
    desc: "Built a web application for generating and managing dynamic QR codes linked to products or images. Added design customization, preview, and responsive UI with React.js.",
  },
  {
    name: "Funcloud",
    desc: "Developed a website and admin panel for a 3D scanning photo booth platform. Implemented 3D model display with Three.js, delivery tracking, and interactive image management using React.js.",
  },
  {
    name: "Matching Core",
    desc: "Worked on an employee and task management platform for tracking KPIs, team progress, and activity schedules. Integrated REST APIs and improved UI usability with React.js.",
    link: "https://www.matchingcore.com/matchingcore",
  },
  {
    name: "Afeed",
    desc: "Built a social feed-based web application allowing users to create, view, and manage multimedia content. Focused on clean UI, modular components, and efficient data flow using React.js.",
  },
];


export const feedbacks: FeedbackType[] = [
  {
    name: "Ravi Savani",
    role: "developer at Andropedia",
    feedback:
      "Hency has been a key contributor to our React.js and Next.js projects. Her ability to build clean, scalable, and high-performing interfaces stands out. She consistently delivers on time, communicates effectively, and takes complete ownership of her tasks. Her leadership and mentoring skills have greatly benefited the frontend team.",
  },
  {
    name: "Karan Mehta",
    role: "Team Lead at Webashlar Technologies",
    feedback:
      "Working with Hency was an excellent experience. She has strong problem-solving skills and pays great attention to detail in UI/UX. Her understanding of React.js, API integration, and performance optimization helped our team deliver complex features seamlessly. A reliable and self-motivated developer.",
  },
  {
    name: "Ravi Undaviya",
    role: "Senior Developer at Tagline Infotech",
    feedback:
      "Hency is a highly skilled React.js developer who quickly adapts to new tools and frameworks. She handled client projects independently, from gathering requirements to deployment, maintaining professionalism throughout. Her enthusiasm for learning and teamwork makes him an asset to any organization.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hency Thummar",
  description: greetings.description,
  author: "Hency Thummar",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: ["Hency", "Hency Thummar", "Portfolio", "Hency Portfolio ", "Hency Thummar Portfolio"],
};
