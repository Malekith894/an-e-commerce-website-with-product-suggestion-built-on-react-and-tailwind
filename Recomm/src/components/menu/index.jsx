import { Link } from "react-router-dom";


function Menu({list}){

    const products = JSON.parse(localStorage.getItem("products"));

    return(
        <div className="bg-white w-[1600px] h-full flex-1 font-medium ">
            <div className="pt-30 flex flex-wrap justify-center">
                {list.map(function(item){
                    return(
                        <div key={item.id} className="bg-white border-b-gray-100 border  justify-end hover:border-4 flex flex-col pt-4 border-b-gray-300 flex-wrap w-[260px] h-[400px]">
                            <Link to={`/product/${item.id}`}>
                            <div className="flex flex-col  items-center">
                                <img className="h-[240px] w-[200px]" src={item.image}/>
                            </div>
                            <div className="flex flex-col h-[130px] justify-end items-start p-2">
                                <p className="line-clamp-2">{item.title}</p>
                                <p className="font-bold text-xl">${item.price}</p>
                                <p>⭐{item.rating.rate}</p>
                            </div>
                            </Link>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Menu;