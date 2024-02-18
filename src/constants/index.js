import { v4 as uuidv4 } from "uuid";
import { send, star, shield, html, js, smm, Instagram, Telegram, Linkedin, Facebook, PhoneCall, WhatsApp } from "../assets/icons";
import { user01, user02, user03, user04, user05, user06, user07, user08, user09, user10 } from "../assets/images/users";

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
];
export const aboutCenter = 
  {id: uuidv4(),
  title: "Revolutionizing Computer Education",
  text: 'The "Pyaterka" Educational Center is among the pioneering institutions in Odessa to enter the market of computer courses. With a track record of educating over 10,000 students across various fields, ranging from basic PC usage to programming, we continually refine our methods and programs, keeping abreast of changes in the realm of computer education',
};

export const testimonials = [
  {id: uuidv4(),
    text: "The HTML course was incredibly informative and well-paced. As a beginner, I appreciated how the concepts were broken down and explained thoroughly. The hands-on projects were especially helpful in solidifying my understanding.", 
    studentName: "Jennifer", 
    course: "HTML",
    userPhoto: user01}, 
  {id: uuidv4(),
    text: "I thoroughly enjoyed the SMM course! The instructor provided practical insights and real-world examples that made the content easy to grasp. I now feel equipped with the knowledge and skills to create effective social media marketing campaigns.",
    studentName: "Michael", 
    course: "SMM",
    userPhoto: user02},
  {id: uuidv4(),
    text: "The Design course was a fantastic blend of theory and practice. I learned not only the technical aspects but also the principles of design aesthetics. The instructor's feedback was invaluable in helping me improve my design skills", 
    studentName: "Sophie", 
    course: "Design",
    userPhoto: user03},
  {id: uuidv4(),
    text: "The JavaScript course was challenging but rewarding. The instructor did an excellent job of explaining complex concepts in a clear and understandable way. I appreciated the emphasis on problem-solving and practical application", 
    studentName: "Daniel", 
    course: "JavaScript",
    userPhoto: user04},
  {id: uuidv4(),
    text: "The HTML course exceeded my expectations! The instructor was engaging and provided plenty of resources to supplement the lessons. I feel confident in my ability to create well-structured web pages thanks to this course", 
    studentName: "Alex", 
    course: "HTML",
    userPhoto: user05},
  {id: uuidv4(),
    text: "SMM course was exactly what I needed to enhance my social media marketing skills. The content was relevant and up-to-date, and the instructor was knowledgeable and approachable. I highly recommend this course to anyone in the field.", 
    studentName: "Emily", 
    course: "SMM",
    userPhoto: user06},
  {id: uuidv4(),
    text: "The Design course was a game-changer for me! I learned industry-standard tools and techniques that have already made a significant impact on my design projects. The instructor's passion for design was truly inspiring.", studentName: "Ryan", 
    course: "Design",
    userPhoto: user07},
  {id: uuidv4(),
    text: "JavaScript course was challenging yet fulfilling. The instructor's explanations were clear, and the exercises were well-designed to reinforce learning. I feel much more confident in my coding abilities after completing this course.", 
    studentName: "Natalie", 
    course: "JavaScript",
    userPhoto: user08},
  {id: uuidv4(),
    text: "The HTML course provided a solid foundation for web development. The instructor was patient and supportive, and the course materials were comprehensive. I'm excited to continue building on what I've learned.", studentName: "Joshua", 
    course: "HTML",
    userPhoto: user09},
  {id: uuidv4(),
    text: "SMM course was a fantastic investment in my career. The instructor shared valuable insights and strategies that have already started to pay off in my social media campaigns. I feel more confident and strategic in my approach to marketing.", 
    studentName: "Hannah", 
    course: "SMM",
    userPhoto: user10}
];

export const footerLinks = [
  {id: uuidv4(),
    title: "Courses",
    links: [{id: uuidv4(),
        name: "HTML&CSS",
        link: "#"},
      {id: uuidv4(),
        name: "JavaScript",
        link: "#"},
      {id: uuidv4(),
        name: "SMM",
        link: "#"},
      {id: uuidv4(),
        name: "Digital Marketing",
        link: "#"},
      {id: uuidv4(),
        name: "UX/UI Design",
        link: "#"},
    ],
  },
  {id: uuidv4(),
    title: "Usefull Links",
    links: [{id: uuidv4(),
        name: "About Us",
        link: "#"},
      {id: uuidv4(),
        name: "All Courses",
        link: "#"},
      {id: uuidv4(),
        name: "Privacy policy",
        link: "#"},
    ],
  },
  {id: uuidv4(),
    title: "Get in touch",
    links: [{id: uuidv4(),
      name: "5educenter@gmail.com",
      link: "mailto:5educenter@gmail.com"},
    {id: uuidv4(),
      name: "+38 066 877 44 11",
      link: "tel:+380668774411"},
    ]
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    name: "facebook",
    icon: Facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    name: "telegram",
    icon: Telegram,
    link: "https://www.telegram.com/",
  },
  {
    id: "social-media-4",
    name: "linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const faqs = [
  {id: uuidv4(),
    question: "How do I enroll in a course?", 
    answer: "To enroll in a course, simply visit our website and navigate to the course page of your choice. From there, you can follow the instructions to register and make payment securely online."
  },
  {id: uuidv4(),
    question: "Do you offer any discounts or promotions?", 
    answer: "Yes, we frequently run promotions and offer discounts on our courses. Be sure to check our website regularly or subscribe to our newsletter to stay updated on any special offers."
  },
  {id: uuidv4(),
    question: "Are the courses self-paced or instructor-led?", 
    answer: "We offer both self-paced and instructor-led courses to accommodate different learning preferences. You can choose the format that best suits your schedule and learning style."
  },
  {id: uuidv4(),
    question: "What kind of support is available to students during the course?", 
    answer: "We provide various support options for students, including access to instructors via email or discussion forums, as well as supplemental resources such as video tutorials, quizzes, and assignments to reinforce learning."
  }
];


export const messengers = [
  {id: uuidv4(),
    name: "WhatsApp",
    icon: WhatsApp,
    href: "https://wa.me/380668470000",
    textColor: "#60D669",
  },
  {id: uuidv4(),
    name: "Telegram",
    icon: Telegram,
    href: "https://t.me/iryna1015",
    textColor: "#2AABEE",
  },
  {id: uuidv4(),
    name: "Telegram",
    icon: Telegram,
    href: "https://t.me/iryna1015",
    textColor: "red",
  },
  {id: uuidv4(),
    name: "Mobile",
    icon: PhoneCall,
    href: "tel:+380668470000",
    textColor: "#464242",
  }, 
];
