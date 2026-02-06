import Herosection from "./components/Herosection"
import Trusted from './components/Trusted'
import Service from './components/Service'
import FeatureProduct from '../src/components/FeatureProduct';
  
    

const Home=() => {

    const data = {
        name: "Patel Store"
    }
    return(
    <>
     <Herosection myData={data}/>
     < FeatureProduct />
     <Service/>
      <Trusted/>
     </>
    )
     
    
}


export default Home