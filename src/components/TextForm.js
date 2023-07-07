import React,{useState} from 'react'


export default function TextForm(props) {
    const toupper=()=>{
        //console.log("uppercase was clicked"+text)
        let new_text=text.toUpperCase();
        setText(new_text);
    }
    const tolower=()=>{
        //console.log("uppercase was clicked"+text)
        let new_text=text.toLowerCase();
        setText(new_text);
    }
    const toclear=()=>{
        //console.log("uppercase was clicked"+text)
        let new_text="";
        setText(new_text);
    }
    const copy=()=>{
        console.log("copied")
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleonchange=(event)=>{
        //console.log("handle on change")
        setText(event.target.value)
    }
    const [text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.headding}</h1>
    <div className="mb-3 my-3">
        <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode==='dark'?'#565656':'white',color:props.mode==='dark'?'#FEFEFE':'black'}} onChange={handleonchange} value={text} rows="8"></textarea>
    </div>
    <button className={`btn btn-${props.mode1}`} onClick={toupper}>To Upper Case</button>
    <button className={`btn btn-${props.mode1} mx-2`} onClick={tolower}>To Lower Case</button>
    <button className={`btn btn-${props.mode1} mx-2`} onClick={toclear}>Clear</button>
    <button className={`btn btn-${props.mode1} mx-2`} onClick={copy}>Copy</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} Words  and {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
