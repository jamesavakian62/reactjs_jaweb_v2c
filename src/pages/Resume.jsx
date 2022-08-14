//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar3 from "../components/Navbar3";
import { Document } from "react-pdf";

const Resume = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "My PROFESSIONAL SUMMARY",
      answer: `I develop ReactJS Websites, they are my speciality. I am skilled at 
      developing, enhancing, integrating and supporting front and back-end HTML-JSX, JSON, 
      Responsive Website Design, and MongoDB Atlas websites. I use Next.JS with CSS, 
      Bootstrap, W3CSS, and TailwindCSS resulting in displays for computers, tablets, and 
      cellphone display equally. I also have React.JS experience for api and RESTful access 
      database by MERN, MongoDB, Express.JS, React.JS, and Node.JS technologies. I develop 
      and support an end to end software lifecycle across the entire software development of 
      gathering, analysis, design, coding, testing, and deployment. Applications include 
      eCommerce, personal, business, portfolios, informative, and accounting web databases. 
      I am flexible and can move quickly from draft mockups into web languages. I have a real 
      passion for the end-to- end solutions that drive the user experience and customer 
      satisfaction from website database to mobile platform interactive display experience.`,
      id: 1,
    },

    {
      question: "My Resume?",
      answer: `Please write me a email to JamesAvakian62@yahoo.com and ask for my Resume.`,
      id: 2,
    },

    {
      question: "Why is it private?",
      answer: `One reason is because it has my personal information.`,
      id: 3,
    },
  ]);

  return (
    <>
      <Navbar3 />
      <div className="faqWrapper">
        <h1 className="faqTitle">My Resume</h1>
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

export default Resume;
