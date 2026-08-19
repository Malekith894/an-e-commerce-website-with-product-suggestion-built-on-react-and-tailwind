import { useEffect,useState } from "react";
import Header from "../../components/header";


function Shopping_seed(){
    const [shopp,setshopp]=useState([]);
    const [id,setid]=useState(0);
    
    useEffect(function(){
        const products = JSON.parse(localStorage.getItem("shoppingList")) || [];
        setshopp(products);
        
    },[])

    const totalprice=shopp.reduce(function(total,item){
        return total+item.price
    },0)

    function onclick(e){    
        const remaineditems=shopp.filter(function(item){
            return(
                item.id!=e.target.value
            )
        })
        localStorage.setItem("shoppingList",JSON.stringify(remaineditems));
        setshopp(remaineditems)
        
    };

    return(
        <div className="bg-white w-full h-full">
            <Header/>
            <div className="grid grid-cols-2 pt-22 mb-30 ml-8">
                <div className="border rounded-2xl bg-gray-300 w-[480px] h-[320px] font-bold flex flex-col justify-evenly">
                    <p>Details of payment</p>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <p>Sum of price:${totalprice}</p>
                        <button className="bg-red-500 w-[400px] h-[60px] text-zinc-100 rounded-2xl">Order</button>
                    </div>
                </div>
                <div className="flex flex-col gap-8 ">
                    {shopp.map(function(item){
                        return(
                            <>
                            <div className="flex flex-col items-end w-[800px] ">
                                <div className="border rounded-2xl bg-gray-300 p-4 w-full">
                                    <div className="flex flex-row gap-2.5 justify-between">    
                                        <img className="h-[240px] w-[200px]" src={item.image}/>
                                        <p className="">{item.title}</p>
                                        <div className="flex flex-col justify-between">
                                            <p className="text-xl font-black">${item.price}</p>
                                            <button onClick={onclick} value={item.id} className="rounded-xl bg-red-500 w-[100px] h-[60px] text-shadow-cyan-100">Remove from seed</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
            </div>
        
    );
};


export default Shopping_seed;