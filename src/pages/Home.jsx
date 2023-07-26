import { useEffect, useState } from "react"
import { ItemListContainer } from "../components"
import { getEpps } from "../lib/epps.requests";


export const Home = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getEpps()
      .then(res=>{
        setIsLoading(false);
        setProducts(res)
      })
    
     
    }, [])
    
  return (
    <div className="container">
        <h5>{isLoading ? 'Cargando...' : 'Listo'}</h5>
        <ItemListContainer products={products}/>
    </div>
  )
}
