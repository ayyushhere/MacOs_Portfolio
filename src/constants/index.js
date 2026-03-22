const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://ayushcodess.netlify.app/",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://ayushcodess.netlify.app/",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://ayushcodess.netlify.app/",
  },
];

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/437291" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Mongoose", icon: "https://cdn.simpleicons.org/mongoose/880000" },
      { name: "Clerk", icon: "https://cdn.simpleicons.org/clerk/6C47FF" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
  {
    category: "Core CS",
    items: [
      { name: "DSA", icon: "https://cdn.simpleicons.org/leetcode/FFA116" },
      { name: "OOPs", icon: "https://cdn.simpleicons.org/java/007396" },
      { name: "OS & Networks", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "DBMS", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bgClass: "bg-[#181717]/60 backdrop-blur-xl border border-white/10 hover:bg-[#181717]/80 hover:border-white/20",
    link: "https://github.com/ayyushhere",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bgClass: "bg-emerald-600/40 backdrop-blur-xl border border-emerald-500/30 hover:bg-emerald-600/60 hover:border-emerald-500/50",
    link: "https://ayushhere.netlify.app/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bgClass: "bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-black/70 hover:border-white/20",
    link: "https://x.com/Ayyushhere",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bgClass: "bg-[#0a66c2]/40 backdrop-blur-xl border border-[#0a66c2]/40 hover:bg-[#0a66c2]/60 hover:border-[#0a66c2]/60",
    link: "https://www.linkedin.com/in/ayyushhere/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Agrifield",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Agrifield Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Pest Alert System",
          description: [
            "• Designed a scalable pest tracking platform using MERN Stack, enabling real-time infestation reporting for farmers and reducing response times by 40%.",
            "• Built a centralized Admin Dashboard with Socket.IO integration to broadcast instant alerts and visualize outbreak locations, improving community awareness by 50%.",
            "• Implemented Role-Based Access Control (RBAC) and secure image handling protocols (Multer) to manage sensitive agricultural data.",
            "• Tech Stack: React 19, Node.js, Express 5, MongoDB, Socket.IO, Tailwind CSS, Redux, Vite."
          ],
        },
        {
          id: 2,
          name: "Agrifield",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ayyushhere", // Update with actual link later
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Agrifield.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Clothify",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Clothify Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Full-Stack Clothing E-Commerce Website built with React, Node.js, Express, and MongoDB.",
            "Includes a stunning frontend store, completely protected admin panel, and live order tracking.",
          ],
        },
        {
          id: 2,
          name: "clothify-gold.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://clothify-gold.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "clothify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/clothify.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Mac-OS Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Portfolio Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Mac-OS Style Portfolio",
          description: [
            "• Architected a robust window management system using React 19 and Zustand, utilizing Imer to handle complex stacking contexts (z-index) and window persistence.",
            "• Used GSAP to create 60 FPS window transitions and dock magnification with authentic macOS physics.",
            "• Designed a scalable Higher-Order Component (HOC) pattern with Tailwind CSS, ensuring consistent native-OS behaviors (drag, resize, maximize) across all apps.",
            "• Tech Stack: React 19, Zustand, Tailwind CSS, GSAP, Vite."
          ],
        },
        {
          id: 2,
          name: "Live Portfolio",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ayushhere.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Ayush.jpeg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Ayush.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual-me.jpeg",
    },
    {
      id: 3,
      name: "group-photo.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/group-photo.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5 border-2 border-black",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Ayush.jpeg",
      description: [
        "Hey, I'm Ayush 👋 — a Frontend Developer dedicated to crafting premium, high-performance web experiences.",
        "I specialize in React, Next.js, and modern CSS/GSAP animations, bridging the gap between exceptional design and robust engineering.",
        "My philosophy is simple: build interfaces that feel fluid, responsive, and delightful to interact with. If it's not pixel-perfect, it's not finished.",
        "When I'm not pushing pixels or optimizing build times, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅"
      ],
    },
    {
      id: 5,
      name: "Experience.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-52 left-32",
      subtitle: "Professional Experience",
      description: [
        "Outlier | AI Trainer | Remote (Sep 2024 – Apr 2025)",
        "• Evaluated and optimized AI-generated code in Java and JavaScript to improve the accuracy of Large Language Models (LLMs).",
        "• Conducted technical review and debugging of complex code snippets, ensuring adherence to syntax and logic standards.",
        "• Contributed to Reinforcement Learning from Human Feedback (RLHF) workflows to enhance model reasoning capabilities.",
        "",
        "Freelancer",
        "• Provided independent technical consulting and development, resolving high-impact bugs and deploying scalable architecture patterns."
      ],
    },
    {
      id: 6,
      name: "Achievements.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-52 left-60",
      subtitle: "Achievements & CP",
      description: [
        "🏆 ACHIEVEMENTS",
        "• Solved 200+ coding problems across platforms like LeetCode and GeeksForGeeks.",
        "• Achieved a maximum rating of 1000 demonstrating advanced algorithmic problem-solving."
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

const CERTIFICATES_LOCATION = {
  id: 6,
  type: "certificates",
  name: "Certificates",
  icon: "/images/folder.png",
  kind: "folder",
  children: [
    { id: 1, name: "Cloud Computing - NPTEL.txt", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/NPTEL_logo.svg/1200px-NPTEL_logo.svg.png", kind: "file", fileType: "txt", position: "top-10 left-5", subtitle: "NPTEL", description: ["Cloud Computing certification achieved through NPTEL."] },
    { id: 2, name: "AI Essentials - Google.txt", icon: "https://cdn.simpleicons.org/google/4285F4", kind: "file", fileType: "txt", position: "top-10 left-40", subtitle: "Google", description: ["AI Essentials certification achieved through Google."] },
    { id: 3, name: "PHP Web App - Coursera.txt", icon: "https://cdn.simpleicons.org/coursera/0056D2", kind: "file", fileType: "txt", position: "top-10 right-20", subtitle: "Coursera", description: ["Building Web application in PHP certification achieved through Coursera."] },
    { id: 4, name: "Responsive Web - FCC.txt", icon: "https://cdn.simpleicons.org/freecodecamp/0A0A23", kind: "file", fileType: "txt", position: "top-40 left-5", subtitle: "FreeCodeCamp", description: ["Responsive Web Design certification achieved through FreeCodeCamp."] },
  ]
};

const EDUCATION_LOCATION = {
  id: 7,
  type: "education",
  name: "Education",
  icon: "/images/folder.png",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "B.Tech CSE - LPU.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-10",
      subtitle: "Lovely Professional University",
      description: [
        "🎓 Bachelor of Technology - Computer Science and Engineering",
        "📍 Phagwara, Punjab",
        "📅 Aug 2023 - Present",
        "📈 CGPA: 7.65"
      ]
    },
    {
      id: 2,
      name: "High School - MVM.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-40",
      subtitle: "Maharishi Vidya Mandir",
      description: [
        "🎓 Intermediate & Matriculation",
        "📍 Fatehpur, Uttar-Pradesh",
        "📅 Apr 2019 - Mar 2022",
        "📈 Intermediate: 76% | Matriculation: 85%"
      ]
    }
  ]
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  education: EDUCATION_LOCATION,
  certificates: CERTIFICATES_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };