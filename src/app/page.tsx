import { ImagesSliderDemo } from "@/components/HeroSection";
import { FocusCards } from "@/components/ui/focus-cards";
import { Section } from "@/components/ui/section";
import { SliderCarousel } from "@/components/ui/sliderCarousal";
import Image from 'next/image';
import {GridItem} from '@/components/GridItem'
import {NoticeCard} from "@/components/NoticeCard"
import { CarouselComp } from "@/components/CarouselComp";
import { BasicCard, SectionProps } from "@/types/universalTypes";

interface EcaCard extends BasicCard {
  activities: string[]
}
interface EcaContent extends SectionProps {
  cards: EcaCard[];
}

interface SchoolDivisionsContent extends SectionProps {
  cards: BasicCard[]
}

interface MissionVisionContent extends SectionProps {
  misionVisionCards: BasicCard[];
}

interface MessageCard extends BasicCard {
  name: string;
  education: string;
  designation: string
}

interface UpperManMessageContent extends SectionProps{
  messages: MessageCard[]
}
interface NoticeCard extends BasicCard {
  href: string;
}
interface NoticeContent extends SectionProps {
  notices: NoticeCard[];
}

export default function HomePage() {
  const ecaContent: EcaContent = {
    heading: "Extra Curricular Activites Beyond Academics",
    subHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, aperiam.",
    cards: [
      {
        title: "Academic Clubs",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        activities: ['Science Club', 'Math Club', 'Debate Club', 'Quiz Team'],
      },
      {
        title: "Sports and Athletics",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        activities: ['Football', 'Basketball', 'Cricket'],
      },
      {
        title: "Arts and Culture",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        activities: ['Music Band', 'Drama/Theater Club', 'Dance Club', 'Painting & Crafts Club']
      },
      {
        title: "Leadership and Community Service",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        activities: ['Student Council', 'Environmental Awareness']
      },
      {
        title: "Technology and Innovation",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        activities: ['Coding', 'Gaming and E-Sports']
      },
    ],
  };

  const schoolDivisionsContent: SchoolDivisionsContent = {
    heading: "School Divisions",
    subHeading: "Nurturing Young Minds, Building Strong Foundations",
    cards: [
      {
        title: "Foundational Stage (5 years)",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Play-based, activity-based learning to develop motor skills, language, and social abilities",
      },
      {
        title: "Preparatory Stage (3 years)",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Introduction of structured subjects like reading, writing, mathematics, and basic science in a more interactive manner",
      },
      {
        title: "Middle Stage (3 years)",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Subject-specific learning with hands-on projects, coding, and vocational exposure",
      },
      {
        title: "Secondary Stage (4 years)",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Multidisciplinary education, flexibility in subject choices, and skill-based learning to prepare for higher education or careers", 
      },
    ],    
  }

  const missionVisionContent: MissionVisionContent = {
    heading: "Mission/Vision",
    subHeading: "Nurturing Young Minds, Building Strong Foundations",
    misionVisionCards: [
      {
        title: "Our Mission",
        description: "Our vision at Universal Public School is to create a world-class educational institution that empowers students to achieve excellence in all aspects of life. We aim to foster a community of learners who are academically proficient, socially responsible, personally confident, and mentally resilient. Our goal is to make Universal Public School a launching pad for students to achieve their dreams and become successful, responsible, and compassionate individuals who make a positive impact in the world. We are committed to leading our school community towards achieving this vision and creating a brighter future for our students.",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Our Vision",
        description: "At Universal Public School, we are committed to fostering a learning environment that nurtures curiosity, innovation, and holistic development. Our school module is designed to provide a well-structured, engaging, and student-centric approach to education, ensuring that every learner reaches their full potential. Our Mission at Universal Public School, we are committed to fostering a learning environment that nurtures curiosity, innovation, and holistic development. Our school module is designed to provide a well-structured, engaging, and student-centric approach to education, ensuring that every learner reaches their full potential",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ],
  }

  const upperManMessageContent: UpperManMessageContent = {
    heading: "What our Founders Say",
    subHeading: "Nurturing Young Minds, Building Strong Foundations",
    messages: [
      {
        title: "MD Message",
        description: "Universal Public School is committed to empowering children's journeys while contributing to national transformation by enhancing infrastructure and fostering nation-building through quality education.",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ar.Ruchita Choudhary",
        designation: "Managing Director",
        education: "Universal Public School, Harlakhi"
      },
      {
        title: "School Coordinator Message",
        description: "Education is more than just academic success, it is the foundation upon which our children develop critical thinking, problem-solving skills, and a sense of responsibility.",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Mr. Raghvesh Chourasiya",
        designation: "Administrative Director",
        education: "Universal Public School, Harlakhi"
      },
    ],
  }

  const noticeContent: NoticeContent = {
    heading: "Notice Content",
    subHeading: "",
    notices: [
      {
        title: "Mobile App User Manual for Parents",
        description: "",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
      {
        title: "Mobile App Key Points",
        description: "",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
      {
        title: "Visit & Like School Youtube Page",
        description: "",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
      {
        title: "Visit & Like School Facebook Page",
        description: "",
        src: 'https://www.svgrepo.com/show/450458/link.svg',
        href: 'https://www.svgrepo.com/show/450458/link.svg'
      },
    ]
  };
  
  return (
    <main className="page-top-p relative">
      <ImagesSliderDemo />
      <NoticeSection content={noticeContent} />
      <SchoolDivisions content={schoolDivisionsContent} />
      <MissionVisionSection content={missionVisionContent} />
      <UpperManMessageSection content={upperManMessageContent} />
      <EcaSection content={ecaContent} />
    </main>
  );
}

function EcaSection({ content }: { content: EcaContent }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <FocusCards cards={content.cards} />
    </Section>
  );
}

function SchoolDivisions({ content }: { content: SchoolDivisionsContent }) {
  const divisions = content.cards.map((division, index) => (
    <div 
      key={index} 
      className="relative group w-[280px] h-[420px] rounded-2xl overflow-hidden 
                 bg-card dark:bg-card shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-[250px] w-full">
        <Image
          src={division.src}
          alt={division.title}
          fill
          className="object-cover"
          sizes="(max-width: 300px) 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          {division.title}
        </h3>
        <p className="text-sm text-card-foreground">{division.description}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
      </div>
    </div>
  ));

  return (
    <Section
      className="text-foreground"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <SliderCarousel items={divisions} isButtonVisible={true}/>
    </Section>
  );
}

function MissionVisionSection({ content }: { content: MissionVisionContent }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-2 lg:gap-4 xl:max-h-[34rem]">
        {content.misionVisionCards.map((misionVisionCard, index) => (
          <GridItem
            key={index}
            area=""
            title={misionVisionCard.title}
            description={misionVisionCard.description}
          />
        ))}
      </ul>
    </Section>
  );
}

function UpperManMessageSection({ content }: { content: UpperManMessageContent }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <ul className="grid grid-cols-1 grid-rows-none gap-4 sm:gap-8">
        {content.messages.map((message, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full min-h-[200px]"
          >
            {/* Image Section */}
            <div className={`w-full md:w-1/2 relative h-[150px] md:h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <Image
                src={message.src}
                alt={message.name}
                fill
                className={`w-full h-full object-cover rounded-t-xl ${index === 1 ? ' md:rounded-r-2xl' : 'md:rounded-l-2xl'}`}
              />
            </div>

            {/* Message Section */}
            <div className={`w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="max-w-lg">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-md md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                  {message.description}
                </blockquote>
                <div className="sc-text-body font-semibold text-gray-900 dark:text-gray-100">
                  {message.name}
                </div>
                <div className="text-[14px] text-gray-600 dark:text-gray-400">
                  {message.designation}
                </div>
                <div className="text-[14px] text-gray-600 dark:text-gray-400">
                  {message.education}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </Section>
  );
}

function NoticeSection({ content }: { content: any }) {
  return (
    <Section
      className="text-gray-900 dark:text-white"
      heading={content.heading}
      subHeading={content.subHeading}
    >
      <CarouselComp content={content} />
    </Section>
  );
}