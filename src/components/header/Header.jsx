import React from "react";
import AccountAccessButton from "./button/AccountAccessButton";

export const Header = ({userData, setUserData}) => {
  return (
    <div>
      <header>
        <h1>Simple Trello</h1>
        <AccountAccessButton
          userData={userData}
          setUserData={setUserData}
        />
      </header>
    </div>
  )
}