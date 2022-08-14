//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar1 from "../components/Navbar1";

const Cocktail = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is a Cocktail Hub?",
      answer: `A ReactJS app that generates several alcholic drinks as a recipie app. It is found at 
      Internet URL: https://sparkly-queijadas-a6cad1.netlify.app/`,
      id: 1,
    },
  ]);

  return (
    <>
      <Navbar1 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Cocktail Recipie Hub</h1>
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

export default Cocktail;
