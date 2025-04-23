import React, { useEffect, useState } from 'react'

const Randomquote = () => {

const [quote, setQuote] = useState("")
const [error, setError] = useState("")
const [author, setAuthor] = useState('')

const fetchquote = async () => {
  try {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  } catch (err) {
    console.error('Error fetching quotes:', err);
    setError('Failed to fetch a quote.');
  }
};

useEffect(() => {
  fetchquote();
}, []);




  return (
    <div className="renadom-quote-generator">
      <h1>Random Quote Generator</h1>
      <div className="quote-box">
        <p id="quote">Click the button to load a quote!</p>
        <p className="author" id="author">{quote}</p>
        <p id="author">{author}</p>
        <button onClick={fetchquote}>Get New Quote</button>
      </div>
    </div>
  )
}

export default Randomquote