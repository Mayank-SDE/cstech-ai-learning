# React Hook Form
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

