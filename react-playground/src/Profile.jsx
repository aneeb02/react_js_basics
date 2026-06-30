import React from 'react'

const user = {
    name: "Aneeb",
    username: "aneeb02",
    age: 23
}

const Profile = () => {
  return (
    <>
        <h1>Name: {user.name}</h1>
        <h3>Username: {user.username}</h3>
        <h3>Age: {user.age}</h3>
    </>
  )
}



export default Profile