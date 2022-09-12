import React from 'react'

const Profile = ({user,children,like}) => {
  return (
    <div className="container mt-5" >
    <div className="card" style={{ width: '70%', height: '30%',margin : "0 auto" }}>
    <h2> <span>Hello My Name Is {user.name}</span></h2><hr />
    {children}
    <p>{user.bio}</p>
    <ul>
        <li>{user.profession}</li>
    </ul>
    <button className="btn btn-primary" onClick={()=> like(user.name)}>like</button></div></div>  
  )}
  
Profile.defaultProps = {
    name: "Stranger",
    children: "/unk.jpg",
    profession:"Unemployed",
    bio:"Earth",
};

export default Profile