"use client";

import type { FC } from "react";
import { useState } from "react";
import styles from "../styles/loginForm.module.css";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const [formType, setFormType] = useState<"login" | "register">("login");

  return (
    <>
      <div className={styles.formContainer}>
        {formType === "login" ? (
          <>
            <h1>Login</h1>
            <form className={styles.form}>
              <label htmlFor="username">Username</label>
              <input type="text" id="loginUsername" name="username" />
              <label htmlFor="password">Password</label>
              <input type="password" id="loginPassword" name="password" />
              <button type="submit" value="Login">
                Login
              </button>
            </form>
            <p>
              New Here?
              <button onClick={() => setFormType("register")}>Register</button>
            </p>
          </>
        ) : (
          <>
            <h1>Register</h1>
            <form className={styles.form}>
              <label htmlFor="username">Username</label>
              <input type="text" id="regUsername" name="username" />
              <label htmlFor="password">Password</label>
              <input type="password" id="regPassword" name="password" />
              <label htmlFor="password">Confirm Password</label>
              <input type="password" id="confirm" name="password" />
              <button type="submit" value="Register">
                Register
              </button>
            </form>
            <p>
              Already have an account?
              <button onClick={() => setFormType("login")}>Login</button>
            </p>
          </>
        )}
      </div>
    </>
  );
};
export default LoginForm;
