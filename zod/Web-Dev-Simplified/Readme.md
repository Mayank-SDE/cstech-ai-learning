# ZOD
- To install the zod run the following command 
```bash
npm i zod
```
- Whereever you want to use zod you just need to import it.
```tsx
import {z} from 'zod';
// You are first required to create a schema using the z.object({property:value}), z.string() etc
const App = () => {
 
  const UserSchema=z.object({
    username:z.string()
  })
const user={username:"Mayank"};
const user2={username:3};

console.log(UserSchema.parse(user));
// This will throw the zod uncaught exception
// console.log(UserSchema.parse(user2));

  return (
    <div>
      App
    </div>

  )
}

export default App
```
- zod works really fine with typescript. We have no need to creat the types two times like we are doing it below.
```tsx
import {z} from 'zod';
const App = () => {
 type User={
  username:string
 }
  const UserSchema=z.object({
    username:z.string()
  })
const user:User={username:"Mayank"};
console.log(UserSchema.parse(user));
  return (
    <div>
      App
    </div>

  )
}

export default App
```
- We can directly use the z.infer<typeof UserSchema> method to create the type in TypeScript.
```tsx
import {z} from 'zod';
const App = () => {
 
  const UserSchema=z.object({
    username:z.string()
  })
  type User=z.infer<typeof UserSchema>
const user:User={username:"Mayank"};
console.log(UserSchema.parse(user));
  return (
    <div>                                       
      App
    </div>

  )
}
export default App
```
- If the validation does not match then parse method will thro error zod uncaught exception.
- if the validation does not match safeParse method will return a object containing {success:false} 
```tsx
import {z} from 'zod';
const App = () => {
 
  const UserSchema=z.object({
    username:z.string()
  })
  type User=z.infer<typeof UserSchema>
const user:User={username:"Mayank"};
console.log(UserSchema.safeParse(user));
  return (
    <div>                                       
      App
    </div>

  )
}
export default App
```
- zod is used for performing form validation.
- When using zod every single validation is required by default.
```tsx
import {z} from 'zod';
const App = () => {
  enum Hobbies{
    Programming,
    WeightLifting,
    Guitar
  }
  const UserSchema=z.object({
    // The minimum length of username defined will be 2
    username:z.string().min(2),
    // We can also pass the function to default, let say setting the random number in age
    age:z.number().gt(18).default(Math.random),
    // To make this field as optional
    // We can also have additional validations as well
    birthday:z.date().optional().nullish(),
    // We can also define the default value which allows to validate those objects which are not defining the property but still the default value is assigned to those properties and it is still validated as true
    isProgrammer:z.boolean().nullable().default(true),
    a:z.undefined(),
    b:z.null(),
    c:z.any(),
    d:z.void(),
    e:z.unknown(),
    f:z.never() // It can never have the f key at all.,
    // If we want to restrict the value of any property to some literal we can use the literal() which will validate as the value matches exactly.
    // Now, it will only validate this as true if g is evaluating as 5
    , g:z.literal(5)
    // If we want to restrict any property to some default possible values then we can use enum which takes an array of values
    // Below here you can only pass read only array which we make using the below syntax
    // const hobbies=["Mayank","Weight","Guitar"] as const;
    , h:z.enum(["a","b","c","d"]),
    // We can also create the separate enum first and then directly assign it using the nativeEnum() instead of passing the values in the form of array.
    i:z.nativeEnum(Hobbies)
  }).pick({
    username:true
  }).omit({
    username:true
  }).deepPartial().extend({
    surname:z.string()
  }).merge(z.object({height:z.number()
  })).passthrough().strict();
  // strict() method make sure to throw error if the schema and the field in the user object does not match.
  // The passthrough() method is used for adding the flexibility that if later on we are adding new field then even if it is not present in the schema still on UserSchema.parse(user) the filed will be considered and pass through.
  // The above merge method is used for merging two different schema
  // The above extend() method is used for extending the schema field.
  // deepPartial() method is used for making all the fields and children fields as well optional.
  // The above omit method is used for excluding any field from the zod validation
  // The above pick method is used for including the field in the zod validation.
  // The difference between nullish() and nullable() is that the nullish() allows you to define the value as null and undefined and nullable() only allows single value which is null.
  type User=z.infer<typeof UserSchema>
const user:User={username:"Mayank"};
console.log(UserSchema.safeParse(user));
// It tells about the shape of the schema
console.log(UserSchema.shape);
// In the zod to make every fields optional we can use the partial() method
console.log(UserSchema.partial());
  return (
    <div>                                       
      App
    </div>

  )
}

export default App
```
- **Array**
```tsx
import {z} from 'zod';
const App = () => {
    const UserSchema=z.object({
      username:z.string(),
      phones:z.array(z.string()).nonempty().min(3).max(10).length(4)
      // nonempty() method tells us that array can not be empty
    });
    
    type User=z.infer<typeof UserSchema>;
    const user:User={
      username:"Mayank",
      phones:["3214","23432","2342","5423"]
    }
  console.log(UserSchema.safeParse(user).success);
  // The below statement will return the type of the element stored inside the phones array
  console.log(UserSchema.shape.phones.element);
  return (
    <div>                                       
      App
    </div>

  )
}

export default App
```
- **Tuple**
  - Fixed length array, where each element is of specific types
```tsx
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
```