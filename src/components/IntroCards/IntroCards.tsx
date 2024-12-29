import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import './IntroCards.scss';

export default function IntroCards () {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    
    <div className="container-intro">
      <section className={`big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h1 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "React-Entwickler an der Schnittstelle von Design und Code." : "Python Developer with Passion in AI and Machine Learning"}</h1>
        <h2 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Angefangen mit HTML, CSS und JavaScript habe ich mir eigenständig das Programmieren beigebracht. Auch jenseits von JavaScript gibt es vieles zu entdecken: Heute arbeite ich mit TypeScript in React, verwende Redux oder Context zum State-Management und nutze SASS als Pre-Processor für CSS. Wie man sieht arbeite ich desweiteren gern mit Motion Libraries - bspw. Framer Motion." : "As a tech enthusiast, I am always looking for opportunities to learn and grow. Whether it’s on academic courses, personal projects, or collaborations, I’m always interested in expanding my horizons and staying abreast of the latest trends and innovations in AI and technology."}</h2>
      </section>

    </div>
  );
}
