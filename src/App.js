import React, { useRef, useEffect } from 'react';
import './App.scss';
import People from "./images/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimeLineLite, Power2 } from "gsap";


function App() {

  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite()

  useEffect (() => {
    console.log(imageReveal)
  })

  return (
    <section className="main">
      <div className="container" ref={el => container = el}>
        <>
          <div className="img-container">
            <img
            ref={el => image = el}
            src={People} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
