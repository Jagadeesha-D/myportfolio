import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import '../Home.css';

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to my digital playground</h1>
      <h1 className="home__subtitle">
        <ReactTypingEffect
          text={[' where innovation meets creativity!']}
        />
      </h1>
      <p className="home__description">Dynamic development for innovative solutions.</p>
    </div>
  );
}

export default Home;
