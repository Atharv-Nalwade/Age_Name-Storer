import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // const [enteredUserName, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState();
  const [error, setError] = useState();


  const nameInputRef=useRef();
  const ageInputRef=useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
     const enteredName=nameInputRef.current.value;
     const enteredUserAge=ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Please enter a valid age (>0).",
          });
        return;
    }

    // console.log(enteredName, enteredUserAge);
    props.onAddUser({
      name: enteredName,
      age: enteredUserAge,
      id: Math.random().toString(),
    }); //
    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUserName}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
