//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar3 from "../components/Navbar3";

const MyStory = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is My Story, My Autobiography?",
      answer: `I went to school tweleve years in Los Angeles, California. In High School most 
      everyone were musicians. In 1975, I knew hundreds of musicians. Everyone played 
      guitar, bass, sung vocals, played drums, or worked in audio reproductions. During that 
      time, Teac Corporation, Japan, developed the tradk 3340 model Reel to Reel. It gave
      the home garage band a way to create demo tapes.
       I learned 24 track audio engineering at a Hollywood school. 
       I also learned to play the drums, vibraphone and marimba percussion. 
       I met a songwriter singer and recorded four songs in the class. 
       In class downstairs at Capital Records, Universal Studios, TTG, and others 
       for Brian Ingoldsby Audio Recording class.`,
      id: 1,
    },
    {
      question: "What I did after I graduated?",
      answer: `After I graduated from high school in 1975, I attended California Institute of 
      the Arts, Valencia, California. I everything Harmony, African, Indian, and Balanese percussion--World Music. My main major was percussion,  played drums, and mallet keyboard instruments.  One of my first jobs was as an assembler of roller skate boards in Burbank, CA. Another job was at Professional Audio Systems, North Hollywood building wood cabinets and tri-amplified crossover six amplifier big loud speaker systems. As a musician, I was poor, but had the energy, stamina, and creative genius at that time.`,
      id: 2,
    },
    {
      question: "First Employer was AZ Radio?",
      answer: `In 1978 I was twenty-one years old and employed by AZ Radio. On skid-row downtown Los Angeles I worked at the discount appliance and made lots of money. Then bought a home.  I met a girlfriend, worked, and after three years had a motorcycle riding in the California Mojave Desert and broke my leg. During the recovery I had time to time to heal and think about my future. Time passed and I decided to attend California Polytechnic State University at San Luis Obispo electronics engineering school. With much english and math preliminary training, I was accepted and graduated four years later with a Bachelor of Science engineering degree in Electronics Engineering Technology in 1986.`,
      id: 3,
    },
    {
      question: "After college, What was my first job?",
      answer: `Before graduation, I interviewed with Hughes Aircraft in El Segundo, California. I was hired during a hiring freeze, and then was layed off within a year. I sold my new 1986 red Corvette and moved to Santa Barbara. I attended one of the first C Programming classes at University Of California, Los Angeles, UCLA Extension in Los Angeles.  Also I attended  Santa Barbara Community College and took business and grant proposal writing for my company in 1987. `,
      id: 4,
    },
    {
      question: "Now in Santa Barbara, what I did?",
      answer: `I designed and wrote several Phase One National Science Foundation and National Eye Foundation Small Business Innovation Research, SBIR, grant proposals. I submitted twenty or more, government Phase One grant proposals over a couple of years.  Time submission deadlines and writing formats were strict. I designed, wrote, and drew drawings for product patents to measure eyeglasses and human eye movement by imaging camera. Still with   little financial income, I moved back to my North Hollywood home--financially I leased it for nearly ten years. `,
      id: 5,
    },

    {
      question: "The start of Optical Automation?",
      answer: `In 1992 I became Optical Automation Incorporated in California.  During this time I taught myself  HTML, CSS, and Bootstrap also wrote Microsoft C++ programming language using Visual Studio the beginning of the ShopperLady concepts. I submitted grant and patent proposals to National Science Foundation, Department of Commerce, National Eye Institute, and the Armed Forces grant foundations. Still denied acceptance everytime without any government financial assistance, I begun looking for employment. `,
      id: 6,
    },
    {
      question: "Work After Optical Automation? I needed a job?",
      answer: `With my education and talent for computers, it was the year 2000 when American Telephone And Telegraph, AT& &, El Segundo hired me. I was a Field Technician and drove a brand new van to install DSL Internet and software into clients home IBM computers . After a year I was then replaced by post office mail and a product modem box as a DSL self install kit.  I transferred into the AT & T  T1 Digital Maintenance department at San Ramon, California National Call Center. I worked there for six years and then for another six years in Tustin, California repairing Digital T1 business service for the company. Worked day, night, and mornging hours and by 2013, I retired from the telephone company. With my creative talent and retirement I hired myself. `,
      id: 7,
    },

    {
      question: "What I did to survive?",
      answer: `I bought musical instruments and recording equipment, I became, GoodDayMusic.com. With the help of the internet, Reverb.com, and Craigslist.com, I sold two hundred thousand dollars of equipment from my apartment over four years, from 2013 to 2017. During  that time I learned the Apple Swift programming and Microsoft Xamarin Mobile App development language.  The Mobile App Industry was slow in Los Angeles. Consumers and app usage was not accepted. Since most computer use was on the Internet learned Facebooks latest innovation, ReactJS. For the next three years I designed MyOneUniverse as a self taught MERN, MongoDB, ExpressJS, ReactJS, and NodeJS languages. To master full stack JavaScript language, I attended Clever Programmer in October 2021 and completed the program with a Certificate by January 2022. `,
      id: 8,
    },

    {
      question: "What am I doing now?",
      answer: `Today, as I look back, becoming a musician was fun, gave me focus, and was exhilarating, but glad I did the music and graduation with Technologist degree. My work at ATT was real and glad to put it behind me and from it now living by government Social Security retirement. My talent marketing appliances during the 70's as a musician gave me a base to market guitar, bass, drums, and recording electronics to get retail experience marketing to the public. But my most recent completion of ReactJS has presented me with a a means for developing NextJS and MongoDB for MERN style data driven websites for my network, MyOneUniverse.com.  `,
      id: 9,
    },
    {
      question: "My Story, My Autobiography, What I did after I graduated?",
      answer: `By James Avakian, Developer and Founder, Optical Automation, LLC
      .`,
      id: 10,
    },
  ]);

  return (
    <>
      <Navbar3 />
      <div className="faqWrapper">
        <h1 className="faqTitle">My Story</h1>
        <div className="darkGlassCard faqContainer">
          {/* //Map through the FAQs and display them */}
          {faqs.map((faq) => {
            return (
              <Faq key={faq.id} question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </div>{" "}
    </>
  );
};

export default MyStory;
