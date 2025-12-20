// Data Structure for Dynamic Content
const websiteData = {
    personal: {
        name: "Your Name",
        tagline: "Cybersecurity Expert | Full Stack Developer | Entrepreneur",
        email: "your.email@example.com",
        phone: "+1234567890",
        location: "Your City, Country",
        bio: "Passionate about cybersecurity, technology innovation, and building impactful solutions. With expertise spanning from penetration testing to full-stack development, I'm on a mission to make the digital world more secure.",
        mission: "To leverage technology and cybersecurity expertise to create secure, innovative solutions that make a positive impact on businesses and society.",
        vision: "To become a leading cybersecurity entrepreneur, building products that protect millions while mentoring the next generation of security professionals."
    },

    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University Name",
            year: "2020 - 2024",
            description: "Specialized in Cybersecurity and Network Security. GPA: 3.8/4.0",
            achievements: [
                "Dean's List all semesters",
                "Led Cybersecurity Club",
                "Published research on network vulnerabilities"
            ]
        },
        {
            degree: "Certifications",
            institution: "Various",
            year: "2021 - Present",
            description: "Industry-recognized certifications",
            achievements: [
                "Certified Ethical Hacker (CEH)",
                "CompTIA Security+",
                "AWS Certified Solutions Architect"
            ]
        }
    ],

    skills: {
        cybersecurity: [
            "Penetration Testing", "Vulnerability Assessment", "Network Security",
            "Web Application Security", "Malware Analysis", "Security Auditing",
            "Incident Response", "SIEM Tools", "Security Automation"
        ],
        technical: [
            "Python", "JavaScript", "Java", "C++", "Go",
            "React", "Node.js", "Django", "Flask",
            "Docker", "Kubernetes", "AWS", "Azure",
            "SQL", "MongoDB", "Redis"
        ],
        business: [
            "Strategic Planning", "Market Analysis", "Project Management",
            "Team Leadership", "Startup Development", "Product Management",
            "Business Development", "Financial Planning"
        ],
        leadership: [
            "Team Building", "Mentoring", "Public Speaking",
            "Conflict Resolution", "Decision Making", "Innovation Management"
        ]
    },

    projects: [
        {
            id: 1,
            title: "Network Security Scanner",
            category: "Cybersecurity",
            description: "Automated vulnerability scanning tool for enterprise networks with real-time threat detection.",
            technologies: ["Python", "Nmap", "Scapy", "Flask"],
            link: "#",
            github: "#",
            image: "project1.jpg"
        },
        {
            id: 2,
            title: "Secure Chat Application",
            category: "Development",
            description: "End-to-end encrypted messaging platform with advanced security features.",
            technologies: ["React", "Node.js", "Socket.io", "Cryptography"],
            link: "#",
            github: "#",
            image: "project2.jpg"
        },
        {
            id: 3,
            title: "CTF Platform",
            category: "Cybersecurity",
            description: "Custom-built Capture The Flag platform for cybersecurity training and competitions.",
            technologies: ["Django", "PostgreSQL", "Docker", "Redis"],
            link: "#",
            github: "#",
            image: "project3.jpg"
        },
        {
            id: 4,
            title: "Security Startup - SecureShield",
            category: "Business",
            description: "SaaS platform providing automated security compliance and monitoring for SMBs.",
            technologies: ["Cloud", "AI/ML", "Business Strategy"],
            link: "#",
            github: "#",
            image: "project4.jpg"
        }
    ],

    blog: [
        {
            id: 1,
            title: "The Future of Cybersecurity in 2024",
            date: "December 15, 2024",
            excerpt: "Exploring emerging threats and defense strategies in the evolving landscape of cybersecurity...",
            content: "Full blog content here...",
            category: "Cybersecurity",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Building Secure APIs: Best Practices",
            date: "December 10, 2024",
            excerpt: "A comprehensive guide to designing and implementing secure RESTful APIs...",
            content: "Full blog content here...",
            category: "Development",
            readTime: "8 min read"
        },
        {
            id: 3,
            title: "From Developer to Entrepreneur: My Journey",
            date: "December 5, 2024",
            excerpt: "Lessons learned transitioning from technical roles to building my own startup...",
            content: "Full blog content here...",
            category: "Business",
            readTime: "6 min read"
        }
    ],

    timeline: [
        {
            year: "2024",
            title: "Founded SecureShield",
            description: "Launched my own cybersecurity startup focused on automated compliance solutions for SMBs."
        },
        {
            year: "2023",
            title: "Senior Security Consultant",
            description: "Led major security audits for Fortune 500 companies, identifying critical vulnerabilities."
        },
        {
            year: "2022",
            title: "First Place - National CTF Championship",
            description: "Won the national cybersecurity competition, solving 45+ challenges across multiple categories."
        },
        {
            year: "2021",
            title: "Security Analyst",
            description: "Started professional career conducting penetration tests and security assessments."
        },
        {
            year: "2020",
            title: "Started University",
            description: "Began Computer Science degree with focus on Cybersecurity."
        }
    ],

    businessPlans: [
        {
            id: 1,
            title: "SecureShield - Automated Compliance Platform",
            description: "SaaS solution for automated security compliance monitoring and reporting.",
            status: "In Development",
            targetMarket: "Small to Medium Businesses",
            goal: "Launch MVP by Q2 2025"
        },
        {
            id: 2,
            title: "CyberEdu - Security Training Platform",
            description: "Interactive cybersecurity training platform with hands-on labs and certifications.",
            status: "Planning",
            targetMarket: "Professionals and Students",
            goal: "Research and validation phase"
        },
        {
            id: 3,
            title: "Security Consulting Firm",
            description: "Building a boutique security consulting firm specializing in startups and tech companies.",
            status: "Active",
            targetMarket: "Tech Startups",
            goal: "Expand team to 10 consultants by 2026"
        }
    ],

    achievements: [
        "Winner - National Cybersecurity Competition 2022",
        "Published researcher - IEEE Security Conference",
        "Discovered and reported 15+ CVEs",
        "Mentored 50+ aspiring security professionals",
        "Speaker at 10+ security conferences",
        "Built security tools used by 1000+ organizations"
    ],

    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        instagram: "https://instagram.com/yourusername",
        medium: "https://medium.com/@yourusername"
    }
};

// Navigation Menu Items
const navigationItems = [
    { name: "Home", hash: "home", icon: "fa-home" },
    { name: "About", hash: "about", icon: "fa-user" },
    { name: "Education", hash: "education", icon: "fa-graduation-cap" },
    { name: "Skills", hash: "skills", icon: "fa-code" },
    { name: "Projects", hash: "projects", icon: "fa-laptop-code" },
    { name: "Blog", hash: "blog", icon: "fa-blog" },
    { name: "Portfolio", hash: "portfolio", icon: "fa-briefcase" },
    { name: "Timeline", hash: "timeline", icon: "fa-clock" },
    { name: "Business", hash: "business", icon: "fa-chart-line" },
    { name: "Gallery", hash: "gallery", icon: "fa-images" },
    { name: "Journal", hash: "journal", icon: "fa-book" },
    { name: "Resume", hash: "resume", icon: "fa-file-alt" },
    { name: "Contact", hash: "contact", icon: "fa-envelope" }
];
