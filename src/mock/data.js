import { BlogImg, ProjectImg } from "@/assets"
import DentalSemCRMImg from "../../public/images/dental-sem-crm.png"
import mxmnews from "../../public/images/mxm-news.png"
import moustachescapes from "../../public/images/moustachescapes.png"
import slafs from "../../public/images/slafs.png"

// -----------------------------------------------------------------------------------

export const email = process.env.NEXT_PUBLIC_EMAIL;
export const name = process.env.NEXT_PUBLIC_NAME;
export const phone = process.env.NEXT_PUBLIC_PHONE;
export const city = process.env.NEXT_PUBLIC_CITY;
export const country = process.env.NEXT_PUBLIC_COUNTRY;
export const github = process.env.NEXT_PUBLIC_GITHUB;
export const linkedin = process.env.NEXT_PUBLIC_LINKEDIN;

export const navbarData = [
    {
        title: "Home",
        url: 'hero'
    },
    {
        title: "About",
        url: 'about'
    },
    {
        title: "Skills",
        url: 'skills'
    },
    {
        title: "Projects",
        url: 'projects'
    },
    {
        title: "Experience",
        url: 'experience'
    },
    // {
    //     title: "Blog",
    //     url: 'blog'
    // },
    {
        title: "Contact",
        url: 'contact'
    },

]

// ---------------------------------------------------

export const techIconsHeroSection = [
    {
        icon: "skill-icons:react-dark",
        top: "0%",
        left: "50%",
        translate: "-50%, 0",
        delay: 5
    },
    {
        icon: "skill-icons:nodejs-dark",
        top: "25%",
        left: "0%",
        translate: "0, 0",
        delay: 0.8
    },
    {
        icon: "skill-icons:mongodb",
        bottom: "20%",
        left: "10%",
        translate: "0, 0",
        delay: 2
    },
    {
        icon: "skill-icons:javascript",
        top: "25%",
        right: "0%",
        translate: "0, 0",
        delay: 3
    },
    {
        icon: "skill-icons:tailwindcss-dark",
        bottom: "20%",
        right: "10%",
        translate: "0, 0",
        delay: 1
    },
    {
        icon: "skill-icons:git",
        bottom: "-5%",
        left: "50%",
        translate: "-50%, 0",
        delay: 0
    },
];

// ---------------------------------------------------

export const aboutMeBigCard = [
    {
        icon: "iconoir:calendar",
        heading: "3+",
        desc: "Years Experience",
        color: "#3b82f6"
    },
    {
        icon: "tabler:code",
        heading: "7+",
        desc: "Projects Completed",
        color: "#22c55e"
    },
    {
        icon: "mdi:people-outline",
        heading: "5+",
        desc: "Happy Client",
        color: "#a855f7"
    },
    {
        icon: "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow",
        heading: "24/7",
        desc: "Support Available",
        color: "#f97316"
    },
]

// ---------------------------------------------------

export const aboutMeSmallCard = [
    {
        icon: "material-symbols:code-rounded",
        heading: "Clean Code",
        desc: "Maintainable & Scalable",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: "hugeicons:energy",
        heading: "Fast Delivery",
        desc: "On Time, Every Time",
        color: "text-green-500",
        bgColor: "bg-green-500/10 "
    },
    {
        icon: "weui:like-outlined",
        heading: "User Focused",
        desc: "Exceptional UX",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10 "
    },
    {
        icon: "material-symbols:shield-outline-rounded",
        heading: "Secure",
        desc: "Industry Standards",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10 "
    },
]

// ---------------------------------------------------


