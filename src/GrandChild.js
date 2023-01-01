
import React,{useState}from "react"
import Star from "./Star"
import ParPota from "./ParPota"
import "./index.css"
export default function useGranchild(props){

    const [open,changeopen]=useState(false);
    console.log(open)
// function handleChange(){
//     changeopen((prev)=>!prev)
// }
const handleChange=()=>{
    changeopen(!open)
}

 return (<>
 <div onClick={handleChange}>
    <div className="con flex flex-col " >
            <img
              src={
                `https://www.themoviedb.org/t/p/w440_and_h660_face` +
                props.imgUrl
              }
            ></img>
           
          </div>
          <div className="block m-auto w-56">
            <h1 className="block m-auto w-fit text-center">{props.MovieTitle}</h1>
              
            </div>
  
            <Star rating={ props.MovieRating} rank={props.MovieId} />
    
        
        {/* </div> */}
        </div>
        {/* <div className="parpota"> */}
        {open && <ParPota ImgUrl={props.imgUrl} MovieDate={props.MovieDate} MovieDesc={props.MovieDesc} MovieTitle={props.MovieTitle} MovieRating={props.MovieRating} doChange={handleChange} Adult={props.Adult} Lang={props.Lang} MovieId={props.MovieId}/>}
        {/* </div> */}
        </>
 )
}

