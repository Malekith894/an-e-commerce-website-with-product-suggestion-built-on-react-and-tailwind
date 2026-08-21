import { Link } from "react-router-dom";


function Menu({list}){

    const products = JSON.parse(localStorage.getItem("products"));

    return(
        <div className="bg-white w-full  min-h-screen font-medium ">
            <div className="pt-30 flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
                {list.map(function(item){
                    return(
                        <div key={item.id} className="bg-white
                                                        border border-gray-200
                                                        flex flex-col pt-4
                                                        w-[260px] h-[400px]

                                                        transition-all
                                                        duration-300
                                                        ease-out

                                                        hover:-translate-y-2
                                                        hover:scale-[1.02]
                                                        hover:border-blue-300
                                                        hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)]">
                            <Link to={`/product/${item.id}`}>
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-[240px] w-[180px] bject-contain transition-transform duration-300 hover:scale-105" src={item.image}/>
                            </div>
                            <div className="flex flex-col h-[130px] justify-end items-start p-2">
                                <p className="line-clamp-2 text-sm sm:text-base leading-5">{item.title}</p>
                                <p className="font-bold text-xl sm:text-xl">${item.price}</p>
                                <p className="text-sm">⭐{item.rating.rate}</p>
                                
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