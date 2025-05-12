import React, { useContext } from 'react';
import Navbar from './Home/Shared/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import { Authconetext } from '../provider/Authprovider';

const Register = () => {

    const {createuser} = useContext((Authconetext));

    const handleregister = e =>
     {
       e.preventDefault();
       console.log(e.currentTarget);
       const form = new FormData(e.currentTarget)
       const name = form.get('name');
       const photo = form.get('photo');
       const email = form.get('email');
       const password = form.get('password');

       console.log(name,photo,email,password);

       createuser(email,password)
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
       

      // console.log(form.get('password'))
     }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {/* form div */}
                

                <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
       
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleregister} className="card-body">
        <p className="text-3xl font-bold text-center mb-4">Register  Your Account</p>

         <div className="form-control">
              
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text" name = "name" placeholder="enter your name " className="input input-bordered" required />
        </div>

        <div className="form-control">
              
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" name = "photo" placeholder="enter your password " className="input input-bordered" required />
        </div>



        <div className="form-control">
              
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name = "email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
         <p> Do you have any account?<NavLink className='text-blue-600 hover:underline' to="/login">Please Login</NavLink></p>
         
      </form>
    </div>
  </div>
</div>
             </div>
        </div>
    );
};

export default Register;