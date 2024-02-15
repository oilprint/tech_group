import { v4 as uuidv4 } from "uuid";
import { send, star, shield, html, js, smm } from "../assets/icons"

export const statistics = [
  {value: "2000+", label: "happy clients"},
  {value: "20+", label: "courses"},
  {value: "24", label: "years in business"},
];

export const navLinks = [
  {href: "", label: "Home"},
  {href: "about", label: "About"},
  {href: "courses", label: "Courses"},
  {href: "contact", label: "Contact"},
];

export const heroContent = [
  {id: "hero",
    title: "Unleash Your Tech Potential",
    subtitle: "Navigate through coding, software development, cybersecurity, and other cutting-edge topics with the support of our knowledgeable instructors"}
];

export const features = [
  {id: uuidv4(),
    icon: star,
    title: "Interactive Learning Environment:",
    text: "Immerse yourself in an interactive learning environment where you can collaborate with peers, participate in discussions, and receive personalized feedback from instructors, fostering a dynamic and engaging educational experience",
    active: false,},
  {id: uuidv4(),
    icon: shield,
    title: "Continuous Support:",
    text: "Benefit from ongoing support throughout your learning journey, with access to resources, forums, and dedicated support channels to address any questions or challenges you may encounter along the way, ensuring that you stay motivated and on track towards achieving your goals",
    active: true,
  },
  {id: uuidv4(),
    icon: send,
    title: "Up-to-Date Content:",
    text: "Stay ahead of the curve with our constantly updated curriculum, which reflects the latest advancements, trends, and best practices in the ever-evolving field of technology. Gain relevant and practical knowledge that is aligned with current industry standards, preparing you for success in today's rapidly changing digital landscape",
    active: false,},   
];

export const courseCards =[
  {id:uuidv4(),
    title: "HTML/CSS",
    subtitle: "Fundamentals of Web Design - HTML and CSS",
    text: "After completing this course, you will be able to easily create website layouts, make changes to HTML pages, style pages using CSS properties, implement animations, gradients, and transformations, create responsive designs, utilize SASS, jQuery, Bootstrap, and gain a deep understanding of web project development",
    icon: html,
    active: false,
  },
  {id:uuidv4(),
    title: "JavaScript",
    subtitle: "Creating Interactive Web Pages, Programming",
    text: "Workflow organization, code version control, JavaScript, conditions, loops, arrays and functions, objects in JavaScript, browser and document object model, event processing, regular expressions, AJAX technology",
    icon: js,
    active: true,
  },
  {id:uuidv4(),
    title: "SMM",
    subtitle: "Promotion in social networks. Targeting",
    text: "Become Proficient in a Highly Sought-After Digital Career.<br/> Apply Your Skills to a Real Client Project.<br/> Create a strategy for promoting the project on social networks and add it to your portfolio",
    icon: smm,
    active: false,
  },
]
