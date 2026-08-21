import { useState,useEffect } from "react";


function Filter({minprice,maxprice,category,setMinprice,setMaxprice,setCategory}){

    function handlemaxprice(e){
        const val=Number(e.target.value);
        setMaxprice(Math.max(val,minprice))
    };

    function handleminprice(e){
        const val=Number(e.target.value)
        setMinprice(Math.min(val,maxprice));
    };

    function handlecategory(e){
        setCategory(e.target.value)
    };

    return(
        <div className=" flex pt-34 flex-col items-end justify-center fixed ">
            <label className="pr-38 pt-34 font-bold text-xl">Filters</label>
            <div className="border border-b-gray-400 h-[400px] w-[240px] p-2 ">
            <div className="flex flex-col items-start gap-3">
                <label>Price range</label>
                <div className="flex flex-row justify-center  gap-1">
                    <label>$0</label>
                    <input onChange={handleminprice} type="range" name="minimum_price" min="0" max="900" value={minprice}/> 
                    <label>${minprice}</label>
                </div>
                <div className="flex flex-row justify-center items gap-1">
                    <label>$8</label>
                    <input onChange={handlemaxprice} type="range" name="maximum_price" min="8" max="1000" value={maxprice}/> 
                    <label>${maxprice}</label>
                </div>
                
            </div>
            <div className="flex flex-col items-start gap-3 mt-6">
                <label>Category</label>
                <div className="flex flex-row gap-2">
                    <input type="radio" name="category" value=" " onChange={handlecategory} checked={category===" "}/>
                    <label>All categories</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="radio" name="category" value="men's clothing" onChange={handlecategory} checked={category=="men's clothing"}/>
                    <label>men's clothing</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="radio" name="category" value="jewelery" onChange={handlecategory} checked={category=="jewelery"}/>
                    <label>jewelery</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="radio" name="category" value="electronics" onChange={handlecategory} checked={category=="electronics"}/>
                    <label>electronics</label>
                </div>
                <div className="flex flex-row gap-2">
                    <input type="radio" name="category" value="women's clothing" onChange={handlecategory} checked={category=="women's clothing"}/>
                    <label>women's clothing</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Filter;