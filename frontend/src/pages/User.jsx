import React from "react";
import Account from "../components/Account";
import ProfileHeader from "../components/ProfileHeader";
import { transactionData } from "../data/data";

const User = () => {
  return (
    <main className="main bg-dark">
      <ProfileHeader />
      <h2 className="sr-only">Accounts</h2>
      {transactionData.map((transaction) => {
        return (
          <Account
            key={"account" + transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            description={transaction.description}
          />
        );
      })}
    </main>
  );
};

export default User;
