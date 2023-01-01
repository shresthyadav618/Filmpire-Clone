import React,{useState,useEffect} from "react"
import "./index.css"
import GrandChild from "./GrandChild"

export default function useFetchh(props) {
    console.log(props)
    const [arr, change] = React.useState([]);
//   const MessageContext=createContext();
    const [cpn, changecpn] = useState(1);
    
    console.log(cpn);
    console.log(props.GetUrl+((props.Check==true)?`-US&page=${cpn}`:``));
    useEffect(() => {
      console.log("enter");
      // 6973771bf60a7b1add0cc2ef3779046c
      fetch(props.GetUrl+((props.Check==true)?`-US&page=${cpn}`:``))
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          change(data.results);
        });
    }, [props.GetUrl,cpn]);
  
    console.log(arr);
  
    let xx = arr.map((elm, idx) => {
      return (
        // <Link to={'/show/'+cpn+`/`+idx} className='w-fit'>
        <div>
          
       <GrandChild imgUrl={elm.poster_path} MovieTitle={elm.original_title} MovieRating={elm.vote_average/2} MovieId={elm.id} MovieDate={elm.release_date} MovieDesc={elm.overview} Adult={elm.adult} Lang={elm.original_language} />
        </div> 
      );
    });
  
    return (
      <div className="container">
      
        <div className="flex flex-wrap">{xx}</div>
  
        <div className="m-auto">
          <button
            onClick={() => {
              changecpn((prev) => prev - 1);
            }}
            className="btn"
          >
            Prev
          </button>
          <button
            onClick={() => {
              changecpn((prev) => prev + 1);
            }}
            className="btn"
          >
            Next
          </button>
        </div>

       
      </div>
    );
  }
  



