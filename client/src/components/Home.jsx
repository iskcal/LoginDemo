import userManager from '../utils/userService';

function Home() {
  userManager.getUser().then((user) => {
    if (user) {
      console.log("user logged in", user.profile);
    } else {
      console.log("user not logged in");
    }
  })
  return (
    <>
      <div>
        <button onClick={()=>userManager.signinRedirect()}>Login</button>
        <button>Call API</button>
        <button onClick={()=>userManager.signoutRedirect()}>Logout</button>
      </div>
      <p>Hello world</p>
    </>
  );
}

export default Home;