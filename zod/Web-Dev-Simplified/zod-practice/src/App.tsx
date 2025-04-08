import {z} from 'zod';
const App = () => {
    const UserSchema=z.object({
      address:z.tuple([z.string(),z.number().gt(4).int()]).rest(z.number()),
      id:z.union([z.string(),z.number()])
      // Now id can be string as well as number 
      
    });
    // rest() make sure that the rest elements can be as many you want but it must make sure that it is of type number
    // int() make sure that it does not the decimal in this.
    // gt() means greater than
    
    type User=z.infer<typeof UserSchema>;
    const user:User={
      address:["Mayank",9993355567],
      id:"sdfs"
    }
  console.log(UserSchema.safeParse(user).success);
  return (
    <div>                                       
      App
    </div>

  )
}

export default App