export const FeaturedSkillsData = [
    {
        title: "Frontend Development",
        data: [
            {
                icon: "uim:react",
                heading: "React.js",
                level: "Expert",
                type: "Library"
            },
            {
                icon: "ri:nextjs-line",
                heading: "Next.js",
                level: "Advanced",
                type: "Library"
            },
            {
                icon: "proicons:typescript",
                heading: "Typescript",
                level: "Advanced",
                type: "Language"
            },
            {
                icon: "mdi:tailwind",
                heading: "Tailwind CSS",
                level: "Advanced",
                type: "Framework"
            },
            {
                icon: "simple-icons:mui",
                heading: "MUI component",
                level: "Advanced",
                type: "Library"
            },
            {
                icon: "proicons:javascript",
                heading: "Javascript",
                level: "Expert",
                type: "Language"
            },
            {
                icon: "ic:round-code",
                heading: "HTML5/CSS3",
                level: "Expert",
                type: "Language"
            },
        ]
    },
    {
        title: "Backend Development",
        data: [
            {
                icon: "lineicons:nodejs",
                heading: "Node.js",
                level: "Advanced",
                type: "Environment"
            },
            {
                icon: "lineicons:expressjs",
                heading: "Express.js",
                level: "Advanced",
                type: "Framework"
            },
            {
                icon: "jam:world",
                heading: "REST APIs",
                level: "Expert",
                type: "API"
            },
            {
                icon: "mdi:graphql",
                heading: "GraphQL",
                level: "Intermediate",
                type: "API Language"
            },
            {
                icon: "cib:socket-io",
                heading: "Socket.io",
                level: "Advanced",
                type: "Communication library"
            },
            {
                icon: "ic:outline-shield",
                heading: "JWT",
                level: "Intermediate",
                type: "Protocol"
            },
        ]
    },
    {
        title: "Database & ORM / ODM",
        data: [
            {
                icon: "teenyicons:mongodb-outline",
                heading: "Mongo Db",
                level: "Advanced",
                type: "Database"
            },
            {
                icon: "simple-icons:postgresql",
                heading: "PostgreSQL",
                level: "Intermediate",
                type: "Database"
            },
            {
                icon: "simple-icons:mongoose",
                heading: "Mongoose",
                level: "Advanced",
                type: "ODM"
            },
            {
                icon: "tabler:brand-prisma",
                heading: "Prisma",
                level: "Intermediate",
                type: "ORM"
            },
        ]
    },
    {
        title: "Tools & DevOps",
        data: [
            {
                icon: "iconoir:git-fork",
                heading: "GitHub",
                level: "Advanced",
                type: "Version control"
            },
            {
                icon: "streamline-logos:docker-logo",
                heading: "Docker",
                level: "Intermediate",
                type: "Containrized Platform"
            },
            {
                icon: "material-symbols:cloud-outline",
                heading: "AWS",
                level: "Intermediate",
                type: "Cloud Platform"
            },
            {
                icon: "simple-icons:render",
                heading: "Render",
                level: "Advanced",
                type: "Cloud Platform"
            },
            {
                icon: "cib:postman",
                heading: "Postman",
                level: "Advanced",
                type: "API Testing Tool"
            },
            {
                icon: "octicon:vscode-48",
                heading: "VS Code",
                level: "Expert",
                type: "Text Editor"
            },
        ]
    }
]

// ---------------------------------------------------

