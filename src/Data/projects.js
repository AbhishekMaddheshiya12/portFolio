import chill1 from "../assets/projectImage/ChillZone1.png"
import chill2 from "../assets/projectImage/ChillZone2.png"
import chill3 from "../assets/projectImage/ChillZone3.png"
import blog1 from "../assets/projectImage/Blog1.png"
import blog2 from "../assets/projectImage/Blog2.png"
import blog3 from "../assets/projectImage/Blog3.png"
import blog4 from "../assets/projectImage/Blog4.png"
import code1 from "../assets/projectImage/Code1.png"
import code2 from "../assets/projectImage/Code2.png"
import code3 from "../assets/projectImage/Code3.png"
import code4 from "../assets/projectImage/Code4.png"
import code5 from "../assets/projectImage/Code5.png"

export const projects = [
  {
    id: 1,
    title: "ChillZone",
    subtitle: "A secure real-time chat application with private rooms and chatbot integration.",
    description:
      "Built with React.js, Node.js, Express.js, and Socket.io. Features include private rooms with authentication, Gemini API-powered chatbot, real-time messaging, and media sharing. Designed with a responsive UI using Material UI.",
    link: "https://chill-zone-alpha.vercel.app",
    githubLink: "https://github.com/AbhishekMaddheshiya12/ChillZone", // update with actual repo link
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "Material UI"],
    images:[chill1,chill2,chill3]
  },
  {
    id: 2,
    title: "CodeCraft",
    subtitle: "An online coding platform to practice coding with real-time compilation.",
    description:
      "Developed using React.js, Node.js, Express.js, and MongoDB. Integrated Monaco Editor with Judge0 API for real-time code execution. Includes user profiles, progress tracking, and discussion threads for collaboration.",
    link: "https://codecraft-frontend-xuuw.onrender.com",
    githubLink: "https://github.com/AbhishekMaddheshiya12/CodeCraft", // update with actual repo link
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Monaco Editor", "Judge0 API"],
    images:[code1,code2,code3]
  },
  {
    id: 3,
    title: "Blogify",
    subtitle: "A blogging platform with secure content management and personalized dashboards.",
    description:
      "Built with React.js, Node.js, Express.js, and MongoDB. Features JWT authentication, blog creation with categories, threaded comments, likes/dislikes, and RESTful APIs with pagination. Optimized for performance and scalability.",
    link: "https://blogify-frontend-wn8q.vercel.app",
    githubLink: "https://github.com/AbhishekMaddheshiya12/Blogify", // update with actual repo link
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    images:[blog2,blog3,blog4]
  }
];
