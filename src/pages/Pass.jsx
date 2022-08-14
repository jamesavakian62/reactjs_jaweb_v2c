//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar1 from "../components/Navbar1";

const Password = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "Where is my software?",
      answer: `My ReactJS app applications take time and care in development deployment. So am 
      asking you to call or email me for access into and behind the vault of my work.
      email me at jamesavakian62@yahoo.com"`,
      id: 1,
    },
  ]);

  return (
    <>
      <Navbar1 />
      <div className="faqWrapper">
        <h1 className="faqTitle">My App Applications and Access</h1>
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

export default Password;
