//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar2 from "../components/Navbar2";

import CarouselExample from "../components/CarouselExample";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import { create } from "@mui/material/styles/createTransitions";
import Websites from "./Websites";

const Software = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What Software do you use to create Full Stack Websites?",
      answer: `Yes my full stack software of choice is ReactJS and CSS3 for design, development, and 
      deployment of website networks. I have experience with ReactJS and CSS3
      Bootstrap, Material, and TailwindCSS. Also I use NextJS with TailwindCSS due to the marketing
      features server side programming offers to Search Engines and SEO. 
      I have also used NodeJS, ExpressJS, and MongoDB for MERN programming, my mainstay is ReactJS for 
      front end softare design and deployment.`,

      id: 1,
    },
    {
      question: "Support Software Tools? ",
      answer: `I use Microsoft Visual Studio Code, Github Respositories, and Github Copilot 
      I use Visual Studio Code for my development work by the use of extensions for 
      access code snippets. I use Github for my team work, version control, and deployment by
      Netlify for public access to my websites.    
      While coding inside Visual Studio, I use Github Copilot for suggestions. Copilot is a
      tool that allows you to suggest ReactJS and CSS3 features to the project. By Artificial 
      Intelligence, it looks inside my code respositories and others to offer its code snippet suggestions.
      That ia a great way to implement and deploy websites by use of Microsoft Github's new technologies.`,
      id: 2,
    },
    {
      question: "Additional Software Support",
      answer: `I also use Adobe Photoshop, Adobe Illustrator, and Microsoft Office / OpenOffice to 
      create supporting files and documents. I create png from pexels, edit images by Photoshop, and create
      Word docs, Powerpoint, and more from either Office SVGUnitTypes. With my Apple MacOS I use 
      dictation so I can create voice memos and create audio files and convert them to JavaScript js files
      for direct use inside my Websites. I use page Inspector from Google chrome, Microsoft Edge, and Firefox 
      to assist in identifying issues with my websites. I use Google Chrome for my development work. `,
      id: 3,
    },
    {
      question: "Because I use ReactJS ...",
      answer: `This software designed by Facebook ten years, makes it a standard for hiring and an website
      industry standard. In addition ReactNative uses Visual Studio Code for its development work ReactNative 
      uses a similar programming language to ReactJS. ReactNative is a mobile application development framework. 
      ReactNative is a cross-platform framework for building native apps for iOS, Android, and Windows.
      ReactNative is a JavaScript library for building user interfaces. ReactNative is a JavaScript library and 
      could build upon my ReactJS website deployment. What website needs mobile apps for cellular phones and
      tablets? ALL of them! So ReactJS is an asset to the deployment of websites and later as app 
      for mobile phones and tablets. Because of this business and hiring managers look for ReactJS programming
      talent and skills. `,

      id: 3,
    },
  ]);

  return (
    <>
      <Navbar2 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Software Programming</h1>

        <div className="App1">
          <CarouselExample />
          <div className="item4">
            return <ImageSlider slides={SliderData} />;
          </div>
        </div>

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

export default Software;
