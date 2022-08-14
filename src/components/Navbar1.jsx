import React from "react";
import "../styles/navbar.css";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import {
  handleAuth,
  handleLogout,
  signInWithGoogle,
} from "../utils/firebase/auth";
import { useWeb3 } from "@3rdweb/hooks";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: green;
  width: 210px;
  color: black;
  border: none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 1pz solid black;
  &:hover {
    background: yellow;
    color: black;
    border: 1pz solid yellow;
  }
`;

function Navbar1() {
  return (
    <>
      <div className="space"></div>
      {/*   -------------------------- section ---------------------------  */}
      <div className="faqTitle">Authored Websites</div>
      <div className="NavPlace ">
        <Button component={Link} to="" type="button">
          <a href="http://www.JamesAvakian.com/   ">James L. Avakian</a>
        </Button>
        <Button component={Link} to="" type="button">
          <a href="http://www.OpticalAutomation.com/  ">
            OpticalAutomation.com
          </a>
        </Button>
        <Button component={Link} to="" type="button">
          <a href="http://www.TechnologyAndTimes.com/  ">
            TechnologyAndTimes.com
          </a>
        </Button>
        <Button component={Link} to="" type="button">
          <a href="https://javakian1.wixsite.com/houseofwebs ">House Of Webs</a>
        </Button>
      </div>
      {/*   -------------------------- section ---------------------------  */}
      <div className="faqTitle1">
        - - FrontEnd Website and BackEnd Database - -
      </div>

      <div className="faqTitle1">
        MongoDB-ExpressJS-ReactJS-NodeJS, MERN, Deployed
      </div>
      <div className="NavPlace ">
        <Button component={Link} to="" type="button">
          <a href=" ">ReactJS, MongoDB, GraphQL</a>
        </Button>
        <Button component={Link} to="" type="button">
          <a href="  https://friendly-dolphin-d1d5ed.netlify.app/  ">
            ReactJS, MongoDB With Search
          </a>
        </Button>
        <Button component={Link} to="" type="button">
          <a href="https://todo-firebase-login.vercel.app/  ">
            ReactJS-Firestore Auth DB
          </a>
        </Button>
      </div>
      {/*   -------------------------- section ---------------------------  */}
      <div className="faqTitle1">
        ReactJS Websites Deployed
        <div className="NavPlace">
          <Button component={Link} to="" type="button">
            <a href="https://reactjs-calendar.vercel.app/   ">Calendar</a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://spectacular-croquembouche-ebc2c6.netlify.app/  ">
              Accordion
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://myoneuniverse-marketing.vercel.app/  ">
              NextJS MDX
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://jolly-liger-8f5f89.netlify.app/  ">Phantom</a>
          </Button>
        </div>
        {/*   -------------------------- section ---------------------------  */}
        <div className="faqTitle1">ReactJS eCommerce Websites</div>
        <div className="NavPlace ">
          <Button
            component={Link}
            to="https://www.dollardimestore.com/"
            type="button"
          >
            <a href="http://www.dollardimestore.com/   ">DollarDimestore.Com</a>
          </Button>
        </div>
        {/*   -------------------------- section ---------------------------  */}
        <div className="faqTitle1">ReactJS Photo Albums Deployed </div>
        <div className="NavPlace ">
          <Button component={Link} to="" type="button">
            <a href=" https://bejewelled-pavlova-b6958e.netlify.app/ ">
              Sortable Gallery
            </a>
          </Button>

          <Button component={Link} to="" type="button">
            <a href="https://zippy-sunburst-4628cf.netlify.app/ ">
              Columns Layout
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://regal-twilight-91d0f9.netlify.app/  ">
              Masony Layout
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://polite-froyo-1ceabf.netlify.app/   ">Row Layout</a>
          </Button>
        </div>
        {/*   -------------------------- section ---------------------------  */}
        <div className="faqTitle1">ReactJS More Deployed </div>
        <div className="NavPlace ">
          <Button component={Link} to="" type="button">
            <a href="  https://user-images.githubusercontent.com/92414210/171538464-78cf98d3-dc38-4520-af45-35a4ed04e70e.png  ">
              Cocktail
            </a>
          </Button>

          <Button component={Link} to="" type="button">
            <a href="https://dancing-monstera-7fe96e.netlify.app/  ">
              Color Chart
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://preeminent-cascaron-e6c93b.netlify.app/    ">
              Jokes API
            </a>
          </Button>
        </div>
        {/*                           section                       */}
        <div className="faqTitle1"> "The Branded Series" </div>
        <div className="NavPlace ">
          <Button component={Link} to="" type="button">
            <a href="https://javakian1.wixsite.com/website-20   ">
              . TheBrandedSeries.com .
            </a>
          </Button>
        </div>
        {/*   -------------------------- section ---------------------------  */}
        <div className="faqTitle1">Photo Albums </div>
        <div className="NavPlace ">
          <Button component={Link} to="" type="button">
            <a href="http://www.dollardimestore.com/   ">Photo 1</a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="  https://user-images.githubusercontent.com/92414210/171538464-78cf98d3-dc38-4520-af45-35a4ed04e70e.png  ">
              Cocktail
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://golden-fenglisu-5aa164.netlify.app/  ">eComm 2</a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://preeminent-cascaron-e6c93b.netlify.app/    ">
              Jokes API
            </a>
          </Button>
        </div>
        <div className="NavPlace ">
          <Button component={Link} to="" type="button">
            <a href="https://sparkly-queijadas-a6cad1.netlify.app/   ">
              Cocktails
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="  https://user-images.githubusercontent.com/92414210/171538464-78cf98d3-dc38-4520-af45-35a4ed04e70e.png  ">
              Cocktail
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://golden-fenglisu-5aa164.netlify.app/  ">eComm 2</a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="https://preeminent-cascaron-e6c93b.netlify.app/    ">
              Jokes API
            </a>
          </Button>
        </div>
        {/*   ---------------------------- section  ------------------------ */}
        <div className="faqTitle1">HTML Websites </div>
        <div className="NavPlace ">
          <Button component={Link} to="" type="button">
            <a href=" http://www.myonedesktop.com/index/flip  ">Website</a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href=" http://www.myonedesktop.com/index/stickymenu  ">
              Sticky Menu
            </a>
          </Button>
          <Button component={Link} to="" type="button">
            <a href="  https://javakian1.wixsite.com/website-21 ">
              James Avakian Versions
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar1;
