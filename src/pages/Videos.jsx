//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar2 from "../components/Navbar2";

const Videos = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What is a Software Product Video?",
      answer: `Videos I designed and created to assist in the development of our network.
      MyOneUniverse is a single network place where people can save and retrieve personal and 
      business information including media. Because people are made of a past, present, and future,
      the network provides a means for planning, living, and goal planning.`,
      id: 1,
    },
    {
      question: "How Many Websites make up the MyOneUniverse Network?",
      answer: `Websites and Marketing Videos plus one company plan and a video from the author of the company.
      .............................................................................
      Intro, https://biteable.com/watch/3035980/b7b7c1a2ea14509b9b6e152036949f15
      MyOneUniverse,...............................................................
       https://biteable.com/watch/3097407/594a720b62bae68b534951d25eb0dbd3
      AmericanPlace, .............. ...............................................
       https://biteable.com/watch/3081382/4ca1b6f98216d3de312e043e19c7e477
      ShopperLady, ................................................................
       https://biteable.com/watch/3036301/9daa88c0c742444f8edb2a1fd4961fdf
      MyPersonalOrganizer, ........................................................
       https://biteable.com/watch/3036416/d13a69fe6ecd6b46d67bfbf36500ceb4
      MyBusinessOrganiaer, ........................................................
       https://biteable.com/watch/3039291/459a747027c6b92a0e5b3ca30f1ce2d2
      MyTechnologyHouse, ..........................................................
       https://biteable.com/watch/3261325/ac1ef537457524ade58bc73cfe4c7a72 
      TechnologyAndTimes...........................................................
      https://biteable.com/watch/3041599/7951c6d469fd16c1f488856b2da18915
      OpticalAutomation,...........................................................
      https://biteable.com/watch/3036644/5d5e973fde30a409cd59ec9ec36ee406
     New Promotion,................................................................
     https://biteable.com/watch/3231935/5c14860830d52b31d2e5f97afdcc2960
     Authored by James L. Avakian,................................................. 
     https://biteable.com/watch/3261325/ac1ef537457524ade58bc73cfe4c7a72
      .............................................................................
      Go and visit them.`,
      id: 2,
    },
    {
      question: "Where are these Product videos?",
      answer: `Visit YouTube.com and search for James Avakian. My videos show many features of the company
      and MyOneUniverse features. ...........The process varies based on what platform you use. And there are a lot
      of platforms. On Top Shot for instance, you register to join a
      waitlist that can be thousands of NBA fans long. When a digital asset
      goes on sale, you’re randomly chosen to buy it. While Top Shot accepts
      USD as well as crypto, some platforms only accept cryptocurrencies,
      like OpenSea.`,
      id: 3,
    },
  ]);

  return (
    <>
      <Navbar2 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Product Software Videos</h1>
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

export default Videos;
