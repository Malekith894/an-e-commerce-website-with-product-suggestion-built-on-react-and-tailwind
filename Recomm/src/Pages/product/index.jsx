import { useEffect, useState } from "react";
import { useParams,Link,useNavigate, json } from "react-router-dom";
import Header from "../../components/header";

function Details(){
    const {id}=useParams()
    const [product,setproduct]=useState({
        rating:{
            rate:2,
            count:12
        }
    })
    const [similarproduct,setsimilarproduct]=useState([]);
    const [buy,setbuy]=useState({});
    const [count,setcount]=useState(0);

    useEffect(function(){
        const products = JSON.parse(localStorage.getItem("products"));
        setsimilarproduct(products);
        const prd=products.find(function(item){
            return item.id==id;
        })
        setproduct(prd)
    },[id])

    const result=similarproduct.filter(function(item){
        const result=product.category==item.category && item.id!=product.id;

        return result
    })

    function onclick(){
        const shopping=JSON.parse(localStorage.getItem("shoppingList")) || [];
        
        const already=shopping.some(function(item){
            return item.id==product.id
        })
        
        if(!already){
            shopping.push(product)
            localStorage.setItem("shoppingList",JSON.stringify(shopping));
            const newcount=count+1
            setcount(newcount)
            
            
        }
        
    }


    return(
        <div className="bg-white w-full h-full">
            <Header/>
            <div className="pt-20 flex flex-col items-center justify-center ml-6 gap-4">
                <p className="text-2xl font-bold m-2">{product.title}</p>
                <img src={product.image} className="m-2"/>
                    <div className="bg-gray-300 w-[250px] h-[220px] rounded-2xl flex flex-col items-center justify-between p-2 pb-8">
                        <p className="font-bold text-2xl">Price:${product.price}</p>
                        <div>
                            <p className="m-2">Rating:⭐{product.rating.rate}</p>
                            <p>Number of people voted:{product.rating.count}</p>
                            <button onClick={onclick} className="h-[50px] w-[190px] text-zinc-100 bg-red-500 rounded-2xl mt-3">Add to shop </button>
                        </div>
                    </div>
                    <div className="bg-gray-300 w-[900px] min-h-[230px] p-4 rounded-xl mb-10">
                        <div className="flex items-start">
                            <p className="font-bold mb-2">Description:</p>
                        </div>
                        <p className="text-justify leading-relaxed ">
                            {product.description}
                        </p>
                    </div>
                    <div className="border rounded-xl h-[340px] w-[940px] flex-wrap mb-12 p-4 overflow-x-auto overflow-y-hidden">
                        <div className=" text-xl flex items-start mb-4">
                            <p > Similar products</p>
                        </div>
                        <div className="flex flex-row gap-4">
                        {result.map(function(item){
                            return(
                                <Link key={item.id} to={`/product/${item.id}`}>
                                <div className=" flex flex-col justify-center items-center shrink-0">
                                    <img src={item.image} className="h-[160px] w-[120px] "/>
                                    <p className="line-clamp-2 w-[160px]">{item.title}</p>
                                    <p className="font-bold">${item.price}</p>
                                    
                                </div>
                                </Link>
                            )
                        })}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Details;