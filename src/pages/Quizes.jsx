//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar1 from "../components/Navbar1";

const PhotoAlbum = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is a Mega Quiz?",
      answer: `   A Mega Quiz is a quiz that is made up of multiple questions.
      The quiz is designed to test your knowledge of the subject.
      Go this this URL link to see the quizes, https://astonishing-pothos-3b2a0c.netlify.app/" `,
      id: 1,
    },
  ]);

  return (
    <>
      <Navbar1 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Multiple Mega Quiz App</h1>
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

export default PhotoAlbum;
