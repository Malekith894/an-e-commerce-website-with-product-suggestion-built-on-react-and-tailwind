import { useEffect,useState } from "react";
import axios from "axios";



function Fetching(){
    // we get data and store them in local storage in this component
    const [state,setstate]=useState([]);

    async function getdata(){
        //data is stored in localstorage to reduce render time
        try{
            const reponse= await axios.get("https://fakestoreapi.com/products");
            const data= await reponse.data;
            setstate(data)
            localStorage.setItem("products",JSON.stringify(data))
            //const products = JSON.parse(localStorage.getItem("products"));
        } catch(error){
        console.log("error geting questions",error)
        }
        };

    useEffect(function(){
        //useEffect is used to fetch data
      getdata()
    },[])
    

    return(
        <>
        
        </>
    );
};


export default Fetching;