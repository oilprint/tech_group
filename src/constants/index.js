import { v4 as uuidv4 } from "uuid";
import { send, star, shield, Instagram, Telegram, Linkedin, Facebook, PhoneCall, WhatsApp } from "../assets/icons";
import { user01, user02, user03, user04, user05, user06, user07, user08, user09, user10 } from "../assets/images/users";
import { html, js, smm, ai, finance, marketing, mobile, data, mobilePhoto, aiPhoto, htmlPhoto, jsPhoto, smmPhoto, marketingPhoto, dataPhoto, financePhoto } from "../assets/images";

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
    titleBig: "Fundamentals of Web Design - HTML and CSS",
    text: "After completing this course, you will be able to easily create website layouts, make changes to HTML pages, style pages using CSS properties, implement animations, gradients, and transformations, create responsive designs, utilize SASS, jQuery, Bootstrap, and gain a deep understanding of web project development",
    icon: html,
    active: false,
    duration: "12 weeks",
    price: 560,
    photo: htmlPhoto,
    description: "This course offers a comprehensive introduction to the essential building blocks of modern web development. Participants will gain proficiency in HTML and CSS, learning to structure web pages, style content, and create visually engaging layouts. By mastering these foundational skills, students will be well-equipped to design and develop professional-quality websites that are both aesthetically pleasing and user-friendly.",
    program: [
      {
          "title": "Introduction to Web Design",
          "description": [
              "Overview of web design principles",
              "Importance of HTML and CSS",
              "Brief history of the internet and web development"
          ]
      },
      {
          "title": "Understanding HTML",
          "description": [
              "Structure of HTML documents",
              "HTML elements and tags",
              "Semantic HTML",
              "Creating links and anchors"
          ]
      },
      {
          "title": "Styling with CSS",
          "description": [
              "Introduction to CSS",
              "Selectors and specificity",
              "CSS properties and values",
              "Styling text, backgrounds, and borders"
          ]
      },
      {
          "title": "Layout and Positioning",
          "description": [
              "Box model fundamentals",
              "Floats and clears",
              "Positioning elements",
              "Flexbox and CSS Grid introduction"
          ]
      },
      {
          "title": "Responsive Design",
          "description": [
              "Importance of responsive design",
              "Media queries and breakpoints",
              "Creating flexible layouts",
              "Mobile-first design approach"
          ]
      },
      {
          "title": "Optimizing Web Graphics",
          "description": [
              "Image formats and optimization techniques",
              "Implementing icons and vector graphics",
              "Using CSS for image effects and sprites"
          ]
      },
      {
          "title": "Introduction to Web Accessibility",
          "description": [
              "Understanding web accessibility principles",
              "Semantic HTML for accessibility",
              "Implementing ARIA roles and attributes",
              "Testing and evaluating website accessibility"
          ]
      },
      {
          "title": "Project Work and Hands-on Exercises",
          "description": [
              "Applying HTML and CSS concepts to create web pages",
              "Building a responsive website layout",
              "Incorporating web accessibility features",
              "Troubleshooting and debugging techniques"
          ]
      },
      {
          "title": "Best Practices and Further Resources",
          "description": [
              "Review of best practices in web design",
              "Resources for continuous learning and skill improvement",
              "Networking opportunities and online communities"
          ]
      },
      {
          "title": "Final Project Presentation and Feedback",
          "description": [
              "Presenting final projects to peers and instructors",
              "Feedback session for improvement and refinement",
              "Celebration of learning accomplishments and next steps"
          ]
      }
    ]
  }, 
  {id:uuidv4(),
    title: "JavaScript",
    subtitle: "Creating Interactive Web Pages, Programming",
    titleBig: "JavaScript Fundamentals: Mastering Web Development",
    text: "Workflow organization, code version control, JavaScript, conditions, loops, arrays and functions, objects in JavaScript, browser and document object model, event processing, regular expressions, AJAX technology",
    icon: js,
    active: true,
    duration: "14 weeks",
    price: 450,
    photo: jsPhoto,
    description: "This course offers a deep dive into the world of JavaScript, starting from fundamental concepts and culminating in practical web development skills. Students will explore key aspects of the language, including data types, operators, control flow, and DOM manipulation. Practical exercises and project work will allow students to apply their knowledge in practice and develop web applications using modern standards and best practices. Upon completion of the course, participants will be ready to create dynamic and interactive web applications using JavaScript.",
    program: [
    {
        "title": "Introduction to JavaScript",
        "description": [
            "Overview of JavaScript language and its role in web development.",
            "Basic syntax and structure of JavaScript code."
        ]
    },
    {
        "title": "Data Types and Variables",
        "description": [
            "Understanding different data types in JavaScript: string, number, boolean, etc.",
            "Declaration and usage of variables using var, let, and const keywords."
        ]
    },
    {
        "title": "Operators and Expressions",
        "description": [
            "Exploring arithmetic, assignment, comparison, and logical operators in JavaScript.",
            "Understanding expressions and their evaluation in JavaScript."
        ]
    },
    {
        "title": "Control Flow and Conditional Statements",
        "description": [
            "Learning about control flow structures like if statements, switch statements, and loops.",
            "Using conditional statements to control the flow of execution in JavaScript programs."
        ]
    },
    {
        "title": "Functions",
        "description": [
            "Understanding the concept of functions and their importance in JavaScript.",
            "Declaration, invocation, and usage of functions with parameters and return values."
        ]
    },
    {
        "title": "Arrays and Objects",
        "description": [
            "Working with arrays and objects, including methods for manipulation and iteration.",
            "Understanding array and object literals, accessing and modifying their elements."
        ]
    },
    {
        "title": "DOM Manipulation",
        "description": [
            "Introduction to the Document Object Model (DOM) and its representation of HTML documents.",
            "Manipulating HTML elements using JavaScript to create dynamic and interactive web pages."
        ]
    },
    {
        "title": "Events and Event Handling",
        "description": [
            "Understanding events in JavaScript and their role in user interactions.",
            "Handling events using event listeners and callback functions."
        ]
    },
    {
        "title": "Asynchronous JavaScript",
        "description": [
            "Exploring asynchronous programming concepts such as callbacks, promises, and async/await.",
            "Managing asynchronous operations to handle tasks like data fetching and processing."
        ]
    },
    {
        "title": "ES6+ Features",
        "description": [
            "Introduction to modern JavaScript features introduced in ECMAScript 6 and later versions.",
            "Learning about arrow functions, template literals, destructuring, and spread/rest operators."
        ]
    },
    {
        "title": "Error Handling",
        "description": [
            "Understanding error handling techniques in JavaScript using try-catch blocks.",
            "Handling runtime errors gracefully to prevent script execution interruption."
        ]
    },
    {
        "title": "Introduction to ES Modules",
        "description": [
            "Exploring ES Modules for modular JavaScript code organization and dependency management.",
            "Importing and exporting modules to improve code maintainability and reusability."
        ]
    },
    {
        "title": "Working with APIs",
        "description": [
            "Practical exercises on fetching data from APIs (Application Programming Interfaces) using JavaScript.",
            "Handling API responses and processing data for use in web applications."
        ]
    },
    {
        "title": "Project Development",
        "description": [
            "Applying JavaScript skills to develop interactive web applications or projects.",
            "Implementing features learned throughout the course in real-world scenarios."
        ]
    },
    {
        "title": "Testing and Debugging",
        "description": [
            "Exploring tools and techniques for testing JavaScript code and debugging common errors.",
            "Writing test cases and using browser developer tools for debugging purposes."
        ]
    },
    {
        "title": "Best Practices and Code Optimization",
        "description": [
            "Guidelines for writing clean, maintainable, and optimized JavaScript code.",
            "Understanding code quality standards and adopting best practices for efficient development."
        ]
    }
    ]
  },
  {id:uuidv4(),
    title: "SMM",
    subtitle: "Promotion in social networks. Targeting",
    titleBig: "SMM: Promotion in social networks. Targeting",
    text: "Become Proficient in a Highly Sought-After Digital Career.<br/> Apply Your Skills to a Real Client Project.<br/> Create a strategy for promoting the project on social networks and add it to your portfolio",
    icon: smm,
    active: false,
    duration: "14 weeks",
    price: 360,
    photo: smmPhoto,
    description: "This course is designed for those who want to master the basics of social media strategies and develop practical skills in content management and audience engagement. Students will learn the fundamental principles of creating and promoting content on various social platforms, as well as how to use analytics tools to evaluate campaign effectiveness. Practical assignments and case studies will allow students to apply their knowledge in practice, enhance their professional skills in the field of social media, and effectively manage the online presence of a brand or company.",
    program: [
      {
          "title": "Introduction to Social Media Marketing (SMM)",
          "description": [
              "Overview of SMM and its significance in modern marketing strategies."
          ]
      },
      {
          "title": "Understanding Social Media Platforms",
          "description": [
              "Exploring popular social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and TikTok.",
              "Understanding the demographics, features, and best practices for each platform."
          ]
      },
      {
          "title": "Content Creation and Curation",
          "description": [
              "Strategies for creating engaging and shareable content tailored to target audiences.",
              "Techniques for sourcing and curating content from various sources, including user-generated content (UGC)."
          ]
      },
      {
          "title": "Audience Engagement and Community Management",
          "description": [
              "Techniques for building and nurturing online communities.",
              "Strategies for fostering engagement, managing interactions, and responding to audience feedback."
          ]
      },
      {
          "title": "Social Media Advertising",
          "description": [
              "Introduction to paid advertising on social media platforms.",
              "Understanding targeting options, ad formats, and budgeting strategies."
          ]
      },
      {
          "title": "Analytics and Performance Measurement",
          "description": [
              "Understanding key metrics and tools for analyzing and evaluating the effectiveness of social media campaigns.",
              "Using analytics to track ROI, engagement metrics, and audience demographics."
          ]
      },
      {
          "title": "Influencer Marketing",
          "description": [
              "Exploring influencer marketing strategies and collaborations to amplify brand reach and engagement.",
              "Identifying and partnering with influencers relevant to your target audience."
          ]
      },
      {
          "title": "Crisis Management in Social Media",
          "description": [
              "Strategies for handling negative feedback, crises, and reputation management on social media.",
              "Developing crisis communication plans and response strategies."
          ]
      },
      {
          "title": "Legal and Ethical Considerations",
          "description": [
              "Understanding legal and ethical issues in SMM, including privacy, copyright, and disclosure regulations.",
              "Ensuring compliance with regulations and ethical standards in social media marketing efforts."
          ]
      },
      {
          "title": "Case Studies and Best Practices",
          "description": [
              "Analysis of successful SMM campaigns and industry best practices.",
              "Deriving insights and strategies from real-world case studies to inform SMM efforts."
          ]
      },
      {
          "title": "Project Work and Hands-on Exercises",
          "description": [
              "Practical assignments and projects to apply learned concepts and develop SMM strategies.",
              "Hands-on exercises to hone skills in content creation, advertising, and community management."
          ]
      },
      {
          "title": "Final Project Presentation",
          "description": [
              "Presenting final SMM projects, receiving feedback, and discussing lessons learned.",
              "Reflecting on the course journey and planning next steps in SMM endeavors."
          ]
      }
    ]
  },
  {id:uuidv4(),
    title: "Digital Marketing", 
    subtitle: "Online Promotion Strategies", 
    titleBig: "Digital Marketing Mastery: Strategies for Success",
    text: "This course provides practical knowledge of digital marketing strategies, including SEO, content marketing, social media, and analytics. Students will learn how to attract target audiences and increase conversions in online businesses.",
    icon: marketing,
    active: false,
     duration: "8 weeks",
    price: 450,
    photo: marketingPhoto,
    description: 'The course "Digital Marketing" is comprehensive training on modern methods and strategies of digital marketing. Students will study key online promotion channels, master skills in creating effective content strategies, and learn how to analyze data to optimize campaigns. Upon completion of the course, they will be ready for a successful career in digital marketing, possessing the necessary knowledge and skills to achieve business goals in the online environment.',
    program: [
        {
            "title": "Introduction to Digital Marketing",
            "description": [
                "Overview of digital marketing and its importance in modern business strategies.",
                "Explanation of fundamental concepts and terminologies in digital marketing."
            ]
        },
        {
            "title": "Digital Marketing Channels",
            "description": [
                "Exploration of key digital marketing channels, including social media, email, SEO, and SEM.",
                "Comparison of different channels in terms of their strengths, weaknesses, and suitability for various business objectives."
            ]
        },
        {
            "title": "Creating Digital Marketing Strategy",
            "description": [
                "Formulating effective digital marketing plans aligned with business objectives.",
                "Conducting market research, competitor analysis, and audience segmentation to inform strategic decisions."
            ]
        },
        {
            "title": "Content Marketing",
            "description": [
                "Crafting compelling content to attract and engage target audiences.",
                "Strategies for content creation, distribution, and optimization across various digital platforms."
            ]
        },
        {
            "title": "Search Engine Optimization (SEO)",
            "description": [
                "Optimizing website content and structure to improve search engine visibility.",
                "Techniques for keyword research, on-page optimization, and link building to enhance organic search rankings."
            ]
        },
        {
            "title": "Search Engine Marketing (SEM)",
            "description": [
                "Paid advertising strategies on search engines to drive targeted traffic.",
                "Campaign setup, keyword bidding, ad copywriting, and performance tracking in platforms like Google Ads."
            ]
        },
        {
            "title": "Social Media Marketing (SMM)",
            "description": [
                "Leveraging social media platforms for brand promotion and audience engagement.",
                "Content strategy development, community management, and paid advertising on platforms like Facebook, Instagram, and LinkedIn."
            ]
        },
        {
            "title": "Email Marketing",
            "description": [
                "Designing and executing email campaigns to nurture leads and drive conversions.",
                "Best practices for email list building, segmentation, personalization, and automation."
            ]
        },
        {
            "title": "Digital Analytics",
            "description": [
                "Utilizing analytics tools to measure and analyze digital marketing performance.",
                "Tracking key metrics, setting up conversion goals, and deriving actionable insights for campaign optimization."
            ]
        },
        {
            "title": "Conversion Rate Optimization (CRO)",
            "description": [
                "Optimizing website and marketing campaigns to increase conversion rates.",
                "A/B testing, usability testing, and behavioral analysis to identify and address conversion barriers."
            ]
        },
        {
            "title": "Mobile Marketing",
            "description": [
                "Strategies for reaching and engaging mobile users effectively.",
                "Mobile-responsive design, app marketing, and location-based targeting tactics."
            ]
        },
        {
            "title": "E-commerce Marketing",
            "description": [
                "Tailored marketing tactics for driving sales and revenue in e-commerce environments.",
                "Product listing optimization, remarketing campaigns, and cart abandonment recovery strategies."
            ]
        }
    ]
  },
  {id:uuidv4(),
    title: "Mobile Development", 
    subtitle: "Creating iOS and Android Applications", 
    titleBig: "Mastering Mobile Development: Building Innovative Apps",
    text: "This course focuses on developing mobile applications for iOS and Android platforms. Students will learn essential tools and programming languages such as Swift (for iOS) and Kotlin (for Android), as well as creating user interfaces and interacting with APIs.",
    icon: mobile,
    active: false,
    duration: "16 weeks",
    price: 820,
    photo: mobilePhoto,
    description:'The "Mobile Development" course offers comprehensive training in creating mobile applications for various platforms. Students will learn the fundamental principles of UI design, programming, and app testing, equipping them with the necessary skills to develop both native and cross-platform applications. Upon completion, they will be prepared to build innovative and high-performing mobile applications that meet the demands of the modern market.',
    program: [
        {
            "title": "Introduction to Mobile Development",
            "description": [
                "Overview of mobile development landscape, including platforms, frameworks, and technologies.",
                "Understanding the importance of mobile applications in modern digital ecosystems."
            ]
        },
        {
            "title": "Mobile Platforms and Technologies",
            "description": [
                "Exploration of major mobile platforms such as iOS and Android, as well as cross-platform development frameworks like React Native and Flutter.",
                "Comparison of native vs. hybrid development approaches and their pros and cons."
            ]
        },
        {
            "title": "User Interface Design for Mobile",
            "description": [
                "Principles of mobile UI/UX design, including responsive design, navigation patterns, and touch interactions.",
                "Tools and techniques for designing visually appealing and user-friendly mobile interfaces."
            ]
        },
        {
            "title": "Mobile App Development Lifecycle",
            "description": [
                "Overview of the mobile app development process, from ideation and prototyping to deployment and maintenance.",
                "Understanding agile development methodologies and their application in mobile projects."
            ]
        },
        {
            "title": "Programming Languages for Mobile Development",
            "description": [
                "Introduction to programming languages commonly used in mobile development, such as Swift (for iOS) and Kotlin (for Android).",
                "Basics of mobile app development with HTML, CSS, and JavaScript for hybrid app development."
            ]
        },
        {
            "title": "Building Native Mobile Apps",
            "description": [
                "Hands-on experience with native app development using platform-specific tools and SDKs.",
                "Creating UI components, handling user input, and integrating device features like camera and sensors."
            ]
        },
        {
            "title": "Cross-Platform Mobile Development",
            "description": [
                "Exploring cross-platform development frameworks like React Native and Flutter for building apps that run on multiple platforms.",
                "Code sharing strategies, UI component libraries, and platform-specific customization options."
            ]
        },
        {
            "title": "Mobile App Testing and Debugging",
            "description": [
                "Techniques for testing mobile apps on different devices, screen sizes, and operating system versions.",
                "Debugging tools and strategies for identifying and fixing common issues in mobile applications."
            ]
        },
        {
            "title": "Mobile App Deployment and Distribution",
            "description": [
                "Process of preparing mobile apps for release on app stores like the Apple App Store and Google Play Store.",
                "App store guidelines, submission process, and best practices for app distribution and promotion."
            ]
        },
        {
            "title": "Mobile App Performance Optimization",
            "description": [
                "Strategies for optimizing mobile app performance, including reducing app size, improving startup time, and minimizing battery consumption.",
                "Performance profiling tools and techniques for identifying and addressing performance bottlenecks."
            ]
        },
        {
            "title": "Mobile Security and Privacy",
            "description": [
                "Importance of mobile app security and best practices for securing user data, preventing unauthorized access, and safeguarding against common security threats.",
                "Compliance with privacy regulations such as GDPR and CCPA, and implementation of data encryption and authentication mechanisms."
            ]
        },
        {
            "title": "Emerging Trends in Mobile Development",
            "description": [
                "Exploration of emerging technologies and trends shaping the future of mobile development, such as augmented reality (AR), virtual reality (VR), and Internet of Things (IoT).",
                "Discussion of future prospects and career opportunities in the rapidly evolving field of mobile development."
            ]
        }
    ]
  },
  {id:uuidv4(),
    title: "Data Analysis", 
    subtitle: "Data Extraction, Processing, and Visualization", 
    titleBig: "Data Analysis Essentials: Unlocking Insights for Success",
    text: "The course covers the basics of data analysis, including methods for collecting, processing, and visualizing information. Students will become familiar with data analysis tools such as Python and libraries like Pandas, NumPy, and Matplotlib, and learn how to apply them to solve real-world business problems.",
    icon: data,
    active: false,
    duration: "10 weeks",
    price: 350,
    photo: dataPhoto,
    description:'The "Data Analysis" course provides a deep dive into the field of data analytics, covering essential concepts and methodologies. Students will learn to manipulate and interpret data, apply statistical techniques, and derive meaningful insights to drive informed decision-making. Upon completion, they will possess the skills and knowledge necessary to tackle complex data-driven challenges across various industries and domains.',
    program: [
        {
            "title": "Introduction to Data Analysis",
            "description": [
                "Overview of data analysis and its significance in modern business decision-making processes.",
                "Understanding the role of data analysts in extracting insights and informing strategic decisions."
            ]
        },
        {
            "title": "Fundamentals of Data Analysis",
            "description": [
                "Introduction to key concepts and methodologies in data analysis, including data collection, cleaning, and manipulation.",
                "Exploring different types of data (structured, unstructured, semi-structured) and their characteristics."
            ]
        },
        {
            "title": "Data Visualization",
            "description": [
                "Principles of effective data visualization for communicating insights and patterns in data.",
                "Tools and techniques for creating compelling charts, graphs, and dashboards to convey complex information."
            ]
        },
        {
            "title": "Exploratory Data Analysis (EDA)",
            "description": [
                "Techniques for exploring and summarizing data to uncover patterns, trends, and outliers.",
                "Use of statistical methods, data visualization, and exploratory techniques to gain insights into datasets."
            ]
        },
        {
            "title": "Statistical Analysis",
            "description": [
                "Basics of statistical analysis, including probability distributions, hypothesis testing, and regression analysis.",
                "Application of statistical techniques to analyze relationships between variables and make data-driven predictions."
            ]
        },
        {
            "title": "Data Wrangling and Cleaning",
            "description": [
                "Strategies for cleaning and preprocessing raw data to ensure accuracy, completeness, and consistency.",
                "Handling missing values, outliers, and inconsistencies in datasets using data wrangling techniques."
            ]
        },
        {
            "title": "Machine Learning Fundamentals",
            "description": [
                "Introduction to machine learning concepts and algorithms for predictive modeling and pattern recognition.",
                "Overview of supervised, unsupervised, and reinforcement learning techniques and their applications."
            ]
        },
        {
            "title": "Data Mining and Pattern Recognition",
            "description": [
                "Techniques for discovering hidden patterns, associations, and trends in large datasets.",
                "Use of clustering, classification, and association rule mining algorithms for pattern recognition tasks."
            ]
        },
        {
            "title": "Big Data Analytics",
            "description": [
                "Overview of big data technologies and frameworks for processing, storing, and analyzing large volumes of data.",
                "Application of distributed computing and parallel processing techniques to handle big data challenges."
            ]
        },
        {
            "title": "Data Analysis with Python and R",
            "description": [
                "Hands-on experience with data analysis libraries and frameworks in Python (e.g., Pandas, NumPy, Matplotlib) and R (e.g., ggplot2, dplyr).",
                "Writing and executing data analysis scripts to perform data manipulation, visualization, and statistical analysis."
            ]
        },
        {
            "title": "Data Visualization with Tableau",
            "description": [
                "Introduction to Tableau for creating interactive and visually appealing data visualizations.",
                "Building dashboards and interactive reports to communicate insights and findings from data analysis."
            ]
        },
        {
            "title": "Advanced Topics in Data Analysis",
            "description": [
                "Exploration of advanced topics such as time series analysis, natural language processing (NLP), and deep learning for data analysis.",
                "Discussion of real-world case studies and applications of data analysis in various industries and domains."
            ]
        }
    ]
  },
  {id:uuidv4(),
    title: "Artificial Intelligence", 
    subtitle: "Introduction to Machine Learning and Neural Networks", 
    titleBig: "Artificial Intelligence Essentials: Unlocking the Future",
    text: "In this course, students will be introduced to the basics of machine learning and neural networks. They will study various methods of model training, including classification, regression, and clustering, and learn how to apply them for data analysis and prediction.",
    icon: ai,
    active: true,
    duration: "6 weeks",
    price: 720,
    photo: aiPhoto,
    description: 'The "Artificial Intelligence" course offers a comprehensive exploration of AI technologies and their applications. Students will delve into machine learning, deep learning, and natural language processing, gaining hands-on experience with cutting-edge AI frameworks and tools. By the end of the course, they will be equipped to develop AI solutions, understand ethical considerations, and leverage AI for solving real-world problems in diverse domains.',
    program: [
        {
            "title": "Introduction to Artificial Intelligence (AI)",
            "description": [
                "Overview of artificial intelligence and its applications in various fields such as healthcare, finance, and transportation.",
                "Understanding the fundamentals of AI, including machine learning, neural networks, and natural language processing."
            ]
        },
        {
            "title": "Machine Learning Foundations",
            "description": [
                "Introduction to machine learning algorithms, supervised and unsupervised learning, and model evaluation techniques.",
                "Hands-on experience with popular machine learning libraries such as scikit-learn and TensorFlow."
            ]
        },
        {
            "title": "Deep Learning",
            "description": [
                "Understanding deep neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).",
                "Exploration of deep learning frameworks like Keras and PyTorch for building and training deep learning models."
            ]
        },
        {
            "title": "Natural Language Processing (NLP)",
            "description": [
                "Techniques for processing and analyzing natural language data, including tokenization, stemming, and sentiment analysis.",
                "Application of NLP algorithms for tasks such as text classification, named entity recognition, and machine translation."
            ]
        },
        {
            "title": "Computer Vision",
            "description": [
                "Basics of computer vision algorithms, image processing techniques, and feature extraction methods.",
                "Implementation of object detection, image classification, and image segmentation using computer vision libraries like OpenCV and TensorFlow."
            ]
        },
        {
            "title": "Reinforcement Learning",
            "description": [
                "Introduction to reinforcement learning principles, Markov decision processes (MDPs), and Q-learning.",
                "Hands-on experience with reinforcement learning algorithms for training agents to perform tasks in simulated environments."
            ]
        },
        {
            "title": "AI Ethics and Responsible AI",
            "description": [
                "Discussion of ethical considerations and societal implications of AI technologies, including bias, fairness, and privacy concerns.",
                "Exploration of strategies for developing and deploying AI systems responsibly and ethically."
            ]
        },
        {
            "title": "AI in Business and Industry",
            "description": [
                "Applications of AI in business processes, including customer service, marketing, and supply chain management.",
                "Case studies and real-world examples of successful AI implementations in various industries."
            ]
        },
        {
            "title": "AI Research and Trends",
            "description": [
                "Overview of current trends and advancements in AI research, including generative adversarial networks (GANs), self-supervised learning, and autonomous systems.",
                "Discussion of future directions and potential breakthroughs in AI technology."
            ]
        },
        {
            "title": "AI for Social Good",
            "description": [
                "Exploration of AI initiatives and projects aimed at addressing societal challenges such as healthcare disparities, environmental sustainability, and poverty alleviation.",
                "Opportunities for leveraging AI for social impact and promoting equity, diversity, and inclusion in AI development and deployment."
            ]
        },
        {
            "title": "AI Development Tools and Platforms",
            "description": [
                "Introduction to AI development tools, platforms, and cloud services for building, deploying, and managing AI applications.",
                "Hands-on experience with platforms like Google Cloud AI, Microsoft Azure AI, and AWS AI/ML services."
            ]
        },
        {
            "title": "Capstone Project",
            "description": [
                "Integration of concepts and skills learned throughout the course into a final project that demonstrates proficiency in AI techniques and applications.",
                "Presentation of the capstone project, showcasing the problem statement, methodology, results, and insights gained from the AI project."
            ]
        }
    ]
  },
  {id:uuidv4(),
    title: "Financial Literacy", 
    subtitle: "Fundamentals of Personal Finance and Investments", 
    titleBig: "Financial Literacy Fundamentals: Empowering Financial Freedom",
    text: "This course provides basic knowledge of personal finance, budgeting, investing, and financial planning. Students will learn about various types of investments, debt management, and creating a financial strategy to achieve their goals.",
    icon: finance,
    active: false,
    duration: "8 weeks",
    price: 420,
    photo: financePhoto,
    description: 'The "Financial Literacy" course provides a foundational understanding of essential financial concepts and practices. Students will learn how to budget effectively, manage debt, invest wisely, and plan for their financial future. By the end of the course, they will possess the knowledge and skills necessary to make informed financial decisions and achieve financial stability.',
    program: [
        {
            "title": "Introduction to Financial Literacy",
            "description": [
                "Overview of financial literacy and its importance in personal and professional financial management.",
                "Understanding basic financial concepts such as budgeting, saving, investing, and debt management."
            ]
        },
        {
            "title": "Budgeting and Financial Planning",
            "description": [
                "Techniques for creating and managing personal budgets to track income, expenses, and savings goals.",
                "Strategies for setting financial goals, prioritizing spending, and creating a long-term financial plan."
            ]
        },
        {
            "title": "Banking and Financial Services",
            "description": [
                "Understanding different types of banking accounts, financial products, and services offered by banks and financial institutions.",
                "Exploring topics such as checking accounts, savings accounts, credit cards, loans, and interest rates."
            ]
        },
        {
            "title": "Investment Fundamentals",
            "description": [
                "Introduction to investment principles, asset classes, and investment vehicles such as stocks, bonds, mutual funds, and ETFs.",
                "Basics of portfolio diversification, risk management, and investment strategies for achieving financial goals."
            ]
        },
        {
            "title": "Retirement Planning",
            "description": [
                "Importance of retirement planning and strategies for building retirement savings over time.",
                "Overview of retirement accounts such as 401(k), IRA, and pension plans, and tax implications of retirement savings."
            ]
        },
        {
            "title": "Understanding Credit Scores and Credit Reports",
            "description": [
                "Explanation of credit scores, credit reports, and factors that influence creditworthiness.",
                "Tips for improving credit scores, managing debt responsibly, and avoiding common credit pitfalls."
            ]
        },
        {
            "title": "Taxes and Tax Planning",
            "description": [
                "Basics of income taxes, deductions, tax credits, and tax planning strategies for minimizing tax liabilities.",
                "Understanding tax forms, filing deadlines, and compliance requirements for individuals and businesses."
            ]
        },
        {
            "title": "Insurance Basics",
            "description": [
                "Overview of insurance concepts, types of insurance coverage, and factors to consider when purchasing insurance.",
                "Explanation of health insurance, auto insurance, homeowners/renters insurance, life insurance, and disability insurance."
            ]
        },
        {
            "title": "Real Estate and Homeownership",
            "description": [
                "Considerations for buying, selling, and owning real estate, including home financing options, mortgage rates, and property taxes.",
                "Exploring topics such as home affordability, mortgage pre-approval, closing costs, and home maintenance."
            ]
        },
        {
            "title": "Financial Decision Making and Risk Management",
            "description": [
                "Strategies for making informed financial decisions, evaluating financial risks, and managing financial emergencies.",
                "Developing critical thinking skills and confidence in managing personal finances effectively."
            ]
        },
        {
            "title": "Financial Independence and Wealth Building",
            "description": [
                "Principles of financial independence, wealth accumulation, and financial freedom.",
                "Exploration of strategies for building wealth, achieving financial goals, and planning for a secure financial future."
            ]
        },
        {
            "title": "Capstone Project: Personal Financial Plan",
            "description": [
                "Application of financial literacy concepts and skills to develop a comprehensive personal financial plan.",
                "Presentation of the capstone project, including financial goals, budgeting strategies, investment portfolio, retirement plan, and risk management strategies."
            ]
        }
    ]
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
    title: "Site map",
    links: [{id: uuidv4(),
        name: "Home",
        link: "/"},
      {id: uuidv4(),
        name: "About Us",
        link: "about"},
      {id: uuidv4(),
        name: "Courses",
        link: "courses"},
      {id: uuidv4(),
        name: "Contact",
        link: "contact"},
    ],
  },
  {id: uuidv4(),
    title: "Usefull Links",
    links: [{id: uuidv4(),
        name: "Certificates",
        link: "about"},
      {id: uuidv4(),
        name: "Privacy policy",
        link: "courses"},
      {id: uuidv4(),
        name: "Cookie Policy",
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
    id: "social-media-4",
    name: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-2",
    name: "facebook",
    icon: Facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-1",
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-3",
    name: "telegram",
    icon: Telegram,
    link: "https://www.telegram.com/",
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
    name: "Mobile",
    icon: PhoneCall,
    href: "tel:+380668470000",
    textColor: "#464242",
  }, 
];

export const aboutFaqs = [
  {id: uuidv4(),
    question: "Individual approach:", 
    answer: " We understand that each student is unique, so our approach to education is personalized and adapted to the needs of each learner."
  },
  {id: uuidv4(),
    question: "Experienced teachers:", 
    answer: " Our team consists of highly qualified and experienced teachers who are passionate about education and ready to support students at every stage of learning."
  },
  {id: uuidv4(),
    question: "Modern methodologies:", 
    answer: "We use advanced teaching methods and technologies to create interactive and engaging educational materials."
  },
  {id: uuidv4(),
    question: "Extensive program:", 
    answer: "Our educational center offers a wide range of courses and programs, allowing students to choose what suits their interests and goals."
  },
  {id: uuidv4(),
    question: "Support and motivation:", 
    answer: " We strive to create a supportive learning environment where every student feels confident and motivated to achieve their goals."
  },
  {id: uuidv4(),
    question: "Collaboration with parents: ", 
    answer: "We value partnership with parents and consider them important partners in the educational process."
  },
  {id: uuidv4(),
    question: "Community involvement:", 
    answer: "We are actively engaged in community and cultural initiatives, providing opportunities for broadening students' horizons and developing their social skills."
  },
];
