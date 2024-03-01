export interface dept{
  name:string;
  about:string;
  vision:string;
  mission:string[];
  hod:string;
  imgurl:string;
  contact:number;
  email:string;
}
interface NavLink {
    key: number;
    name: string;
    route: string;
  }
  interface CardHomeItems {
    key: string;
    name: string;
    description: string;
    imgurl?: string;
  }
  export const NavLinkss: NavLink[] = [
    { key: 1, name: "HOME", route: "/" },
    { key: 2, name: "ABOUT", route: "about" },
    { key: 3, name: "DEPARTMENTS", route: "departments" },
    { key: 4, name: "FACILITIES", route: "facilities" },
    { key: 5, name: "PLACEMENTS", route: "placements" },
    { key: 6, name: "GALLERY", route: "gallery" },
    { key: 7, name: "ACHIEVEMENTS", route: "achievements" },
    { key: 8, name: "ALUMNI", route: "alumni" },
    { key: 9, name: "CONTACT", route: "contact" },
  ];
 
  export const AIML_DEPARTMENT:dept = {
    name: 'Artificial Intelligence and Machine Learning',
    about:"Artificial Intelligence and machine Learning (AI&ML) is a new, emerging field which consists of a set of tools and techniques used to extract useful information from data. AI&ML is a fast growing discipline and is full of rigorous practical analysis. The demand for undergraduates in AI and ML has industry required skills and demand in the Global market over the last few years. Artificial Intelligence and Machine Learning is also in line demand with computer science. Machine learning is an established research discipline. However, recent advances have increased the impact on many areas of society, science, medicine, and everyday life.AI with ML is in demand in the robotics applications, space technology, industry4.0 and many more.AI and ML delivers modern computational systems that demonstrate capabilities of perception, reasoning, learning and action that are typical of human intelligence. B.Tech. Artificial Intelligence and Machine Learning programme emerging area is start, in our College, from the academic year 2021– 22 with a vision to emerge as a premier center for education and research in Artificial Intelligence and Machine Learning and in transforming students into innovative professionals of contemporary and future technologies to cater the global needs of human resources. AI and ML course aims to indulge knowledge in not only the core technologies such as artificial intelligence, data mining and data modelling and also make ready students expertise in thrust areas such as machine learning, and deep learning. Students with this course can gain thorough knowledge in: Intelligent Systems, Machine Learning, Deep Learning, Reinforcement Learning, Natural Language Processing, and Technologies for machine learning with cloud computing, big data analytics Reasoning, Internet of Things, Statistical Learning and visualization skills. The goal of artificial intelligence (AI) and machine learning is to program computers to use example data or experience to solve a given problem. Many successful applications based on machine learning exist already, including systems that analyse past sales data to predict customer behaviour (financial management), recognize faces or spoken speech, optimize robot behaviour so that a task can be completed using minimum resources, and extract knowledge from bioinformatics data.",
    vision:'To emerge as a premier center for education and research in Artificial Intelligence and Machine Learning and in transforming students into innovative professionals of contemporary and future technologies to cater the global needs of human resources for IT and ITES companies.',
    mission: [
      'To provide skill-based education to master the students in problem-solving and analytical skills to enhance their niche expertise in the field of Artificial Intelligence and Machine Learning.',
      'To explore opportunities for skill development in the application of Artificial Intelligence and Machine learning among rural and underprivileged populations.',
      'Transform professionals into technically competent individuals through innovation and social responsibility.',
      'To promote research-based projects and activities among students in the emerging areas of Artificial Intelligence and Machine Learning.',
      'To impart quality and value-based education and contribute towards the innovation of computing systems, data science to raise satisfaction levels of all stakeholders.',
    ],
    hod: 'Mr.Hemanth ',
    contact: 9988776655,
    email:"aanm&vvrsr-aiml@gec.com",
    imgurl: '/assets/Depts/aiml.png',
  };
  // constant.ts

export const CIVIL_DEPARTMENT:dept = {
  about:"Civil Engineering stands as the cornerstone of societal development, intertwining innovation with the fundamental aspects of infrastructure creation and maintenance. This multifaceted discipline encompasses a spectrum of specialties, including structural engineering, geotechnical engineering, environmental engineering, and transportation engineering.At our esteemed institution, the B.Tech. Civil Engineering program, inaugurated in the academic year 2021–22, signifies a commitment to nurturing adept professionals capable of tackling the intricate challenges of the contemporary world. Students embark on a journey that delves into the heart of civil engineering, exploring cutting-edge advancements in construction materials, sustainable design practices, and the integration of smart technologies in urban planning. The curriculum is meticulously designed to offer a holistic education, blending theoretical knowledge with hands-on experiences. In classrooms, students engage with in-depth analyses of structural dynamics, geotechnical principles, and environmental impact assessments. Moreover, our state-of-the-art laboratories provide a platform for practical experimentation, fostering a keen understanding of real-world applications.The significance of civil engineering extends beyond bricks and mortar; it shapes the very foundations of societies. Students are encouraged to envision and implement innovative solutions to global challenges, considering factors such as climate change, urbanization, and resource conservation. Internship programs and industry collaborations further enrich the learning experience, providing students with exposure to real-world projects and challenges.As future leaders in civil engineering, students in our program gain proficiency in project management, sustainable infrastructure development, and the integration of digital technologies in construction. The curriculum emphasizes the cultivation of critical thinking, problem-solving skills, and ethical considerations in engineering practices. Graduates from our Civil Engineering program emerge not only as technical experts but as visionaries prepared to contribute to the creation of resilient, sustainable, and smart cities. Through a combination of theoretical knowledge, practical skills, and a commitment to societal well-being, our students are well-equipped to make meaningful contributions to the field.",
  name: 'Civil Engineering',
  vision:
    'To become a leading center for education and research in Civil Engineering, nurturing students to be proficient professionals equipped with contemporary knowledge and skills to meet the global demands in infrastructure development.',
  mission: [
    'To provide a comprehensive and skill-based education that empowers students in problem-solving and analytical skills within the field of Civil Engineering.',
    'To explore opportunities for skill development in civil engineering applications, especially in the context of infrastructure development for rural and underprivileged populations.',
    'Transform students into technically competent individuals through innovation and a sense of social responsibility.',
    'To promote research-based projects and activities among students in emerging areas of Civil Engineering.',
    'To impart quality and value-based education, contributing towards the advancement of sustainable and resilient infrastructure.',
  ],
  hod: 'Mr. Hemanth',
  contact: 9988776655,
  email: "aanm-vvrsr-civil@gec.com",
  imgurl: '/assets/Depts/civil.jpg',
};
// constant.ts

export const CSE_DEPARTMENT: dept = {
  name: 'Computer Science and Engineering',

  vision:
    'To be a leading center for education and research in Computer Science and Engineering, fostering students to excel as innovative professionals in contemporary and future technologies, addressing global needs in the IT and software industry.',
  mission: [
    'Provide skill-based education to empower students with problem-solving and analytical skills in the field of Computer Science and Engineering.',
    'Explore opportunities for skill development in various applications of computer science, including rural and underprivileged populations.',
    'Transform professionals into technically competent individuals through innovation and a strong sense of social responsibility.',
    'Promote research-based projects and activities among students in emerging areas of Computer Science and Engineering.',
    'Impart quality and value-based education to contribute to the advancement of computing systems and software development.',
  ],
  hod: 'Mr. Hemanth',
  contact: 9988776655,
  email: "aanm-vvrsr-cse@gec.com",
  imgurl: '/assets/Depts/cse.jpg',
  about:"Computer Science and Engineering (CSE) is the driving force behind the digital transformation that defines the modern era. As a field that continually evolves, CSE influences everything from software development to artificial intelligence and data science. The B.Tech. Computer Science and Engineering program at our institution is at the forefront of preparing students for this dynamic landscape.Commencing in the academic year 2021–22, our program is tailored to instill a robust foundation in computer science principles. The curriculum is a blend of classical theories and contemporary technologies, ensuring that students are well-versed in algorithms, data structures, and programming languages. However, we go beyond the basics, immersing students in the realms of machine learning, cloud computing, and software engineering methodologies.What sets our program apart is the emphasis on practical learning. Students participate in hands-on projects, collaborate on industry-relevant case studies, and engage in internships with leading technology companies. The program's structure fosters creativity, problem-solving skills, and adaptability – essential qualities in the fast-paced and ever-changing world of information technology.The significance of CSE extends far beyond coding and algorithms. Our students are exposed to the ethical considerations of technology, ensuring that they understand the societal impact of their work. With a keen focus on interdisciplinary collaboration, students explore the convergence of technology with other fields, such as healthcare, finance, and environmental science.The goal of the B.Tech. Computer Science and Engineering program is to produce graduates who not only possess technical expertise but also possess a deep understanding of the societal implications of their work. Our alumni are not just software developers; they are innovators, leaders, and ethical technologists prepared to shape the future."
};

