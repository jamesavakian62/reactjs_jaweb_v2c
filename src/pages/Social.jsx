//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar1 from "../components/Navbar1";

const Social = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What are my Social Media Accounts?",
      answer: `   Facebook     https://www.Facebook.com/james.avakian.9`,
      id: 1,
    },
    {
      question: "Where is my LinkedIn Account?",
      answer: `   LinkedIn     https://www.LinkedIn.com/in/james-l-avakian-13500713/`,
      id: 2,
    },
    {
      question: "Where is my Pinterest Account?",
      answer: `   Pinterest     https://www.Pinterest.com/jamesavakian/_saved/`,
      id: 3,
    },
    {
      question: "Where is my Instagram Account?",
      answer: `   Instagram     https://www.Instagram.com/jamesavakian/`,
      id: 4,
    },
    {
      question: "Where is my YouTube Account?",
      answer: `   YouTube     https://studio.YouTube.com/`,
      id: 5,
    },
    {
      question: "Where is my Twitter Account?",
      answer: `   Twitter     https://twitter.com/jamesavakian`,
      id: 6,
    },
  ]);

  return (
    <>
      <Navbar1 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Social Media Accounts</h1>
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

export default Social;
