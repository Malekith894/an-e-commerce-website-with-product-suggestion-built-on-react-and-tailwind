import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Fetching from './components/data'
import Header from './components/header'
import Menu from './components/menu/index.jsx'
import Filter from './components/filter/index.jsx'
import Details from './components/product_details/index.jsx'

function App() {
  const [prd, setprd] = useState([])
  const [minprice,setMinprice]=useState(0)
  const [maxprice,setMaxprice]=useState(1000)
  const [category,setCategory]=useState(" ")

  useEffect(function(){
    const products = JSON.parse(localStorage.getItem("products"));
    setprd(products);
  },[])
  
  const filtered_products=prd.filter(function(item){
          const pricematch= item.price<maxprice && item.price>minprice
          const categorycheck= category ===" " || item.category=== category; 
          
          return pricematch && categorycheck;
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

export default App;