import userManager from './utils/userService';

function App() {
  userManager.getUser().then((user) => {
    if (user) {
      console.log("user logged in", user.profile);
    } else {
      console.log("user not logged in");
    }
  })
  return (
    <div className="App">
      <button onClick={()=>userManager.signinRedirect()}>Login</button>
      <button>Call API</button>
      <button onClick={()=>userManager.signoutRedirect()}>Logout</button>
    </div>
  );
}

export default App;
