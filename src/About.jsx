import Herosection from './components/Herosection'
import { data } from 'react-router-dom'
import { useProductContext } from './Context/ProductContacts'

function About() {

  const {myName} =  useProductContext()
    const data = {
        name: "Patel Ecommerce",
    }
  return (
    <>
  {myName}
<Herosection myData={data}/>
</>
  )
}

export default About