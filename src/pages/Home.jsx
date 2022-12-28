import React, { useState } from 'react'

const Home = (props) => {

  const upperHandler =()=>{
    let upperText = text.toUpperCase();
    setText(upperText);
  }
  const lowerHandler =()=>{
    let lowerText = text.toLowerCase();
    setText(lowerText);
  }

   const capatalizeHandler =()=>{
    const arr = text.split(" ");
    
  for (var i = 0; i < arr.length; i++) {
     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); }

     const str2 = arr.join(" ");
    setText(str2)
   }

   const trimHandler =()=>{
    let lowerText = text.replace(/\s+/g," ");
    setText(lowerText);
  }

  const clearText =()=>{
    let lowerText = " ";
    setText(lowerText);
  }
  const sentanceCase =()=>{
    let stext=text.replace(/\w\S*/g)
    let sentext=stext.charAt(0).toUpperCase() + stext.substr(1).toLowerCase();
    console.log(sentext)
   }
  const copyText =()=>{
    let coptext=document.getElementById("textbox");
    coptext.select();
    navigator.clipboard.writeText(coptext.value);
}
  const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById('textbox').value], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

  // const searchtextHandler =()=>{
  //   let srchText=searchText.search(document.getElementsByName('searchText'));
  //   setSearchText(srchText)
  //   console.Console(srchText)
  // }

  const [text , setText]=useState(" ");
  // const [searchText, setSearchText] =useState();
  return (
    <>
    <div>
      <h3 className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
      {/* <input type="text" placeholder='Search Any thing' value={searchText} name="searchText" onChange={(e)=>searchText(e.target.value)}/> */}
    </div>
       <div className="form-floating container">
        <textarea className="form-control my-3" value={text} rows="8" 
        // style={}}
        onChange={(e)=>setText( e.target.value)} id="textbox" name="textbox"
         style={{backgroundColor : props.mode==='dark'?'gray':'white', 
         color : props.mode==='dark'?'white':'black'}}>
        </textarea>
     
        <button type="button" className="btn btn-primary" onClick={upperHandler}>Convert to Uppercase</button>
        <button type="button" className="btn mx-3 my-2 btn-primary" onClick={lowerHandler}>Convert to Lowercase</button>
         <button type="button" className="btn btn-primary my-2" onClick={capatalizeHandler}>Convert Capatalize</button>
        <button type="button" className="btn btn-primary mx-3" onClick={trimHandler}>Remove WhiteSpace</button>
        {/* <button type="button" className="btn btn-warning" onClick={searchtextHandler}>Search Text</button> */}
        <button type="button" class="btn btn-primary" onClick={clearText}>Clear Text</button>
        <button type="button" class="btn btn-primary mx-3" onClick={sentanceCase}>Sentence Case</button>
        <button type="button" class="btn btn-primary" onClick={copyText}>Copy Text</button>
        <button type="button" class="btn btn-primary"  onClick={downloadTxtFile}>Downlod Text</button>
       
        </div>
        <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
          <h3>Text Summary</h3>
          <p>Number of words: {text.split(" ").length} Number of length: {text.length}.</p>
          <h4>Text Preview:</h4>
          <p>{text}</p>
        </div>
    </>
  )
}

export default Home
