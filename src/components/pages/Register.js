import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import GoogleLogin from './GoogleLogin';


const Register = () => {
    const {createUser, loading, setLoading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
   

    createUser(email, password)
    .then(result => {
      const user = result.user;
      form.reset();
      toast.success('Register Success!');
      navigate(from, { replace: true });
      // navigate('/login');
      
    })
    .catch(error => toast.error(error.message))
  }

    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl text-center font-bold">Register</h1>
      <form onSubmit={handleSignUp} className="card-body">  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          
        </div>
        <div className="form-control mt-6">
            <input className='btn btn-primary' type="submit" value="Register" />
        </div>
      </form>
      <p className='text-center'>All ready have an account <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
      <GoogleLogin></GoogleLogin>
    </div>
  </div>
        </div>
    );
};

export default Register;