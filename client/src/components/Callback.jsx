// import { UserManager } from 'oidc-client';
import userManager from '../utils/userService';
import { Redirect, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function Callback() {
  const history = useHistory();
  useEffect(()=>{
    async function signinAsync() {
      await userManager.signinCallback();
      history.push('/');
    };
    signinAsync();
  }, [history]);
  return null;
}

export default Callback;