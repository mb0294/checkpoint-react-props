import React from 'react';
import Profile from './profile/Profile'
import './App.css';
const App = () => {
  const user = {name:"Mehdi Bouzghaya",bio:"Gafsa, Tunisia",profession:"Manager"}
  const like = x => alert(`I like you ${x}`);
  return <Profile like={like} user={user}>
    <img src='/me.jpg' alt="" style={{ width: "200px"}}/>
    </Profile>
}
export default App;
