import { useEffect,useState } from "react";
import axios from "axios";



function Fetching(){

    const [state,setstate]=useState([]);

    async function getdata(){
        try{
            const reponse= await axios.get("https://fakestoreapi.com/products");
            const data= await reponse.data;
            setstate(data)
        } catch(error){
        console.log("error geting questions",error)
        }
        };

    useEffect(function(){
      getdata()
    },[])
    

    return(
        <>
            {state.map(function(item){
                return (
                    <p key={item.id}>{item.category}</p>
                )
            })}
        
        </>
    );
};


export default Fetching;