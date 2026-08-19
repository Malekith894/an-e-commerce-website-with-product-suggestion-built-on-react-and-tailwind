import { Link,useSearchParams,useLocation } from "react-router-dom";
import { useEffect,useState } from "react";

function Header(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");
    const location=useLocation()
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchParams(search ? {search} :{});
        }, 500);

        return () => clearTimeout(timer);
    }, [search, setSearchParams]);

    function handlesearch(e){
        setSearch(e.target.value)
    };
    function displayinput(){
        if(location.pathname=='/'){
            return <input value={search} onChange={handlesearch} placeholder="🔎Search" className="border-2 w-94 rounded-xl p-1.5 bg-gray-100"></input>
        } else{
            return null
        }
    };

    function numberofbuys(){
        let shopping=JSON.parse(localStorage.getItem("shoppingList")) || [];
        return shopping.length
    };

    return(
        <div className="bg-white flex flex-row justify-between items-center pl-34 pr-34 fixed font-black font-bold border-b-gray-300 border-solid border-b-2 h-[80px] w-full">
            <div className="flex flex-row justify-center items-center gap-8">
                <Link to="/">
                <button className="scale-150 ">🏡</button>
                </Link>
                <div className="caret-mauve-400">|</div>
                <Link to='/shop'>
                <button className="scale-150">🎁</button>
                <label> ({numberofbuys()})</label>
                </Link>
                
            </div>
                {displayinput()}
        </div>
    );

};


export default Header;