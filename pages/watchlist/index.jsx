import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const index = ({ watchlist }) => {
  const router = useRouter();
  const handleRemove = async (id) => {
    await axios
      .delete(`http://localhost:8080/watchlist/${id}`)
      .then((el) => router.replace(router.asPath));
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      <Head>
        <title>Watchlist</title>
      </Head>
      {watchlist.map((el) => (
        <div key={el.id} href={`/movies/${el.id}`}>
          <div style={{ textAlign: "center" }}>
            <img
              height={"200px"}
              width={"300px"}
              src={el.Images[0]}
              alt="alt"
            />
            <h2>{el.Title}</h2>
            <button
              onClick={() => handleRemove(el.id)}
              style={{ fontSize: "20px" }}
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios("http://localhost:8080/watchlist");
  return {
    props: {
      watchlist: res.data,
    },
  };
}

export default index;
