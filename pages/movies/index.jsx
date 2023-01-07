import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const index = ({ data }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      <Head>
        <title>Movies</title>
      </Head>
      {data.map((el) => (
        <Link key={el.id} href={`/movies/${el.id}`}>
          <div>
            <img
              height={"200px"}
              width={"300px"}
              src={el.Images[0]}
              alt="alt"
            />
            <h2>{el.Title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("https://movies-database-gold.vercel.app/movies");
  return {
    props: {
      data: res.data,
    },
  };
}

export default index;
