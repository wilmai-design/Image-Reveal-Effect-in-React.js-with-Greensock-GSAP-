import React, { useRef, useEffect } from 'react';
import './App.scss';
import People from "./images/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2, Power3 } from "gsap";


function App() {

  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let nav = document.getElementsByTagName("nav");

  const tl = new TimelineLite()

  useEffect (() => {
    //console.log(imageReveal)
    tl.to(container, 0, { css:{ visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.5 })
      .from(nav, 1, { opacity: 0, y: 50, ease: Power2.easeInOut, delay: -1 });
  })

  return (
    <section className="main">
      <div className="container" ref={el => container = el}>
        <>
          <nav className="nav">
            <ul>
              <li>Home</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="img-container">
            <img
            ref={el => image = el}
            src={People} />

            <h2>The new era is the developer, and the UI.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <button>
              Ver más
            </button>
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