export const SampleProjectsData = [
    {
        id: 1,
        title: "Dental Sem CRM",
        company: "Hupp Technologies Pvt Ltd",
        companyUrl: "https://hupp.tech/",
        role: "Frontend Developer (React JS)",
        description: `<p>The Dental SEM CRM is an advanced Customer Relationship Management platform built to streamline dental clinic operations and enhance patient engagement. As a Frontend Developer, I was responsible for designing and developing an intuitive and responsive user interface using React.js, ensuring a seamless user experience across all devices.</p>

<p>The CRM enables clinics to efficiently manage their daily workflow — from treatment tracking and appointment booking to lead management and payment handling. It includes a structured, step-by-step follow-up system, allowing users to monitor the progress of each lead through various stages (such as inquiry, consultation, treatment, and follow-up). This feature helps dental professionals track patient journeys and ensure timely engagement.</p>

<p>A robust reporting and analytics module was also integrated to provide insights into lead conversions, treatment statistics, and revenue performance. The payment section supports secure handling of transactions, ensuring transparency and accuracy in clinic finances.</p>

<p>Security and role management were key focuses of this project. The entire system was built on a Role-Based Access Control (RBAC) architecture, ensuring that each user — whether an admin, doctor, or staff member — had specific permissions aligned with their responsibilities.</p>

<p>Overall, the Dental SEM CRM successfully improved clinic efficiency, patient follow-up consistency, and data-driven decision-making, offering a complete solution for modern dental practices.</p>`,
        image: DentalSemCRMImg,
        alt: "Dental SEM CRM",
        tech: ["React JS", "Redux", "REST APIs", "JavaScript", "CSS3", "HTML5"],
        github: null,
        live: "https://www.dental-sem.co.uk/",
        category: "Frontend",
        projectCategory: "CRM software",
        featured: true,
        keyFeatures: [
            "User Authentication & Authorization",
            "Lead & Appointment Management",
            "Step-by-Step Follow-Up System",
            "Treatment Management",
            "Audit log management",
            "Role-Based Access Control (RBAC)",
            "Reports & Analytics Dashboard",
            "Responsive Frontend UI",
            "Notification & Reminder System",
            "Search & Filter Functionality",
            "Scalable Architecture",
        ],
        challengeSolutions: [
            {
                title: "Dynamic Lead Tracking & Stage Management",
                desc: "Developed a flexible lead tracking interface that updates in real-time as users move leads between different stages (Inquiry → Consultation → Treatment → Follow-up). Implemented efficient state management using Redux to maintain smooth UI updates without performance lag."
            },
            {
                title: "Role-Based Access Control (RBAC) Implementation",
                desc: "Configured a scalable RBAC structure that restricted feature visibility and actions based on user roles such as Admin, Doctor, and Staff. This ensured secure data handling and a clear workflow separation within the CRM."
            },
            {
                title: "Data Visualization & Reporting",
                desc: "Integrated dynamic chart components for visualizing treatment, lead, and payment reports. Leveraged chart libraries and optimized API integration for fast, responsive analytics rendering across devices."
            },
            {
                title: "Appointment & Follow-Up Automation",
                desc: "Created an interactive appointment scheduling and follow-up module with real-time status updates. Added reminder logic to reduce missed appointments and enhance patient engagement."
            },
            {
                title: "Frontend Performance Optimization",
                desc: "Optimized React components, reduced unnecessary re-renders, and implemented lazy loading for heavy UI sections, improving load times and overall application performance."
            }
        ]

    },
    {
        id: 2,
        title: "SBA Loans",
        company: "Jain Bhavesh Solution",
        companyUrl: "https://www.jbsolutions.in/",
        role: "Full Stack Developer (Next.js)",
        description: `<p>The SBA Loans CRM is a comprehensive banking loan management platform designed to automate and streamline the entire loan approval lifecycle for financial institutions. This system is primarily used by bank managers and account executives to process, verify, and approve loan requests with complete transparency and efficiency.</p>

<p>Developed entirely with Next.js, this project includes both frontend and backend functionalities, offering a secure and seamless experience. The CRM manages everything from initial loan requests to final approval, with multiple verification stages such as document upload, pre-qualification, eligibility check, and approval or rejection. Each loan request moves through a defined workflow that ensures compliance and accountability at every stage.</p>

<p>I integrated Google Drive API to handle document uploads and storage securely, allowing the bank staff to access and verify borrower documents directly through the system without manual file handling. The backend APIs were built to support authentication, data validation, and stage transitions, ensuring smooth communication between users and system logic.</p>

<p>With a focus on automation and data integrity, the SBA Loans CRM enhances operational speed, minimizes manual intervention, and provides a transparent overview of every loan request. It serves as a powerful solution for banking professionals to handle loan processing efficiently and securely.</p>`,
        image: ProjectImg,
        alt: "SBA Loans, CRM",
        tech: ["Next.js", "Node.js", "Express JS", "MongoDB", "REST APIs", "Google Drive API", "CSS3", "HTML5"],
        github: null,
        live: null,
        category: "Full Stack",
        projectCategory: "CRM software",
        featured: true,
        confidential: true,
        keyFeatures: [
            "Loan Request & Tracking System",
            "Multi-Stage Loan Approval Workflow",
            "Document Verification & Management",
            "Google Drive Integration for Secure File Handling",
            "Role-Based Access for Managers & Staff",
            "Real-Time Loan Status Updates",
            "Applicant Eligibility & Qualification Check",
            "Automated Notifications & Alerts",
            "Responsive Dashboard Interface",
            "Secure Authentication & Authorization"
        ],
        challengeSolutions: [
            {
                title: "Multi-Stage Loan Workflow Management",
                desc: "Developed a dynamic stage-based workflow to manage loan requests across multiple stages like Pre-Qualification, Verification, and Approval. Ensured seamless transitions with clear progress tracking for each request."
            },
            {
                title: "Google Drive API Integration",
                desc: "Integrated Google Drive API to handle document uploads and verification securely, allowing bank staff to access borrower files directly through the CRM with role-based access control."
            },
            {
                title: "Backend API & Data Validation",
                desc: "Built custom Next.js APIs to handle form submissions, validation, and stage updates with robust error handling and secure data exchange between frontend and backend."
            },
            {
                title: "Access Control & Authentication",
                desc: "Implemented secure authentication and role-based authorization for bank managers, staff, and admin users to ensure data privacy and prevent unauthorized access."
            },
            {
                title: "Performance & Scalability",
                desc: "Optimized API responses, database queries, and caching strategies to maintain fast performance and scalability even under high data load."
            }
        ]
    },
    {
        id: 3,
        title: "MXM News",
        company: "Jain Bhavesh Solution",
        companyUrl: "https://www.jbsolutions.in/",
        role: "Full Stack Developer (Next.js)",
        description: `<p>MXM News is a modern news aggregation platform built with Next.js that curates and displays trending articles from multiple reliable sources and publishers. The platform delivers real-time news updates in a visually engaging card layout, categorized into various sections like Entertainment, Sports, Technology, and Business.</p>

<p>Users can sign up and personalize their news experience by selecting preferred categories, saving articles, and receiving personalized recommendations based on their reading interests. I implemented secure user authentication and state management to maintain user sessions and preferences efficiently.</p>

<p>A custom push notification system was also integrated to keep users informed of breaking news or updates in their chosen categories. The project features a responsive design with smooth navigation and optimized API handling to ensure fast loading and performance.</p>

<p>Overall, MXM News provides a dynamic and personalized news-reading experience, merging real-time data aggregation with intelligent user preference tracking for a smarter and more engaging platform.</p>`,
        image: mxmnews,
        alt: "MXM news Aggregator App",
        tech: ["Next.js", "Node.js", "MongoDB", "REST APIs", "CSS3", "Firebase Cloud Messaging"],
        github: null,
        live: "https://mxmnews.com/",
        category: "Full Stack",
        projectCategory: "News Aggregation Platform",
        featured: false,
        keyFeatures: [
            "Real-Time News Aggregation",
            "Category-Based News Filtering",
            "Personalized User Dashboard",
            "User Authentication & Authorization",
            "Save & Bookmark News Articles",
            "Push Notification System for Breaking News",
            "Responsive Card-Based UI Design",
            "Interest-Based News Recommendations",
            "Optimized API Handling & Caching",
            "Dark Mode Support for Better UX"
        ],
        challengeSolutions: [
            {
                title: "News Aggregation from Multiple Sources",
                desc: "Integrated third-party APIs to fetch and combine articles from various publishers, ensuring up-to-date and relevant content while maintaining performance through API rate optimization."
            },
            {
                title: "Personalized News Recommendations",
                desc: "Developed an interest-based recommendation system that filters and displays news according to each user’s saved categories and reading history."
            },
            {
                title: "Push Notification System",
                desc: "Implemented Firebase Cloud Messaging to send real-time push notifications for breaking news and category-specific updates, improving user engagement."
            },
            {
                title: "User Authentication & Data Management",
                desc: "Integrated secure login and registration using JWT-based authentication. Stored user preferences, saved news, and selected categories in MongoDB for persistent personalization."
            },
            {
                title: "Performance Optimization & UI Responsiveness",
                desc: "Used Next.js dynamic rendering and caching to reduce API load and implemented responsive, mobile-friendly card layouts for a seamless reading experience across devices."
            }
        ]
    },
    {
        id: 4,
        title: "Moustachescapes – Hotel Booking Platform",
        company: "Exceleur Services Pvt Ltd",
        companyUrl: "https://exceleur.in/",
        role: "Frontend Developer (Next JS)",
        description: `<p>Moustachescapes is a fully responsive and SEO-optimized hotel booking platform developed using Next.js and Tailwind CSS. The platform allows users to explore and book luxury stays across India's most popular travel destinations including Udaipur, Manali, Jaipur, Goa, Kashmir, ETC.</p> 

<p>The website provides an immersive experience with detailed hotel pages featuring room types, amenities, photo galleries, nearby attractions, and food inclusions/exclusions. I was responsible for building a smooth, responsive user interface and implementing Server-Side Rendering (SSR) for improved SEO and faster page loads.</p>

<p>A secure payment gateway was integrated using Airpay, ensuring smooth and safe online transactions for customers. The platform also includes a dedicated blog section to share travel insights and destination guides, enhancing content-driven marketing for organic reach.</p>

<p>With its visually appealing design, optimized performance, and user-centric structure, Moustachescapes helps travelers find, compare, and book the best luxury accommodations directly from the official website.</p>`,
        image: moustachescapes,
        alt: "Moustachescapes - Hotel Booking Website",
        tech: ["Next.js", "Tailwind CSS", "Airpay Payment Gateway", "REST APIs", "JavaScript", "SEO Optimization", "HTML5"],
        github: null,
        live: "https://moustachescapes.com/",
        category: "Frontend",
        projectCategory: "Hotel Booking Platform",
        featured: true,
        keyFeatures: [
            "Hotel Search & Booking System",
            "Location-Based Hotel Listing",
            "Detailed Hotel & Room Information",
            "Amenities, Discounts & Offers Display",
            "Integrated Airpay Payment Gateway",
            "Responsive & Mobile-Friendly UI",
            "SEO-Optimized Architecture with SSR",
            "Blog Section for Travel Guides",
            "High-Quality Image Gallery for Hotels",
            "Attraction & Destination Highlights"
        ],
        challengeSolutions: [
            {
                title: "SEO Optimization with SSR",
                desc: "Implemented Server-Side Rendering (SSR) in Next.js to improve website performance and SEO ranking, ensuring faster load times and better visibility on search engines."
            },
            {
                title: "Dynamic Hotel & Location Management",
                desc: "Built dynamic pages for multiple hotel destinations with reusable components, allowing the admin to easily add or modify hotels and attractions."
            },
            {
                title: "Payment Integration with Airpay",
                desc: "Integrated Airpay payment gateway to enable secure and reliable online transactions with proper error handling and transaction validation."
            },
            {
                title: "Responsive UI/UX Development",
                desc: "Designed and developed a fully responsive layout using Tailwind CSS to ensure seamless user experience across all devices and screen sizes."
            },
            {
                title: "Image Gallery & Blog Implementation",
                desc: "Added interactive image galleries for hotel rooms and integrated a content-driven blog section to improve user engagement and organic SEO reach."
            }
        ]
    },
    {
        id: 5,
        title: "SLA-FS – Financial Services Website",
        company: "Exceleur Services Pvt Ltd",
        companyUrl: "https://exceleur.in/",
        role: "Frontend Developer (Next JS)",
        description: `<p>SLA-FS is a finance company website built to showcase their services and help clients make informed investment decisions. The platform highlights various financial solutions, including personalized budgeting, wealth creation and management, children's education planning, retirement planning, emergency fund management, and risk mitigation strategies. It also focuses on empowering women to achieve financial independence.</p>

<p>Developed using Next.js with SCSS, the website emphasizes a smooth and engaging user experience through animated interactions. To address performance issues caused by the animation library, I implemented lazy loading and Server-Side Rendering (SSR), significantly improving page load speed and responsiveness.</p>

<p>Although the website primarily serves as a portfolio and service showcase, it effectively communicates SLA-FS's expertise and builds trust with potential clients. The combination of modern UI/UX, optimized performance, and informative content ensures a professional and engaging digital presence for the company.</p>`,
        image: slafs,
        alt: "Financial Services Website",
        tech: ["Next.js", "SCSS", "JavaScript", "Animations Library", "SSR Optimization", "Lazy Loading"],
        github: null,
        live: "https://slafs.in/",
        category: "Frontend",
        projectCategory: "Financial Services Website",
        featured: false,
        keyFeatures: [
            "Showcase of Financial Services",
            "Custom Budgeting & Lifestyle Planning",
            "Children's Education & Retirement Planning",
            "Wealth Creation & Management Insights",
            "Risk Mitigation Guidance",
            "Interactive Animations for Better UX",
            "Server-Side Rendering (SSR) for Performance",
            "Lazy Loading Implementation",
            "Responsive & Mobile-Friendly Design",
            "Informative & Professional Layout"
        ],
        challengeSolutions: [
            {
                title: "Performance Issues due to Animations",
                desc: "The animations library enhanced UX but caused slow page loads. I implemented lazy loading for heavy components and optimized rendering to improve overall page speed."
            },
            {
                title: "SSR Implementation",
                desc: "Applied Server-Side Rendering in Next.js to ensure faster initial load, better SEO, and improved performance across all devices."
            },
            {
                title: "Responsive & Engaging UI",
                desc: "Designed a clean, responsive layout using SCSS, ensuring a smooth browsing experience across desktops, tablets, and mobile devices."
            },
            {
                title: "Content Organization for Clarity",
                desc: "Structured the website to highlight key services clearly and professionally, making it easy for potential clients to understand SLA-FS's offerings."
            },
            {
                title: "Optimized UX with Animations",
                desc: "Added subtle animations to enhance user interaction while keeping performance in check through optimization techniques."
            }
        ]
    },
    {
        id: 6,
        title: "Gamerji Fantasy Sport",
        company: "Exceleur Services Pvt Ltd",
        companyUrl: "https://exceleur.in/",
        role: "Full stack Developer (MERN Stack)",
        description: `<p>Gamerji Fantasy Sport is a SaaS-based fantasy gaming platform where users participate in real-time cricket-based games and other gambling activities. I specifically worked on the Picker (Picker) Game module, where users can create their own teams and compete according to Picker (Picker) Game rules in either public or private matches.</p>

<p>As a dedicated MERN stack developer, I built both the frontend and backend for managing private and public Picker (Picker) flows, including database management, admin panel functionalities, and real-time game updates. Socket.IO was integrated to handle real-time data transfer, ensuring smooth gameplay and instant updates. The platform also included payment gateway integration for managing deposits and winnings.</p>

<p>This project allowed users to enjoy interactive fantasy gaming experiences with secure, real-time operations and a fully managed administrative workflow.</p>`,
        image: ProjectImg,
        alt: "Fantasy Sports Platform",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "CSS", "REST APIs", "Payment Gateway Integration"],
        github: null,
        live: null,
        category: "Full Stack",
        projectCategory: "SAAS-based Fantasy Sports Platform",
        featured: true,
        underDevelopment: true,
        keyFeatures: [
            "Fantasy Cricket & Gambling Platform",
            "Picker Game: Public & Private Matches",
            "Team Creation & Management",
            "Real-Time Game Updates with Socket.IO",
            "Admin Panel for Public Picker Creation",
            "Frontend & Backend MERN Stack Development",
            "Database Design & Management",
            "Secure Payment Gateway Integration",
            "Interactive & Responsive UI",
            "Real-Time Score & Event Tracking"
        ],
        challengeSolutions: [
            {
                title: "Real-Time Gameplay Management",
                desc: "Integrated Socket.IO to handle instant updates for game events, team scores, and player actions, ensuring smooth and synchronized gameplay for all users."
            },
            {
                title: "Private & Public Picker Flow",
                desc: "Developed dynamic logic to allow users to create private matches and participate in public Pickers generated by the admin, maintaining proper access control and game rules."
            },
            {
                title: "MERN Fullstack Development",
                desc: "Built frontend and backend components using React.js, Node.js, Express, and MongoDB, ensuring seamless integration and data consistency across the platform."
            },
            {
                title: "Admin Panel Functionality",
                desc: "Created an admin panel to manage public Picker games, monitor user activity, and enforce game rules efficiently."
            },
            {
                title: "Payment Gateway Integration",
                desc: "Integrated a payment system to handle deposits and winnings securely, ensuring reliable transactions for all users."
            }
        ]
    },
    {
        id: 7,
        title: "PROAITS-CRM",
        company: "Exceleur Services Pvt Ltd",
        companyUrl: "https://exceleur.in/",
        role: "Backend Developer (PostgreSQL)",
        description: `<p>PROAITS is a CRM platform designed to automate and optimize the hiring process for multiple companies through a microservices-based backend architecture. It enables companies to manage recruitment workflows including company profiles, contacts, jobs, and candidates efficiently.</p>

<p>Each module — Company, Company Contacts, Jobs, and Candidates — features complete CRUD operations with Role-Based Access Control (RBAC). The system includes advanced capabilities such as audit logging, analytics and reporting, backend-driven filtering and pagination, push notifications, and global plus Boolean search functionality. Additionally, it supports AI-powered resume parsing using Python and integrates Outlook email for seamless communication across modules.</p>

<p>We are expanding the platform with AI-driven features like automated screening, candidate communication, and performance-based filtering.</p>

<p>As a backend developer, I worked on architecting and developing the microservices using Node.js with TypeScript, Express.js, and PostgreSQL with Prisma ORM. I also implemented Docker for containerization and set up CI/CD pipelines for automated deployment and scalability.</p>`,
        image: ProjectImg,
        alt: "Hiring CRM System",
        tech: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "CI/CD", "Microservices", "Outlook Integration", "Python (AI Resume Parsing)"],
        github: null,
        live: null,
        category: "Backend",
        projectCategory: "CRM software - Hiring management",
        featured: true,
        underDevelopment: true,
        keyFeatures: [
            "Microservices-Based Backend Architecture",
            "Role-Based Access Control (RBAC)",
            "Comprehensive CRUD Operations for All Modules",
            "Audit Logs and Reporting with Analytics",
            "Backend-Driven Filtering and Pagination",
            "Push Notifications System",
            "Global and Boolean Search (AND, OR, NOT)",
            "AI-Powered Resume Parsing (Python Integration)",
            "Outlook Email Integration for Communication",
            "CI/CD Deployment with Docker"
        ],
        challengeSolutions: [
            {
                title: "Scalable Microservices Architecture",
                desc: "Implemented modular backend services for independent deployment and scaling of core CRM modules like jobs, candidates, and companies."
            },
            {
                title: "AI Resume Parsing",
                desc: "Integrated Python-based AI model for resume parsing, enabling structured data extraction and faster candidate profiling."
            },
            {
                title: "Advanced Search and Filtering",
                desc: "Developed complex backend logic for global and Boolean search functionality, allowing efficient filtering of records across multiple modules."
            },
            {
                title: "RBAC and Audit Logs",
                desc: "Ensured secure user access and accountability by implementing role-based permissions and maintaining detailed audit logs of all user actions."
            },
            {
                title: "Outlook Integration & Automation",
                desc: "Integrated Outlook APIs to manage candidate and client communications directly from within the CRM ecosystem."
            },
            {
                title: "CI/CD and Docker Deployment",
                desc: "Configured Dockerized services with continuous integration and deployment pipelines for automated and consistent delivery."
            }
        ]
    }
]

