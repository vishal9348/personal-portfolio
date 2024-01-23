import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  spring,
  html,
  css,
  reactjs,
  tailwind,
  git,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  mysql,
  hibernate,
  bootstrap,
  postgresql,
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
  // {
  //   id: 'download',
  //   title: 'Resume',
  // }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    title: 'HTML',
  },
  {
    name: "CSS 3",
    icon: css,
    title: 'CSS',
  },
  {
    name: "JavaScript",
    icon: javascript,
    title: 'JavaScript',
  },
  {
    name: "Java",
    icon: java,
    title: 'Java',
  },
  {
    name: "React JS",
    icon: reactjs,
    title: 'ReactJs',
  },
  {
    name: "mysql",
    icon: mysql,
    title: 'MySQL',
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    title: 'Tailwind',
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    title: 'PostgreSQL',
  },
  {
    name: "Hibernate",
    icon: hibernate,
    title: 'Hibernate',
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    title: 'Bootstrap',
  },
  {
    name: "git",
    icon: git,
    title: 'git',
  },
  {
    name: "Springboot",
    icon: spring,
    title: 'Spring-boot',
  },
  // {
  //   name: "docker",
  //   icon: docker,
  //   title: 'docker',
  // },
];

const experiences  = [
  {
    title: "Software Engineer",
    company_name: "Thinkcore Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2022 - Nov 2023",
    points: [
      "Developing and maintaining Restful API using Springboot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Automation Engineer",
    company_name: "Thinkcore Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developed and implemented automated test script using AccelQ to enhance testing efficiency and reduce manual effort.",
      "Collaborated with cross-functional teams, including developers and QA, to integrate automated testing",
      "Implemented effective strategies for test script maintenance, reducing the impact of application changes on automated tests.",
    ],
  },
  {
    title: "Java Full stack Development training",
    company_name: "JSpyder",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Completed comprehensive training in Java Full Stack Development, covering both front-end and back-end technologies to build end-to-end web applications.",
      "Acquired a solid foundation in Java programming, demonstrating the ability to develop robust and scalable back-end solutions.",
      "Gained expertise in front-end technologies, including HTML, CSS, and JavaScript, to create dynamic and responsive user interfaces.",
      "Learned to integrate databases into applications using technologies like Hibernate, gaining hands-on experience in creating, querying, and managing databases.",
      "Implemented RESTful APIs to facilitate communication between the front-end and back-end, enabling seamless data exchange in web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Anant Bera",
    designation: "Co-Founder",
    company: "BigOCode",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sanjay Gupta",
    designation: "Founder",
    company: "RP Enterprises",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " Exceptional automation engineer! Max's precision and innovation streamline processes, ensuring optimal efficiency. A true asset to any team.",
    name: "Narendra Narayana",
    designation: "Manager",
    company: "Thinkcore Technologies",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Contact Management System",
    description:
      "Web-based platform that allows users to Signup & Signin, Add Contact, and manage contact Details, providing a convenient and efficient solution for Adding contact",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Sprinboot",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vishal9348/smartcontactmanager",
  },
  {
    name: "Ecommerce Web Application",
    description:
      "Web application that enables users to search for Products, view products, and order the product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vishal9348/Ecommerce-React",
  },
  {
    name: "Live Cricket Score",
    description:
      "A comprehensive Live Match Cricket Score Board platform that allows users to check check live matches and Live score.",
    tags: [
      {
        name: "AngularJs",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vishal9348/cricketScoreBoard",
  },
   {
    name: "Blog Application Backend",
    description:
      "A comprehensive Bloging platform that allows users to Add Blogs, images, and Update the details, and allow other users to like and comment for the blogs.",
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };