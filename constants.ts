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