// ---------------------------------------------------

export const workExpSection = [
    {
        designation: "Senior Full Stack Developer",
        startYear: "2024",
        endYear: "2025",
        companyName: "Exceleur services Pvt Ltd",
        companyUrl: "https://exceleur.in/",
        desc: "Worked as a Senior Full Stack Developer, leading projects and mentoring junior developers to enhance team productivity and collaboration. Managed microservices architecture and CI/CD pipelines with Docker for seamless deployments. Gained experience with relational databases (PostgreSQL) using Prisma ORM, managing cross-service database structures efficiently. Handled AWS deployments with logging and monitoring, ensuring high availability and reliability. Worked on multiple client projects simultaneously as a dedicated developer, converting client requirements into technical solutions to achieve their goals. Implemented Outlook email integration and improved overall project architecture while strengthening client communication and project management skills.",
        keyAchievements: [
            "Led projects and mentored junior developers, improving team efficiency.",
            "Managed microservices architecture and implemented CI/CD pipelines with Docker.",
            "Designed and maintained PostgreSQL databases using Prisma ORM across services.",
            "Handled AWS deployments with logging, monitoring, and high availability.",
            "Converted client requirements into technical solutions, ensuring successful delivery.",
            "Implemented Outlook email integration and other client-specific features.",
            "Managed multiple projects simultaneously, strengthening client communication skills."
        ],
        skillsFromExp: [
            "Micro-services", "JIRA", "PostgreSQL", "Prisma ORM", "Team Leadership", "AWS", "Docker", "CI/CD"
        ]
    },
    {
        designation: "Full Stack Developer",
        startYear: "2023",
        endYear: "2024",
        companyName: "Exceleur services Pvt Ltd",
        companyUrl: "https://exceleur.in/",
        desc: "Worked as the solo full stack developer managing projects from scratch to deployment, handling both frontend and backend. Built SEO-friendly, high-performance web applications using Next.js (SSR & SSG) for optimal visibility. Developed backend APIs with Node.js, Express, MongoDB, and TypeScript, ensuring scalable and maintainable architecture. Designed interactive, user-friendly interfaces with Tailwind CSS, including smooth animations and responsive layouts to enhance overall UX. Managed project timelines, integrated APIs independently, and provided technical solutions to meet business requirements.",
        keyAchievements: [
            "Built full stack web applications using Next.js, Tailwind CSS, Node.js, Express, MongoDB, and TypeScript.",
            "Developed SEO-friendly websites with SSR and SSG for better search engine visibility.",
            "Designed interactive, user-friendly interfaces with animations and smooth UX.",
            "Created and integrated REST APIs for seamless frontend-backend communication.",
            "Managed entire projects from scratch to deployment, ensuring timelines and deadlines were met.",
            "Provided technical solutions and optimizations to meet business requirements.",
            "Ensured scalable and maintainable project architecture across frontend and backend."
        ],
        skillsFromExp: [
            "Next js", "Tailwind CSS", "Node js", "Express", "MongoDB", "Git", "Github", "TypeScript", "Trello"
        ]
    },
    {
        designation: "Frontend Developer",
        startYear: "2022",
        endYear: "2023",
        companyName: "Hupp Technology Pvt Ltd",
        companyUrl: "https://hupp.tech/",
        desc: "I worked extensively with React.js, where I learned the fundamentals of building scalable and maintainable frontend applications. This experience helped me understand industry standards, clean code practices, and project management workflows. I gained hands-on experience in collaborating with teams, organizing code structure efficiently, and delivering user-friendly interfaces in a professional development environment.",
        keyAchievements: [
            "Built responsive and reusable UI components using React.js",
            "Improved app performance through optimized rendering.",
            "Integrated REST APIs for smooth frontend-backend communication",
            "Followed clean code and scalable project structure practices",
            "Collaborated with team members using Git and Agile workflow.",
            "Gained strong understanding of real-world frontend development standards."
        ],
        skillsFromExp: [
            "React", "MUI", "REST APIs", "Git", "Gitlab", "CSS3", "HTML5"
        ]
    }
]

