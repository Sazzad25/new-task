import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const GoogleLogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success(' Success!');
            navigate(from, { replace: true });
            // navigate('/login');
        })
        .catch(error => alert.error(error.message))
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default GoogleLogin;