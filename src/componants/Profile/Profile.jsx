import React from "react";
import { ShoppingCart,Star } from "lucide-react";
import { Link } from "react-router-dom";

function Profile() {
  const user = {
    name: "sample name",
    username: "sample username",
    email: "sample@email.com",
    avatarUrl:
      "https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000",
  };

  return (
    <div>
      <div>
        <img src={user.avatarUrl} alt={user.name} />
        <div className="user-profile">
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div>
      <ShoppingCart />
        <Link to={'/cart'}>Cart</Link>
        <br />
        <Star />
        <Link to={'/favorite'}>Favourite</Link>
      </div>
    </div>
  );
}

export default Profile;
