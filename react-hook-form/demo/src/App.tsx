import {useForm,SubmitHandler} from 'react-hook-form';
type FormFields={
  email:string;
  password:string;
}
const App = () => {
  const {register,handleSubmit,setError, formState:{errors,isSubmitting}}=useForm<FormFields>();
  // Now, whenever we are changing values in the react-hook-form it is going to send the values to react hook form
  const onSubmit:SubmitHandler<FormFields>=async (data)=>{
    try {
      await new Promise((resolve)=>setTimeout(resolve,1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("email",{
        message:"The email is already taken."
      })
      console.log(error)
    }
  }
  return (
    <form className="tutorial gap-2 " onSubmit={handleSubmit(onSubmit)}>
      {/* The register function can have two parameters or arguments where the first field name is the name of the field you are linking the html element with and the second parameter is the js object where you can define the validation required for particular field */}
      {/* We can also provide the regex pattern for the validation */}
      {/* We can also have the validate function where we can define our own custom validation */}
      {/* Now what to do is we are going to create a form with two fields email and password and we are going to validate the email field with the regex pattern and also we are going to validate the password field with the required validation */}
      {/* But in case any of the field is not getting validated then we can show the error message below the field using the error object */}
      {/* We also get the formState object which contains the errors object which contains the error message for each field. */}
      <input {...register("email",{
        required:true,
        pattern:{
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message:"Invalid email address"
        },
        validate:(value)=>{
          if(!value.includes("@")){
            return "Email must contain @ symbol";
          }
          return true;
        }
      })} type="text" placeholder="Email" />
      {errors.email && errors.email.type==="required" && <span className="text-red-500">Email is required</span>}
      {errors.email && errors.email.type==="pattern" && <span className="text-red-500">{errors.email.message}</span>}
      {errors.email && errors.email.type==="validate" && <span className="text-red-500">{errors.email.message}</span>}
      {/* The errors object contains the error message for each field */}
      <input {...register("password",{
        required:true,
        minLength:{
          value:8,
          message:"Password must have atleast 8 characters"
        }
      })}  type="password" placeholder="Password"/>
      {errors.password && errors.password.type==="required" && <span className='text-red-500'>Password is required</span>}
      {errors.password && errors.password.type==="minLength" && <span className='text-red-500'>Min length required is 8</span>}
      <button disabled={isSubmitting} type="submit">{isSubmitting?"Loading":"Submit"}</button>
      
    </form>
  )
}

export default App