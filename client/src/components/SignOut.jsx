// import { UserManager } from 'oidc-client';
import userManager from '../utils/userService';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function SignOut() {
  const history = useHistory();
  useEffect(()=>{
    async function signinAsync() {
      await userManager.signoutCallback();
      history.push('/');
    };
    signinAsync();
  }, [history]);
  return null;
}

export default SignOut;