// You can use this template and customize the values for other departments as needed.

// constant.ts

export const ECE_DEPARTMENT: dept = {
  name: 'Electronics and Communication Engineering',
  about:"Electronics and Communication Engineering (ECE) is the backbone of the interconnected world we live in. This dynamic field encompasses the design of electronic devices, communication systems, and advanced technologies that power the global exchange of information. Our B.Tech. Electronics and Communication Engineering program, initiated in the academic year 2021–22, is crafted to empower students in this ever-evolving domain. The program unfolds with a comprehensive exploration of digital signal processing, communication networks, embedded systems design, and advanced electronics. Students delve into the intricate workings of communication protocols, wireless technologies, and signal processing algorithms. Our laboratories are equipped with cutting-edge tools, providing students with hands-on experiences to complement their theoretical understanding.A distinctive feature of our program is the integration of industry-aligned projects and internships. Students collaborate with leading companies on real-world challenges, gaining insights into current industry practices and establishing valuable connections. The program's structure fosters creativity and innovation, encouraging students to design novel solutions for global challenges.Beyond the technical aspects, our ECE program places a strong emphasis on communication skills, teamwork, and ethical considerations. Students engage in projects that require not only technical prowess but also effective communication of their ideas. This holistic approach prepares graduates to not only design advanced electronic systems but also to communicate their significance to diverse audiences.The world of Electronics and Communication Engineering is characterized by rapid advancements. Our program not only equips students with the foundational knowledge to navigate current technologies but also instills in them the adaptability and curiosity needed to embrace innovations on the horizon. Graduates emerge as well-rounded professionals, ready to contribute to the continued evolution of electronic and communication technologies.",
  vision:
    'To emerge as a premier center for education and research in Electronics and Communication Engineering, fostering students to excel as innovative professionals in contemporary and future technologies, addressing global needs in the field of communication and electronics.',
  mission: [
    'Provide skill-based education to empower students with problem-solving and analytical skills in the field of Electronics and Communication Engineering.',
    'Explore opportunities for skill development in various applications of electronics and communication, including rural and underprivileged populations.',
    'Transform professionals into technically competent individuals through innovation and a strong sense of social responsibility.',
    'Promote research-based projects and activities among students in emerging areas of Electronics and Communication Engineering.',
    'Impart quality and value-based education to contribute to the advancement of communication systems and electronic technologies.',
  ],
  hod: 'Mr. Hemanth',
  contact: 9988776655,
  email: "aanm-vvrsr-ece@gec.com",
  imgurl: '/assets/Depts/ece.jpg',
};

// You can use this template and customize the values for other departments as needed.
// constant.ts

export const EEE_DEPARTMENT: dept = {
  name: 'Electrical and Electronics Engineering',
  vision:
    'To be a leading center for education and research in Electrical and Electronics Engineering, nurturing students to excel as innovative professionals in contemporary and future technologies, addressing global needs in the field of electrical and electronics.',
  mission: [
    'Provide skill-based education to empower students with problem-solving and analytical skills in the field of Electrical and Electronics Engineering.',
    'Explore opportunities for skill development in various applications of electrical and electronics, including rural and underprivileged populations.',
    'Transform professionals into technically competent individuals through innovation and a strong sense of social responsibility.',
    'Promote research-based projects and activities among students in emerging areas of Electrical and Electronics Engineering.',
    'Impart quality and value-based education to contribute to the advancement of electrical and electronic technologies.',
  ],
  hod: 'Mr. Hemanth',
  contact: 9988776655,
  email: "aanm-vvrsr-eee@gec.com",
  imgurl: '/assets/Depts/eee.jpg',
about:"Electrical and Electronics Engineering (EEE) is the driving force behind the electrification of the world and the development of electronic devices that permeate every aspect of our lives. Our B.Tech. Electrical and Electronics Engineering program, launched in the academic year 2021–22, delves into the heart of this expansive field, equipping students with the skills and knowledge to power the future.Students in our program engage in a comprehensive curriculum that spans power systems, control systems, electronics, and renewable energy technologies. Theoretical concepts are complemented by hands-on experiences in well-equipped laboratories. This combination ensures that graduates are not only well-versed in the principles of electrical and electronics engineering but are also adept at applying these principles to real-world scenarios.A unique aspect of our program is its emphasis on interdisciplinary collaboration. Students have the opportunity to work on projects that intersect with other engineering disciplines, fostering a holistic understanding of technological applications. This approach mirrors the interconnected nature of modern engineering challenges, where solutions often require a convergence of diverse perspectives.The program's commitment to practical application extends to internships and industry projects, where students collaborate with established companies to solve real-world problems. This exposure to industry practices ensures that graduates are not just theoretically grounded but are also familiar with the demands and expectations of the professional realm.Beyond technical skills, the B.Tech. Electrical and Electronics Engineering program prioritizes the development of critical thinking, problem-solving, and ethical considerations. Students are encouraged to explore the societal implications of electrical and electronics technologies, considering factors such as sustainability, energy efficiency, and accessibility.Graduates from our program emerge as forward-thinking professionals, ready to contribute to the advancements in energy systems, electronics, and sustainable technologies. They are prepared not only to meet the challenges of today but also to anticipate and address the complex engineering challenges of the future."
};

