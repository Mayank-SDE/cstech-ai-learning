# React Hook Form (RHF)
## Cosden Solutions
- library name is react-hook-form, why you need it ?
- You have to create the useState variables and then assign it to the input elements and then you also have to use the onChange function where you are going to assign the handler funciton which will keep on updating the useState variables and then when submitting the form use will be using the onSubmit attribute and submitHandler function inside which first of all you are going to preventDefault() so that it does not refresh itself and then you are going to call a post api which will be sending the user input to the server. Now if in case any error occurs it may happen that you are using the useState for setting the error as well and thus just to handle the form values you are doing alot of work and to avoid this we can use the third party library react-hook-form.
- react-hook-form allows you to do all of this with much lesser code and better form handling.
### react-hook-form
#### useForm() hook
- We can import it from 'react-hook-form'
- We must always define the types of our form fields.
- You do not have to define your loading state , error state or anything else.
- Everything will be taken care by the react-hook-form.
- The useForm() hook also return the setError() method which we can use to set the error programmatically.
- We still use the zod schema validation over the RHF because ZOD provides centralized global schema validation which can be used multiple times anywhere client or server and additionally it also have typescript support as well and it also have better error handling.
### Recommended way of using react-hook-form
- There is actually a better way of handling the validation with a lot of less code.
- And that is going to use a zod third party library for validation.
- For this you are oging to install two more packages beside the RHF i.e. react-hook-form and those are 
    1. npm i @hookform/resolvers
        - Which will give you some access to resolvers and that you can plugin in to your form.
    2. npm i zod
        - More than just validations.