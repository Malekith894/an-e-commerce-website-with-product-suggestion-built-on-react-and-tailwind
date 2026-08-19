import { useEffect, useState } from 'react'
import Fetching from '../../components/data/index.jsx'
import Menu from '../../components/menu/index.jsx'
import Filter from '../../components/filter/index.jsx'
import { useSearchParams } from "react-router-dom";
import Header from '../../components/header/index.jsx';

function Home() {
  const [prd, setprd] = useState([])
  const [minprice,setMinprice]=useState(0)
  const [maxprice,setMaxprice]=useState(1000)
  const [category,setCategory]=useState(" ")
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(function(){
    const products = JSON.parse(localStorage.getItem("products"));
    setprd(products);
  },[])
  
  const filtered_products=prd.filter(function(item){
          const pricematch= item.price<maxprice && item.price>minprice;
          const categorycheck= category ===" " || item.category=== category;
          const seachcheck=item.title.toLowerCase().includes(search.toLowerCase())
          return pricematch && categorycheck && seachcheck;
        })

  return (
    <div className='min-h-screen'>
      <Fetching/>
      <div>
        <Header/>
      </div>
      <div className='grid grid-cols-[4fr_250px] p-6'>
        <div>
          <Menu list={filtered_products}/>
        </div>
        <div>
          <Filter 
            minprice={minprice}
            maxprice={maxprice}
            category={category}
            setMinprice={setMinprice}
            setMaxprice={setMaxprice}
            setCategory={setCategory}
          />
        </div>
      
      </div>
    </div>
  )
}

export default Home;