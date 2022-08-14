//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar2 from "../components/Navbar2";

const Websites = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "Main Websites",
      answer: `JamesAvakian.com, OpticalAutomation.com, HouseOfWebs.com and more shown here 
      and in Website Access. `,
      id: 1,
    },
    {
      question: "How these websites present a network?",
      answer: `MyOneUniverse.com contains five websites named 
      AmericanPlace.com, ShopperLady.com, MyPersonalOrganizer.com, MyBusinessOrganiaer.com, and 
      MyTechnologyHouse.com, 
      Go and visit them.`,
      id: 2,
    },
    {
      question: "More videos here ... ?",
      answer: `Visit YouTube.com and search for James Avakian. My videos show many features of the company
      and MyOneUniverse features. ........,
      like OpenSea.`,
      id: 3,
    },
    {
      question: "eCommerce Websites",
      answer: `DollarDimestore.com, eCommerce

     T-Market, Foods, CapacityX, CCC,  Nous,  Besties, Rochelle Jewelry, Turning  

      Heads, Vesties, ElectronicsStore, and Smartest Way`,
      id: 4,
    },
    {
      question: "James L. Avakians Websites",
      answer: `James Avakian 2, James Avakian 3, James Avakian 4, James Avakian 5, James Avakian 6, James Avakian 7,
James Avakian 8, ​Cool Jimmy Band, Cool Jimmy Recording, James Avakian Photography`,
      id: 5,
    },
    {
      question: " Technology Websites, MyTechnologyHouse.com",
      answer: `my1.im, mydrive.im, mystuff.im, myimportantevents.com, `,
      id: 6,
    },
    {
      question: " More Technology Websites, within MyTechnologyHouse.com",
      answer: `my1.im, mydrive.im, mystuff.im, myimportantevents.com, `,

      id: 7,
    },
    {
      question: " More Technology Websites, within MyTechnologyHouse.com",
      answer: `my1.im, mydrive.im, mystuff.im, myimportantevents.com, `,
      id: 7,
    },
    {
      question: "More Technology Websites, within MyTechnologyHouse.com",
      answer: `The BrandedSeries, ​CameraBranded.com,  CarBranded.com, ProAudioBranded.com,
   TelevisionBranded, ​TVBranded, FoodBranded, Foodbranded1, GuitarBranded.com, 
               BassBranded,       DrumBranded,                PotteryBranded,   SoftwareBranded,
    Supercars,       MicroprocessBranded,   CameraBranded,      HomeBranded, CarBranded,
      SupercarsElectric,  BicycleBranded,    ElectricTrucks,      AnimalBranded, 
            MovieBrandedFemale,        MovieBrandedMale, PhotographyBranded.`,

      id: 8,
    },
  ]);

  return (
    <>
      <Navbar2 />
      <div className="faqWrapper">
        <h1 className="faqTitle">Product Websites</h1>
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

export default Websites;
