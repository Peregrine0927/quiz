import * as React from "react";
import Illsutrator from "../assests/images/signup.svg";
import classes from "../styles/Illustration.module.css";
export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={Illsutrator} alt="Signup" />
    </div>
  );
}
