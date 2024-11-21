import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Hero from '../assets/Main.json';
import Typed from 'typed.js';

function Main() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<span class="element">Web Developer</span>',
        '<span class="element">Frontend Developer</span>',
        '<span class="element">Backend Developer</span>',
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            Hi, I am <span className="purple">Anirban</span>
            <div>and I am a passionate</div>
            <span ref={el} />
          </div>
          <div className="rightSection">
            <Player
              autoplay
              loop
              src={Hero}
              style={{ height: '400px', width: '400px' }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