// You can use this template and customize the values for other departments as needed.
// constant.ts

export const MECH_DEPARTMENT: dept = {
  name: 'Mechanical Engineering',
  vision:
    'To be a premier center for education and research in Mechanical Engineering, nurturing students to excel as innovative professionals in contemporary and future technologies, addressing global needs in the field of mechanical systems and engineering.',
  mission: [
    'Provide skill-based education to empower students with problem-solving and analytical skills in the field of Mechanical Engineering.',
    'Explore opportunities for skill development in various applications of mechanical systems, including rural and underprivileged populations.',
    'Transform professionals into technically competent individuals through innovation and a strong sense of social responsibility.',
    'Promote research-based projects and activities among students in emerging areas of Mechanical Engineering.',
    'Impart quality and value-based education to contribute to the advancement of mechanical systems and engineering technologies.',
  ],
  hod: 'Mr. Hemanth',
  contact: 9988776655,
  email: "aanm-vvrsr-mech@gec.com",
  imgurl: '/assets/Depts/mech.jpg',
  about:"Mechanical Engineering is the heartbeat of industrial evolution, propelling innovation, and steering the development of machines and systems that define our modern world. At the core of our academic offerings, the B.Tech. Mechanical Engineering program, launched in the academic year 2021–22, embarks on a journey to empower students with the skills and knowledge that will drive the future of mechanical systems.Comprehensive Curriculum: Unveiling the Dynamics of Mechanical EngineeringIn the pursuit of excellence, our program unfolds a comprehensive curriculum that navigates through the intricacies of various mechanical engineering disciplines. Students dive deep into subjects such as thermodynamics, fluid mechanics, materials science, and robotics. This knowledge foundation is further enhanced by practical applications, including computer-aided design (CAD) and finite element analysis (FEA), ensuring that graduates are well-versed in both theoretical principles and practical implementation.The program recognizes the pivotal role of robotics and automation in the contemporary engineering landscape. Students are exposed to cutting-edge developments in these fields, preparing them to design and control robotic systems that are integral to modern manufacturing processes.Hands-On Learning: Bridging Theory and PracticeAt the heart of our Mechanical Engineering program lies a commitment to hands-on learning. Our well-equipped laboratories provide students with the platform to conduct experiments, engage in real-world projects, and gain practical insights into the complexities of mechanical systems. This hands-on approach ensures that graduates not only comprehend theoretical concepts but are also adept at applying their knowledge to solve real-world engineering challenges.Interdisciplinary Collaboration: Fostering a Holistic Engineering Perspective"

};

// You can use this template and customize the values for other departments as needed.

// You can customize the values as per the specific details for the Civil Engineering department.

  interface CarouselItems{
    id:number;
    carouselimg:string;
  }
  export const CarouselItems:CarouselItems[] = [
    {
      id:1,
      carouselimg:"/assets/carousal/sports.png"
    },
    {
      id:2,
      carouselimg:"/assets/carousal/mentor awards.png"
    },
    {
      id:3,
      carouselimg:"/assets/carousal/collage.png"
    
    },
    {
      id:4,
      carouselimg:"/assets/carousal/chandrababu awards.png" 
    }
  ]
  export const CardHomeItems:CardHomeItems[] = [
  {
    key: '1',
    name: 'Distinction',
    
    description: 'The polytechnic is the only institution with the highest intake of 1260+EWS 126 (Total 1386) among all the government and private Polytechnics.',
  },
  {
    key: '2',
    name: 'State Rankers',
  
    description: 'The polytechnic students achieved 14 state ranks till 2017 since 2009, 7 state first ranks, 1 state rank (Private poly), 6 state second ranks (Private poly)',
  },
  {
    key: '3',
    name: 'Placements',

    description: 'The employment opportunities for the I Class Diploma pass outs have been quite encouraging but only 30%',
  },
];
interface Paragraph {
  id: string;
  content: string;
}

