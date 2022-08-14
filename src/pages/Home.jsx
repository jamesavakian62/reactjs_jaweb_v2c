import React, { useState, useEffect } from "react";

import "../styles/home.css";
import Faq from "../components/Faq";

import Card from "./Card";
import Data from "./Apidata";

import CarouselExample from "../components/CarouselExample";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

const Home = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "Great Automobiles",
      answer: `For some, people really own these cars, for others the dream is worth reading, watching, and 
      if your are lucky driving. Performance is available, technology is here, and still cars, supercars, and 
      four wheel vehicles are still coming. Prepare to be amazed. Buy the best cars, and the best cars will 
      be yours. I am a automotive enthusiast. Shift gears, go forward, and fast
      it is all part of the dream!`,
      id: 1,
    },

    {
      question: "What Sets Sports Cars Apart from Ordinary Cars?",
      answer: `Imagine yourself driving around Los Angeles in an incredible piece
            of machinery designed and built for swiftness, power, speed, and
            unbelievable performance. Sports cars were originally strictly made
            for races and tracks, but after 1945, men who were returning from
            war fell in love with these beauties and the thrilling ride they
            offer. These days, you will see sports cars of all shapes, sizes,
            colors, and brands owning the streets of Los Angeles. Below are just
            some of the features that distinguish sports cars from ordinary
            vehicles:      `,
      id: 2,
    },
    {
      question: " Unbelievable Speed",
      answer: `Sports cars are undeniably the king of the road. There is a good
            reason these vehicles are compared to the speed of light. Several of
            these cars are even faster compared to the speed of light itself.
            For instance, in the National Association for Stock Car Auto Racing
            (NASCAR), their acceleration power is so extreme that it takes them
            about 3 to 3.5 seconds to go from 0 to 60 km/h. Standard vehicles
            have an average speed of approximately 60mph, yet their incapacity
            to cut corners makes them lag behind sports cars. The need for speed
            is indeed ingrained in sports cars and this makes them the ultimate
            car champion.    
      `,
      id: 3,
    },
    {
      question: "Excellent Engine Performance",
      answer: `            The engines of sports cars are top-of-the-line and designed for peak
            performance horsepower and torque. The standard engine is made to
            keep longevity and fuel efficiency in mind, so performance is not
            the main priority in ordinary vehicles. As far as sports cars are
            concerned, considering that their engine is crafted from lightweight
            materials, these vehicles perform much better on the road compared
            to ordinary cars. All sports cars are also intended to leverage
            their performance aspects. A great example of this is McLaren which
            has been meant to be aerodynamic to offer support to its overall
            speed.
 `,
      id: 4,
    },

    {
      question: "Unrivaled Beauty",
      answer: `           Modern-day sports cars are not only the epitome of agility and
            performance but are also the most beautiful beasts that ever grazed
            the streets of the world. They are extremely captivating and
            instantly turn heads anywhere they go. From the gorgeous Corvette
            Convertible to the shark-like exterior of the Ford Mustang, for
            instance, these sports cars are all-powerful in their own rights.
            They speak a lot about the fine artisan and craftsmanship skills
            that go into designing both the interior and exterior of every unit.   `,
      id: 5,
    },
    {
      question:
        "   The beauty of these vehicles is that they are not only beautiful ...           ",
      answer: `  
            These cars are everywhere, you can buy one or rent one. 
There are car dealers and car rental companies that sell sports cars! The problem is 
the best cars require either paying more or waiting, because supply of them is scarce!  

Either way your ideal dream car dealer is
            fully committed. Since buying some cars is a long process, fortunate for you, 
            rental companies have an  extensive fleet. 
            They have sports cars, luxury cars, and
            exotic cars, such as Rolls Royce, Lamborghini, Porsche, and
            many more. Check
            out   
            https://dreamlinecarrental.com/los-angeles-ca-usa/laguna-beach-ca-usa
            and find the right sports car for you. With sports car rentals, you
            no longer have to spend a lot of cash just to buy one for yourself. Reprinted from 
             https://www.nile-auto.com/ `,
      id: 6,
    },
  ]);

  return (
    <>
      <div className="faqWrapper">
        <h1 className="faqTitle">Welcome To My Website!</h1>
      </div>
      <div className="App1">
        <CarouselExample />
        <div>
          return <ImageSlider slides={SliderData} />;
        </div>
      </div>

      <div className="faqWrapper">
        <h1 className="faqTitle">A Hobby - Great Automobiles </h1>
        <div className="darkGlassCard faqContainer">
          {/* //Map through the FAQs and display them */}
          {faqs.map((faq) => {
            return (
              <Faq key={faq.id} question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