// ---------------------------------------------------

export const SampleBlogData = [
    {
        id: 1,
        img: BlogImg,
        alt: "BlogImg",
        uploadDate: "December 15, 2024",
        readTime: "8 min",
        title: "Building Scalable MERN Applications: Best Practices",
        desc: "Learn the essential patterns and practices for creating maintainable and scalable MERN stack applications.",
        category: "MERN",
        view: "4",
        like: "5",
        BlogAuthor: "Kashyap Parmar",
        tags: ["React", "Express", "Portfolio", "Learning", "Finance", "AI"],
        language: ["React", "Node", "Express", "Mongo", "Strapi"]
    },
    {
        id: 2,
        img: BlogImg,
        alt: "BlogImg",
        uploadDate: "December 15, 2024",
        readTime: "8 min",
        title: "Modern React Development: Hooks and Performance",
        desc: "Learn the essential patterns and practices for creating maintainable and scalable MERN stack applications.",
        category: "Frontend",
        view: "4",
        like: "5",
        BlogAuthor: "Kashyap Parmar",
        tags: ["React", "Express", "Portfolio", "Learning", "Finance", "AI"],
        language: ["React", "Node", "Express", "Mongo", "Strapi"]
    },
    {
        id: 3,
        img: BlogImg,
        alt: "BlogImg",
        uploadDate: "December 15, 2024",
        readTime: "8 min",
        title: "API Design Principles for Node.js Applications",
        desc: "Learn the essential patterns and practices for creating maintainable and scalable MERN stack applications.",
        category: "Backend",
        view: "4",
        like: "5",
        BlogAuthor: "Kashyap Parmar",
        tags: ["React", "Express", "Portfolio", "Learning", "Finance", "AI"],
        language: ["React", "Node", "Express", "Mongo", "Strapi"]
    }
]

// ---------------------------------------------------


