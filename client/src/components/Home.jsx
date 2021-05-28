import userManager from '../utils/userService';
import { useState } from 'react';

const no_user = "No user data";
const no_data = "No data";

function Home() {
  const [text, setText] = useState(no_user);
  const [data, setData] = useState(no_data);
  userManager.getUser().then((user) => {
    if (user) {
      setText(JSON.stringify(user.profile));
    } else {
      setText(no_user);
    }
  })

  const fetchApi = async () => {
    const user = await userManager.getUser();
    const data = await fetch("https://localhost:5002/WeatherForecast", {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': "Bearer " + user.access_token
      }
    });
    const result = await data.json();
    console.log(result);
    setData(JSON.stringify(result));
  }

  return (
    <>
      <div>
        <button onClick={()=>userManager.signinRedirect()}>Login</button>
        <button onClick={()=>fetchApi()}>Call API</button>
        <button onClick={()=>userManager.signoutRedirect()}>Logout</button>
      </div>
      <p>{text}</p>
      <p>{data}</p>
    </>
  );
}

export default Home;