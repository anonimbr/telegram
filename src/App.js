import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import Telegram from "./components/Telegram";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./styles.css";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch(
          login({
            uid: authuser.uid,
            photo: authuser.photoURL,
            email: authuser.email,
            displayName: authuser.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {/* {user ? <Telegram /> : <Login />} */}
      <Telegram />
    </div>
  );
}
