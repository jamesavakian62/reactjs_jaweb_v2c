//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar2 from "../components/Navbar2";

const Apps = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "Mobile Apps are Responsive Websites?",
      answer: `I am a website developer, and now creating both front and back -end
      website access. Responsive websites are full functional for mobile access display.
      A Responsive Website Design, 
      RWD, makes a website that is automatically size adjustable for 
      computer, tablet, and cellphone sizes, fast and 
      easily.  My style includes RWD ReactJS programming by either CSS3, Bootstrap, 
      or TailwindCSS programming.`,
      id: 1,
    },
    {
      question: "Apps, iOS, Andriod, and Responsive Websites?",
      answer: `I make universal RWD websites, for use on all devices.
      No need for specialized app or additional app access. From a single Internet
      URL the website is responsive and mobile friendly. 
      This provides a universal access on devices.  No need for a separate apps
      that require App and PlayStore acceptance.
      Clients access apps directly from the Internet
      free or have private paid storeage access.`,
      id: 2,
    },
    {
      question: "Universal App Websites?",
      answer: `Free and easy access, the client just access a domain name URL for access.
      No need for a separate app, only ReactJS. For a website and separate app 
      you need Apple Swift and Andriod codesets. Universal apps only neew ReactJS and
      responsive RWD coding to display everywhere easily. Your clients will thank you
      because life is easier with Universal RWD website access.`,
      id: 3,
    },
  ]);

  return (
    <>
      <Navbar2 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Mobile App Software</h1>
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

export default Apps;
