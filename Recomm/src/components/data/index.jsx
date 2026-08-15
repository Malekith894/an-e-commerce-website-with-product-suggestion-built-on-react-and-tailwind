import { useEffect,useState } from "react";
import axios from "axios";

async function getdata(){
    try{
        const reponse= await axios.get("https://fakestoreapi.com/products");
        const data= await reponse.data;
        
    } catch(error){
        console.log("error geting questions",error)
    }
};

function Fetching(){

    const [state,setstate]=useState([]);

    useEffect(function(){
      getdata()
    },[])
    

    return(
        <>
            {state.map(function(item){
                return (
                    <>
                    {console.log(item[1])}
                    <p key={item.id}>{item.price}</p>
                    </>
                )
            })}
        
        </>
    );
};


export default Fetching;