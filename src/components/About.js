// use rfc to import react function based component
import React,{useState} from 'react'

export default function About() {

     const [btntext, setbtntext] = useState("Enable Dark Mode")

     const [mystyle, setMystyle] = useState( {
        color:"black",
        backgroundColor:"white"
    })

    const togglestyle=()=>{
        if(mystyle.color ==='white'){
            setMystyle({
                color:"black",
        backgroundColor:"white",
        border: "1px solid white"

            })
            setbtntext("Enable Dark Mode");
        }
        else{
            setMystyle({
                color:"white",
        backgroundColor:"black"

            })
            setbtntext("Enable White Mode")

        }
    }


   
  return (
        <div className='container my-3' style={mystyle}>
            <h2>About Us</h2>
            <div id="accordion">
    <div className="card" >
        <div className="card-header" id="headingOne" style={mystyle}>
        <h5 className="mb-0" >
            <button className="btn btn-link" data-toggle="collapse"  style={mystyle}  data-target="#collapseOne"   aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
            </button>
        </h5>
        </div>

        <div id="collapseOne" className="collapse show"   aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body" style={mystyle}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header" id="headingTwo" style={mystyle}>
        <h5 className="mb-0" >
            <button className="btn btn-link collapsed"  style={mystyle}  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Collapsible Group Item #2
            </button>
        </h5>
        </div>
        <div id="collapseTwo" className="collapse"   aria-labelledby="headingTwo" data-parent="#accordion">
        <div className="card-body" style={mystyle}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header" id="headingThree" style={mystyle}>
        <h5 className="mb-0">
            <button className="btn btn-link collapsed"   style={mystyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Collapsible Group Item #3
            </button>
        </h5>
        </div>
        <div id="collapseThree" className="collapse"   aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
        </div>
    </div>
    </div>
    <div className="container my-3">

    <button type="button"  onClick={togglestyle} className="btn btn-primary">{btntext}</button>
    </div>
    </div>
  )
}
