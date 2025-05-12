import { NavLink } from "react-router-dom";
import Navbar from "./Home/Shared/navbar/Navbar";
import { useContext } from "react";
import { Authconetext } from "../provider/Authprovider";

 

const Login = () => {
    const {signin} = useContext(Authconetext)

     const handlelogin = e =>
     {
       e.preventDefault();
       console.log(e.currentTarget);
       const form = new FormData(e.currentTarget)
       const email = form.get('email');
       const password = form.get('password'); 
       console.log(email,password);

       signin(email,password)
       .then(result =>
       {
        console.log(result.user)
       }
       )
       .catch(error =>
       {
        console.error(error)
       }
       )
     }
    return (
        <div>
            <h1> </h1>
             <Navbar></Navbar>

             <h1></h1>

             <div>
                {/* form div */}
                

                <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
       
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
              <p className="text-3xl font-bold text-center mb-4">Login Your Account</p>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name = "email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name = "password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p> Do you have any account?<NavLink className='text-blue-600 hover:underline' to="/register">Please Register</NavLink></p>
         
      </form>
    </div>
  </div>
</div>
             </div>
        </div>
    );
};

export default Login;