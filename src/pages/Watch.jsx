//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar2 from "../components/Navbar2";

const Watch = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is a Mobile Watch Face? ",
      answer: `I purchased an Apple Watch and it is just great. I have a computer app 
      that allows me to create different Apple watch faces. I can talk to Apple Siri. 
      I can ask what time it is. To play music. I can where McDonalds is near me. I can also 
      ask about the weather. Apple Watch and Phones are information sources and really 
      assist your daily life needs. They operate as full computers on your wrist.`,
      id: 1,
    },

    {
      question: "My Apple Watch Face changes ... ?",
      answer: `Yes, I design and created many Watch Faces. It is like a canvas on your wrist.
      I can create different Watch Faces for different occasions. I can create different 
      Watch Faces for different occasions. It is dynamic. I can create different Watch Faces
      my watch is dynamic. Like me I can select a face according to my mood, my clothes, and
      sourroundings.`,
      id: 2,
    },

    {
      question: "With my Apple Computer I create faces?",
      answer: `My computer allows me to create Watch Faces. It keeps me creative and I can show 
      you. `,
      id: 3,
    },
  ]);

  return (
    <>
      <Navbar2 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Mobile Watch Faces Designed</h1>
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

export default Watch;
