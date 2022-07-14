import './IntroSection.css';

export function IntroSection() {
    return (
      <div className = "intro-section">
        <img src="https://i.postimg.cc/d18jz1NR/avatar-1024.png" alt="pixel avatar"></img>
        <div className = "intro-text">
          <h1>Hi, I'm Simon Partridge</h1>
          <br/>
          <p>I’m a <span className="accent-text">Doctor of Chemistry</span> and former copy editor.</p>
          <br/>
          <p>I travelled the globe over the last 10 years, but now I’m starting a new adventure as a <span className="accent-text">Junior Software Developer</span>.</p>
        </div> 
      </div>
    );
};