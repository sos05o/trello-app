import React, {useEffect, useState} from 'react';
import {provider} from "../../../Firebase";
import {getAuth, GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged} from "firebase/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const AccountAccessButton = ({userData, setUserData}) => {
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUserData(user);
    })
  })

  const handleLoginCheck = async () => {
    console.log('click');
    try {
      const result = await signInWithRedirect(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  }

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch(err => {
      // An error happened.
    })
  }

  const loginButton = (
    <button className={"accountAccessButton"} onClick={handleLoginCheck}>
      <FontAwesomeIcon icon={faArrowRightToBracket} />
    </button> );
  const logoutButton = (
    <button className={"accountAccessButton logoutButton"} onClick={handleLogout}>
      <img className={"loginUserDataImg"} src={userData?.photoURL} alt={"ログイン時に使用したGoogleアカウントで適用されている画像"}/>
    </button> )

  return (
    <div className={"userDataArea"}>
      <p className={"userId"}>
        UID : {userData && userData.uid}
      </p>
      {userData ? logoutButton : loginButton}
    </div>
  );
};

export default AccountAccessButton;