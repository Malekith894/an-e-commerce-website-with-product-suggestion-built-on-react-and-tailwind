import { useState } from "react";


function Filter(){
    const [minprice,setminprice]=useState(0)
    const [maxprice,setmaxprice]=useState(1000)
    function handlemaxprice(e){
        setmaxprice(e.target.value)
    };

    function handleminprice(e){
        setminprice(e.target.value);
    };
    
    return(
        <div className=" flex pt-34 flex-col items-end justify-center fixed ">
            <label className="pr-34 pt-34 font-bold text-xl">Filters</label>
            <div className="border border-b-gray-400 h-[400px] w-[220px] p-2">
            <div className="flex flex-col items-center gap-3">
                <label>Price range</label>
                <div className="flex flex-row justify-center items gap-1">
                    <label>Min</label>
                    <input onChange={handleminprice} type="range" name="minimum_price" min="0" max="900"/> 
                </div>
                <div className="flex flex-row justify-center items gap-1">
                    <label>Max</label>
                    <input onChange={handlemaxprice} type="range" name="maximum_price" min="8" max="1000"/> 
                </div>
                
            </div>
            <div className="flex flex-col items-center gap-3 mt-6">
                <label>Category</label>
                <div className="flex flex-row gap-2">
                    <input type="radio" />
                    <label>men's clothing</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="radio" />
                    <label>jewelery</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="radio" />
                    <label>electronics</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="radio" />
                    <label>women's clothing</label>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Filter;