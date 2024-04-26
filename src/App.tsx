import { useEffect, useState } from 'react';
import { quotes } from '../data/quotes';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [randomColor, setRandomColor] = useState('#282c34');
  const [fadeClass, setFadeClass] = useState('fade-in');

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const tweet_url = `https://twitter.com/intent/tweet?text=${randomQuote.quote} - ${randomQuote.author}`;

  useEffect(() => {
    console.log("executou o useEffect");
    const timer = setTimeout(() => {
      setFadeClass('fade-out');
    }, 1000);
    return () => clearTimeout(timer);
  }, [quote]);

  const getRandomColor = () => {
    console.log("executou o getRandomColor");
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(color);
  }

  const getRandomQuote = () => {
    console.log("executou o getRandomQuote");
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
    setFadeClass('fade-in');
    getRandomColor();
  }

  return (
    <div className="container" style={{ backgroundColor: randomColor }}>
      <div id="quote-box">
        <div id="text" className={`quote-container ${fadeClass}`}>
          <i className="fa fa-quote-left"> </i>
          {randomQuote.quote}
        </div>
        <div id="author" className={`quote-container ${fadeClass}`}>
          - {randomQuote.author}
        </div>

        <div id="footer">
          <div className="links">
            <a id="tweet-quote" href={tweet_url} target="_blank" style={{ backgroundColor: randomColor }}>
              <i className='fa fa-twitter'></i>
            </a>
            <a className="default-button" style={{ backgroundColor: randomColor }}>
              <i className='fa fa-tumblr'></i>
            </a>
          </div>
          <button id='new-quote' onClick={getRandomQuote} style={{ backgroundColor: randomColor }}>
            New quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;