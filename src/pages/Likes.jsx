//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar1 from "../components/Navbar1";

const Likes = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "What I Like and Dislike?",
      answer: `I am a regular guy and like regular things
      I like the color blue and red. I read the Internet and write many pages for my website and I like to play 
      with the computer.`,
      id: 1,
    },
    {
      question:
        "I like romantic dinners, where I may take a girl for the evening?",
      answer: `I do not like if she is late or with another guy. Yes a dress or nice looking clothes.`,
      id: 2,
    },
    {
      question: "I like many things, an interview?",
      answer: `Education/Certifications: I have a Bachelor's Degree in Computer Science.
BS in Engineering Technology in Electronics from California Polytechnic State University at 
San Luis Obispo, CA. I graduated in June 1986.  Also recently have a Microsoft Xamarin Certificate
 in App Development from Xamarin University in 2019.    `,
      id: 3,
    },
    {
      question: "Where are you from originally?",
      answer: `I was born in Los Angeles, CA, I lived in many places in the state of California, now live in Tarzana, CA.`,
      id: 4,
    },
    {
      question: "What was your occupation before now?",
      answer: `I was a remote circuit Test Technician for Networks of ATT California. My job was to repair
 T1 circuit in thirteen states from California to New York by computer and telephone. I code the 
 Internet programming using php/MySql, I have nearly fifty websites..`,
      id: 5,
    },

    {
      question: "What is your favorite music?",
      answer: `I've been listenting to music since a teenager in the seventies. I liked rock, jazz, 
      and progressive rock. Most favorite bands included Jimi Hendrix, Steely Dan, Boz Skaggs, The 
      Beatles, Joni Mitchel, 
James Taylor Led Zepplin, Jetro Tull, Pink Floyd, Billy Cobham, and John Mclaughlin.`,
      id: 6,
    },
    {
      question: "When did you first take photographs?",
      answer: `I took my first pictures in the late seventies. I took pictures of my family and friends.
I was looking for a challenge, and liked the idea of combining my passion for music with my professional
 experience. I was using a film Nikkormat 35 mm camera. I rented many lenses for concert photography
  in the 70's and now use Sony and Nikon DSLR cameras. I have a passion for photography !`,
      id: 7,
    },

    {
      question: "What instruments you play",
      answer: `I play the guitar, the piano, the drums, the bass, the cello, the violin, the flute, 
      the 
I play Drums, Guitar and Bass primarily, but also play a little bit of keyboard and also play
Vibraphone. I reinvented myself, by GuitarBranded, I sell instruments and more importantly I 
produce music by Apple Computer GarageBand software--no musicians needed!.`,
      id: 8,
    },

    {
      question: "What is your favorite food?",
      answer: `I love to eat. I like to eat many different foods. 
      I like to eat Italian food, Mexican food, and American food. I like to eat many different foods.`,
      id: 9,
    },

    {
      question: "What is your favorite movie?",
      answer: `I like to watch movies. I like to watch many different movies, Top Gun, The Matrix,
      The Matrix Reloaded, and Action movies.   `,
      id: 10,
    },

    {
      question: "What is your favorite book?",
      answer: `I do not have a favorite book, just the Internet, it has everything and all the time.`,
      id: 11,
    },

    {
      question: "What is your favorite song?",
      answer: `I like to listen to music. I like to listen to many different songs, 
  I like the beatles, the beatles, the beatles, the beatles, the beatles, the beatles, and more beatles.`,
      id: 12,
    },

    {
      question: "What is your favorite color?",
      answer: `I like red, blue, and the rainbow.`,
      id: 13,
    },

    {
      question: "When did you first play drums?",
      answer: `I was teenager playing Thiry-one Flavors ice cream paper cartons, then my friends started 
a band. We played 50's Rock and Roll during the sixties. I later got a Ludwig oversized bass drum set 
with Zildjian cymbals.  I later found Paiste to be what Progressive Rock bands, Emerson, Lake, and 
Palmer, Led Zepplin, and Yes use them and the sound was unique compared to Zildjians.  `,
      id: 14,
    },

    {
      question: "What is your favorite girl?",
      answer: `Personally,   Looking for a love that wants to stay, one that loves people and my artwork, including my 
   software projects.`,
      id: 15,
    },
  ]);

  return (
    <>
      <Navbar1 />
      <div className="faqWrapper">
        <h1 className="faqTitle">What Are My Likes And Dislikes? </h1>
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

export default Likes;
