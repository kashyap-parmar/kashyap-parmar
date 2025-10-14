import { BlogImg, ProjectImg } from "@/assets"

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
    {
        title: "Blog",
        url: 'blog'
    },
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
        heading: "15+",
        desc: "Projects Completed",
        color: "#22c55e"
    },
    {
        icon: "mdi:people-outline",
        heading: "8+",
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
        title: "Database & Storage",
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
        title: "E-Commerce Platform",
        description: "Full-stack MERN application with payment integration, inventory management, and admin dashboard.",
        image: ProjectImg,
        alt: "E-Commerce",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        github: "#",
        live: "#",
        category: "Full Stack",
        featured: true,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 2,
        title: "Social Media Dashboard",
        description: "Real-time analytics dashboard for social media management with data visualization.",
        image: ProjectImg,
        alt: "Social Media Dashboard",
        tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
        github: "#",
        live: "#",
        category: "Frontend",
        featured: true,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 3,
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates and team collaboration.",
        image: ProjectImg,
        alt: "Task Management",
        tech: ["React", "Socket.io", "Express", "MongoDB"],
        github: "#",
        live: "#",
        category: "Full Stack",
        featured: false,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 4,
        title: "Weather Forecast App",
        description: "Modern weather application with location-based forecasts and interactive maps.",
        image: ProjectImg,
        alt: "Weather Forecast",
        tech: ["React", "API Integration", "Tailwind CSS"],
        github: "#",
        live: "#",
        category: "Frontend",
        featured: false,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 5,
        title: "Blog Platform",
        description: "Full-featured blogging platform with rich text editor and user authentication.",
        image: ProjectImg,
        alt: "Weather Forecast",
        tech: ["Next.js", "MongoDB", "JWT", "Tailwind CSS"],
        github: "#",
        live: "#",
        category: "Full Stack",
        featured: true,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
            }
        ]
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Responsive portfolio website with modern animations and optimized performance.",
        image: ProjectImg,
        alt: "Weather Forecast",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "#",
        live: "#",
        category: "Frontend",
        featured: false,
        keyFeatures: [
            "User Authentication & Authorization",
            "Shopping Cart & Wishlist",
            "Inventory Management",
            "Admin Dashboard",
            "Search & Filtering",
            "Real-time Updates",
            "Secure Payment Processing",
            "Order Tracking",
            "Product Reviews & Ratings",
            "Responsive Design"
        ],
        challengeSolutions: [
            {
                title: "Real-time Inventory Management",
                desc: "Implemented WebSocket connections to ensure inventory updates are reflected across all user sessions immediately, preventing overselling and maintaining data consistency."
            },
            {
                title: "Payment Security",
                desc: "Integrated Stripe's secure payment processing with proper error handling, webhook management, and PCI compliance to ensure safe transactions."
            },
            {
                title: "Performance Optimization",
                desc: "Optimized database queries, implemented proper indexing, and used Redis caching to handle high traffic loads efficiently."
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