export const paragraphs: Paragraph[] = [
  {
    id: '1',
    content:
      'Our students Secured 1, 2, 3, 3.4, 4, 6, 6.7, 7, 8, 9, 10 Ranks below 10 and 93 Ranks below 100 in APECET 2020...',
  },
  {
    id: '2',
    content: 'Our students Secured 5, 8, 9, 10, 10 Ranks below 10 and 47 Ranks below 100 in APECET 2019...',
  },
  {
    id: '3',
    content:
      'Bagged 41 ECET Ranks Below 100 in AP ECET 2018 The Ranks are 2, 4, 4, 6, 10, 13, 14, 15, 17, 25, 27, 27, 29, 29, 30, 30, 34, 35, 35, 37, 41, 42, 43, 44, 53, 55, 59, 61, 63, 66, 67, 74, 75, 77, 81, 82, 82, 89, 94, 95, 96',
  },
  {
    id: '4',
    content:
      'The Polytechnic is awarded as "AP BEST PRIVATE POLYTECHNIC" by Department of Technical Education, Government of Andhra Pradesh for the Academic Year 2014-15 ...',
  },
  {
    id: '5',
    content:
      'Our Student G ANUHYA, 16030-EC-047 secured overall State SECOND RANK AMONG PRIVATE POLYTECHNICS WITH (99.2%) among Pass-outs in all branches of 2018-2019 Diploma batch ...',
  },
  {
    id: '6',
    content:
      'Received "Best Performing Cisco Networking Academy Ward 2018-19" from Cisco and Department of Technical Education, AP.',
  },
  {
    id: '7',
    content: '114+ Students Placed Till now in the Academic Year 2019-20 with salary ...',
  },
];


interface Mission {
  id: string;
  content: string;
}

export const Mission: Mission[] = [
  {
    id: '1',
    content:
      'To impart quality technical knowledge and skills with learner centered practices by using advanced engineering tools, modern facilities and with expert faculty.',
  },
  {
    id: '2',
    content:
      'To empower faculty with profound knowledge and skills in cutting edge technologies and modern teaching methods.',
  },
  {
    id: '3',
    content:
      'To facilitate Industry–Institute interaction to expose students to current industrial practices that help them to address industrial and societal challenges efficiently.',
  },
  {
    id: '4',
    content:
      'To integrate curricular and co-curricular activities with extra-curricular and societal activities for developing global citizens.',
  },
];
interface campusCarouselItems{
  id:number,
  imgurl:string,
  name:string
}
export const campusCarouselItems:campusCarouselItems[] = [
  {
    id:1,
    imgurl:"/assets/Campus/Ecet Rankers.jpg",
    name:"ECET Rankers"
  },
  {
    id:2,
    imgurl:"/assets/Campus/hostel.jpg",
    name:"Hostel"
  },
  {
    id:3,
    imgurl:"/assets/Campus/library.jpg",
    name:"Library"
  },
  {
    id:4,
    imgurl:"/assets/Campus/MOUs.jpg",
    name:"MOUs"
  },
  {
    id:5,
    imgurl:"/assets/Campus/placement.jpg",
    name:"Placement"
  }
]
interface Companies{
  key:number,
  imgurl:string,
  name:string

}
export const Companies:Companies[] = [
  {
    key:1,
    imgurl:"/assets/Companies/amararaja.png",
    name:"Amararaja"
  },
  {
    key:2,
    imgurl:"/assets/Companies/hcl.png",
    name:"HCL"
  },
  {
    key:3,
    imgurl:"/assets/Companies/heritage.png",
    name:"Heritage"
  },
  {
    key:4,
    imgurl:"/assets/Companies/idea.png",
    name:"Idea",
  },
  {
    key:5,
    imgurl:"/assets/Companies/ncc.png",
    name:"NCC"
  },
  {
    key:6,
    imgurl:"/assets/Companies/tech-mahindra.png",
    name:"Tech Mahindra"
  },
  {
    key:7,
    imgurl:"/assets/Companies/wipro.png",
    name:"Wipro"
  },
  {
   key:8,
   imgurl:"/assets/Companies/tata.png",
   name:"Tata" 
  }
]
