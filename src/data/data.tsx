import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitchIcon from '../components/Icon/TwitchIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Resume built by Duy",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Duy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a recent graduate from Singapore, actively pursuing career opportunities as a <strong className="text-stone-100">Full Stack Developer</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me live on <a href="https://www.twitch.tv/marithus_">
        <strong className="text-stone-100">Twitch</strong>
        </a>,
        playing my favorite <strong className="text-stone-100"> games</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1WTFWUjqKu55XnC7tHcdfUz8oO72QDzw0/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Originating from Vietnam, I relocate to Singapore where I dedicated myself to the field of full-stack development.
  Beyond my academic pursuits, I am an enthusiastic gamer who finds immense joy in live-streaming on Twitch, fostering connections within vibrant communities, and engaging with friends, prioritizing a healthy lifestyle and value spending quality time with friends.
  I have forged a substantial portion of my early portfolio through contributions to various school projects. My aspiration is to contribute my skills and expertise to the thriving tech industry in Singapore, where I aim to make a lasting impact through innovative and forward-thinking endeavors.`,
  aboutItems: [
    {label: 'Location', text: 'Singapore', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'Games, Basketballs, Building Computers', Icon: SparklesIcon},
    {label: 'Study', text: 'University of London', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking...', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Developer Tools',
    skills: [
      {
        name: 'Unity',
        level: 7,
      },
      {
        name: 'VScode',
        level: 9,
      },
      {
        name: 'Git/Github',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
    ],
  },
  {
    name: 'Frameworks:',
    skills: [
      {
        name: 'Express.js',
        level: 7,
      },
      {
        name: 'React-Natives',
        level: 7,
      },
      {
        name: 'Django',
        level: 8,
      },
    ],
  },
  {
    name: 'Libraries:',
    skills: [
      {
        name: 'P5.js',
        level: 9,
      },
      {
        name: 'pandas',
        level: 8,
      },
            {
        name: 'JUCE',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Twinsie',
    description: 'Web application helps developers to perform Pair Programmings',
    url: 'http://twinsie-ac751fa5d700.herokuapp.com/',
    image: porfolioImage1,
  },
  {
    title: 'Twinsie Mobile Chat App',
    description: 'Mobile chat application developed to provide seamless and secure communication between users.',
    url: 'https://github.com/marithus/Twinsie-Mobile-App',
    image: porfolioImage2,
  },
  {
    title: 'Mobile Calculator App',
    description: 'Simple Calculator app that have the ability to switch themes.',
    url: 'https://github.com/marithus/Twinsie-Mobile-App',
    image: porfolioImage3,
  },
  {
    title: 'DJ App',
    description: 'Software that allow users to mix tracks',
    url: 'https://github.com/marithus/Music-App',
    image: porfolioImage4,
  },
  {
    title: 'Doodlly',
    description: 'Web application that allow users to be creative with their drawings',
    url: 'https://github.com/marithus/Doodlly',
    image: porfolioImage5,
  },
  {
    title: 'Math-quarium',
    description: 'Group project that i lead to develop a website that educate Children about Math using Games',
    url: 'https://github.com/Slowo207/Group_78_Final_Project',
    image: porfolioImage6,
  },
];

/**
 * Resume section 
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2019 - 2023',
    location: 'University of London',
    title: 'Bachelor’s Degree of Computer Science',
    content: <li>Specialize in Web and Mobile Development. 
              <li>On track to obtain First-class Honors </li>
              <li>Attained distinctions in many challenging modules: Algorithm & Data Structures, Discrete mathematics, and Machine learning & Neural Networks.</li>  
              </li>
  },
  {
    date: '2017 - 2019',
    location: 'Catholic Junior College',
    title: 'A Level',
    content: <p>Activities and societies: Basketball, Welfare LeaderActivities and societies: Basketball, Welfare Leader
    Studied: H2 Math, Physics, and Economics; H1 Chemistry, General Paper, and Project Work.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - June 2023',
    location: 'Stall7',
    title: 'Part-timer',
    content: (
      <p>
        Assisted in setting up the automated counter. Work with the backend database to ensure that all orders are included in and storage is updated correctly.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'TBA',
      text: 'TBA',
      image: 'https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png',
    },
    {
      name: 'TBA',
      text: 'TBA',
      image: 'https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you are interested in hiring me, do leave an email :D',
  items: [
    {
      type: ContactType.Email,
      text: 'pham.a.bduy@gmail.com',
      href: 'mailto:pham.a.bduy@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Singapore',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@marithus_duy',
      href: 'https://www.instagram.com/marithus_duy/',
    },
    {
      type: ContactType.Github,
      text: 'marithus',
      href: 'https://github.com/marithus',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/marithus'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/duy-pham-anh-bao-251162251/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/marithus_duy/'},
  {label: 'Twitch', Icon: TwitchIcon, href: 'https://www.twitch.tv/marithus_'},
];
