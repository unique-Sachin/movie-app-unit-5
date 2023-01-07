import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <Link
        style={{
          fontSize: "30px",
          border: "2px solid white",
          borderRadius: "6px",
          padding: "5px 10px",
        }}
        href={"/movies"}
      >
        MOVIES
      </Link>
      <Link
        style={{
          fontSize: "30px",
          border: "2px solid white",
          borderRadius: "6px",
          padding: "5px 10px",
        }}
        href={"/watchlist"}
      >
        WATCHLIST
      </Link>
    </div>
  );
};

export default Navbar;
