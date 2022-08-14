//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar3 from "../components/Navbar3";

const GreatThings = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "Masters And Mentors?",
      answer: `Every website has a story, and your visitors want to hear yours. This space is a great 
      opportunity to give a full background on who you are, what your team does, and what your site has to 
      offer. Double click on the text box to start editing your content and make sure to add all the 
      relevant details you want site visitors to know. If you’re a business, talk about how you started and share your professional journey. Explain your 
core values, your commitment to customers, and how you stand out from the crowd. Add a photo, gallery, 
or video for even more engagement.`,
      id: 1,
    },
    {
      question: "Photos, Places, and More",
      answer: `Every website has a story, and your visitors want to hear yours. This space is a great 
      opportunity to give a full background on who you are, what your team does, and what your site has 
      to offer. Double click on the text box to start 
      editing your content and make sure to add all the relevant details you want site visitors to know.`,
      id: 2,
    },

    {
      question: "Software Development - Let's Make You A Website.",
      answer: `Every website has a story, and your visitors want to hear yours. This space is a great 
      opportunity to give a full background on who you are, what your team does, and what your site 
      has to offer. Double click on the text box to start editing your content
       and make sure to add all the relevant details you want site visitors to know. `,
      id: 3,
    },
    {
      question: "Want To Record Music?",
      answer: `Acoustic drums are great, but Electronic Drums, by Alesis and Roland are better. Sound 
      loudness volume control by amplifier and input to computer Digital Audio Workstation, DAW, Apple 
      Computer GarageBand app. Just get an Audio Interface, use the integrated USB jack to connect to 
      software instruments, faders, and sound equalization ! ​Playing music allows me to imitate great
       musicians, Eric Clapton, Jimi Hendrix. Hey, I might be great someday. see CoolJimmy.Com and 
       CoolJimmyRecording.com studios !  A good website to reference for Professional Audio Equipment 
       and stuff, ProAudioBranded.com ! Past passions, the basis of my musicianship and all of my past talents - for real, GoodDayMusic.com. 
started learning drums, 1970's!  Cool Jimmy imitators, ... oh so sweet !  More !.`,
      id: 4,
    },
  ]);

  return (
    <>
      <Navbar3 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Great Things</h1>
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

export default GreatThings;
