import userManager from '../utils/userService';
import { useState } from 'react';

const no_user = "No user data";

function Home() {
  const [text, setText] = useState(no_user);
  userManager.getUser().then((user) => {
    if (user) {
      setText(JSON.stringify(user.profile));
    } else {
      setText(no_user);
    }
  })
  return (
    <>
      <div>
        <button onClick={()=>userManager.signinRedirect()}>Login</button>
        <button>Call API</button>
        <button onClick={()=>userManager.signoutRedirect()}>Logout</button>
      </div>
      <p>{text}</p>
    </>
  );
}

export default Home;