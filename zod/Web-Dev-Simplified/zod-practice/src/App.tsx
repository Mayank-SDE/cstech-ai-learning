import {z} from 'zod';
const App = () => {
 
      const brandEmail=z.string().email().refine(val=>{
        return val.endsWith("mayankcstech.ai")
      },{
        message:"Email must end with mayankcstech.ai"
      })
      const email="Mayank@mayankcstech.ai";
      console.log(brandEmail.parse(email));
  return (
    <div>                                       
      App
    </div>

  )
}

export default App