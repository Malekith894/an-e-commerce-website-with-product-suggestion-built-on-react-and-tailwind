

function Details({item}){
    return(
        <div className="bg-white w-full h-full">
            <div className="pt-20 flex flex-col items-start">
                <p>{item.title}</p>
                <img src={item.image}/>
                    <div className="bg-gray-300 w-[250px] h-[200px] rounded-2xl flex flex-col items-start justify-center">
                        <p className="font-bold text-2xl">{item.price}</p>
                        <p>⭐{item.rating.rate}</p>
                        <p>Number of votes:{item.rating.count}</p>
                    </div>
                    
            </div>
        </div>

    );
};

export default Details;