import {useForm,SubmitHandler} from 'react-hook-form';
type FormFields={
  email:string;
  password:string;
}
const App = () => {
  const {register,handleSubmit, formState:{errors}}=useForm<FormFields>();
  // Now, whenever we are changing values in the react-hook-form it is going to send the values to react hook form
  const onSubmit:SubmitHandler<FormFields>=(data)=>{
    console.log(data);
  }
  return (
    <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
      {/* The register function can have two parameters or arguments where the first field name is the name of the field you are linking the html element with and the second parameter is the js object where you can define the validation required for particular field */}
      {/* We can also provide the regex pattern for the validation */}
      {/* We can also have the validate function where we can define our own custom validation */}
      <input {...register("email",{
        required:true,
        pattern:{
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message:"Invalid email address"
        },
        validate:(value)=>{
          if(value.includes("@")){
            return "Email cannot contain @ symbol";
          }
        }
      })} type="text" placeholder="Email" />
      <input {...register("password",{
        required:true
      })}  type="password" placeholder="Password"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App