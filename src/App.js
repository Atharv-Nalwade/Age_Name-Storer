import React,{ useState } from "react";

import AddUser from "./components/Users/AddUser";

import UsersList from "./components/Users/UsersList";

function App() {

const[usersList,setUsersList]=useState([]);

function addUserListHandler(user){
  setUsersList(
    (userData) => {return [...userData,user]}
  )
}

console.log(usersList);
  return (
    <div>
      <AddUser  onAddUser={addUserListHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
