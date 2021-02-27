import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();

    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const stylesClasses = [];

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    stylesClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    stylesClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title} </h1>
      <p className={stylesClasses.join(" ")}> This is really works! </p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
