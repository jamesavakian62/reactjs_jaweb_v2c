//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar3 from "../components/Navbar3";

const React1 = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "How do I make software?",
      answer: `I am a Full Stack Software Website Developer and create websites. My latest design is six main websites with hundreds of applications. Designed as a network for people and business it will be of interest, be practical, and operate as an important datasource everyone will want to use. My experiences, background, and past development has prepared me to perform research, coding, and development. From I have a passion to work with people and develop ReactJS, Next.JS React Full Stack application software.`,
      id: 1,
    },
    {
      question: "What my background includes?",
      answer: `I have developed several app websites. They include personal, business, and eCommence apps. I constantly learn and develop Next.js with TailwindCSS coding and methods. Daily I write MERN, MongoDB-Atlas, Express.js, NodeJS, and ReactJS, software technologies for website database deployment for application production. With my coding I deploy websites to GitHub and several hosting companies, Atlantic, Digital Ocean, Heroku and Vercel.`,
      id: 2,
    },
    {
      question: "What next do I do?",
      answer: `Managing Next.js and TailwindCSS website content, color, and configuration,

Experience with MERN, MongoDB Atlas, Express. Js, React.jsj, and Node.js npm technologies

Experience with TailwindCSS Full Stack Responsive Web Design software production

Ability to work under time pressure and articulate technical challenges and solutions

Excellent interpersonal communication with strong verbal / written English skills

A constant desire to improve, learn, and take things to the next level

Experience building localized, multi-tenant solutions`,
      id: 3,
    },

    {
      question: "Before making website what I did?",
      answer: `My background includes HTML, CSS, Bootstrap, W3CSS, TailwindCSS, and Wix software programming. Past research includes mobile app design and development. I created Apple Swift for iOS apps and later Xamarin C# for iOS and Android apps. Then two and a half years I learned MERN and for the past year daily produce NextJS Website and Database. My website JamesAvakian.com and MyOneUniverse.com are examples of software application websites.

 `,
      id: 4,
    },

    {
      question: "Work I did at Optical Automation?",
      answer: `My work can be seen from website references listed on my resume and at http://www.OpticalAutomation.com. Great interviews are best by a face to face and hope to land new work as time goes on. I look forward for a chance to make something great for your company by joining your development team. My enclosed resume will give you a better understanding of my background and skills. Please feel free to call at any time to discuss the requirements of this position.`,
      id: 5,
    },
  ]);

  return (
    <>
      <Navbar3 />
      <div className="faqWrapper">
        <h1 className="faqTitle">ReactJS Website Software</h1>
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

export default React1;
