import { useState } from "react";


function Filter(){

    const [minprice,setminprice]=useState(0)
    const [maxprice,setmaxprice]=useState(1000)
    const [category,setcategory]=useState(" ")

    function handlemaxprice(e){
        setmaxprice(e.target.value)
    };

    function handleminprice(e){
        setminprice(e.target.value);
    };

    function handlecategory(e){
        setcategory(e.target.value)
    };

    function product_filtered(){
        const products = JSON.parse(localStorage.getItem("products"));
        const filtered_products=products.filter(function(item){
            return (item.price<maxprice && item.price>maxprice)
        })
        return filtered_products;
    };

    function product_categorical(){
        products=product_filtered();
        if(category===" "){
            return products
        }else{
            return (products.filter(function(item){
                return item.category== category;
            }))
        }
    };

    return(
        <div className=" flex pt-34 flex-col items-end justify-center fixed ">
            <label className="pr-34 pt-34 font-bold text-xl">Filters</label>
            <div className="border border-b-gray-400 h-[400px] w-[220px] p-2 ">
            <div className="flex flex-col items-center gap-3">
                <label>Price range</label>
                <div className="flex flex-row justify-center items gap-1">
                    <label>$0</label>
                    <input onChange={handleminprice} type="range" name="minimum_price" min="0" max="900" value={0}/> 
                    <label>$900</label>
                </div>
                <div className="flex flex-row justify-center items gap-1">
                    <label>$8</label>
                    <input onChange={handlemaxprice} type="range" name="maximum_price" min="8" max="1000" value={1000}/> 
                    <label>$1000</label>
                </div>
                
            </div>
            <div className="flex flex-col items-center gap-3 mt-6">
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