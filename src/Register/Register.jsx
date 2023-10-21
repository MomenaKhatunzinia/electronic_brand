import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";




const Register = () => {
const {user, createUser} = useContext(AuthContext)
const [success, setSuccess] = useState('');
const [error, setError] = useState('')

  const handelSignUp = event =>
  {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password,name)
    setSuccess('')
        
    setError('')
  const capitalLetter = /[A-Z]/.test(password);
  
   const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
   if(!capitalLetter)
   {
 
    setError("No capital Letter");
    return
   }    
   else if(!specialChar)
   {
 
    setError("Special Char not found");
    return
   }  
   else if(!password.length >= 6)
   {
 
    setError("Length less then 6");
    return
   } 
   createUser(email,password)
   .then(result =>
    {
      console.log(result.user)
      setSuccess('Sucessfull')
      swal("SuccessFull")
      updateProfile(result.user,{
        displayName:name
      }).then(()=>
      {
        console.log("prf update")
      })
      .catch(error =>
        {
          console.log(error)
        })
    }
   )
   .catch(error =>
    {  console.log(error)
    setError(error.message)})
form.reset();
        
  }
    return (
     
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handelSignUp}
      className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Name" 
          name="name"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <h1>{error}</h1>
      </form>
    
    </div>
   
  </div>
</div> 
        </div>
    );
};

export default Register;