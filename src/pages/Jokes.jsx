//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar1 from "../components/Navbar1";

const Jokes = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is a Jokes Page?",
      answer: `   An api access from a centralized set of Jokes.
      The quiz is designed to test your knowledge of your social ability and laugh -- high school level.
      Go this this URL link to see the quizes, 
      https://preeminent-cascaron-e6c93b.netlify.app/      `,
      id: 1,
    },
  ]);

  return (
    <>
      <Navbar1 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Photo Album</h1>
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

export default Jokes;
