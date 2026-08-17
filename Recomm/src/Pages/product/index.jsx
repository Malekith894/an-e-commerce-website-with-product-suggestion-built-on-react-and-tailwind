import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details(){
    const {id}=useParams()
    const [product,setproduct]=useState(null)

    useEffect(function(){
        const products = JSON.parse(localStorage.getItem("products"));
        const prd=products.find(function(item){
            return item.id===Number(id);
        })
        setproduct(prd)
    },[id])

    return(
        <div className="bg-white w-full h-full">
            <div className="pt-20 flex flex-col items-start">
                <p>{product.title}</p>
                <img src={product.image}/>
                    <div className="bg-gray-300 w-[250px] h-[200px] rounded-2xl flex flex-col items-start justify-center">
                        <p className="font-bold text-2xl">{product.price}</p>
                        <p>⭐{product.rating.rate}</p>
                        <p>Number of votes:{product.rating.count}</p>
                    </div>
                    
            </div>
        </div>

    );
};

export default Details;