import "./App.css";
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import QuotexBox from "./components/QuotexBox";
import { useState } from "react";

function App() {

  const quotesRandom = (arr) =>{
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom]
  }
  const [quoteRandom, setquoteRandom] = useState(quotesRandom(quotes))
  const [colorRandom, setcolorRandom] = useState(quotesRandom(colors))
  
  const handleClick = ()=>{
    setquoteRandom(quotesRandom(quotes))
    setcolorRandom(quotesRandom(colors))
  }

  const objColors = {
    backgroundColor: colorRandom
  }  

  return (
    <div className="App" style={objColors}>
      <QuotexBox
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
    </div>
  );
}

export default App;
