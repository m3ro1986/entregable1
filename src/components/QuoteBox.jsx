import quotes from '../quotes.json'
import { useState } from 'react'

const QuoteBox = () => {

    const randomColorGenerator = () => {

        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    }

    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)].quote);
    const [author, setAuthor] = useState(quotes[Math.floor(Math.random() * quotes.length)].author);
    const [color, setColor] = useState(randomColorGenerator());

    const changeQuote = () => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)].quote)
        setAuthor(quotes[Math.floor(Math.random() * quotes.length)].author)
        setColor(randomColorGenerator())
        
    }

    document.body.style = `background-color: ${color}`;

    return (
        <div className='boxquote'>
            <div className="flex">
                {/* <h2 style={{color: color }}><i class="fa-solid fa-quote-left"></i></h2> */}
                <i style={{color: color }} class="fa-solid fa-quote-left"></i>
                <p style={{color: color }}> {quote} </p>
            </div>
            <h3 style={{color: color }}> {author} </h3>
            {/* <button onClick={changeQuote} style={{backgroundColor: color }} > <i className="fa-solid fa-circle-chevron-right"></i> </button> */}
            <i onClick={changeQuote} style={{color: color }} className="fa-solid fa-circle-chevron-right"></i>
        </div>
    );
};

export default QuoteBox;