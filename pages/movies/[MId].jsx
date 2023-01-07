import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Page = ({ data }) => {
  const router = useRouter();
  const handleAddtoWatchList = async () => {
    await axios
      .post("http://localhost:8080/watchlist", data)
      .then((res) => {
        alert("success");
        router.push("/watchlist");
      })
      .catch((er) => console.log(er));
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Head>
        <title>{data.Title}</title>
      </Head>
      <h1 style={{ fontSize: "50px" }}>{data.Title}</h1>
      <div style={{ display: "flex" }}>
        <Image height="200" width="300" src={data.Images[0]} alt="alt" />
        <Image height="200" width="300" src={data.Images[1]} alt="alt" />
        <Image height="200" width="300" src={data.Images[2]} alt="alt" />
      </div>

      <button onClick={handleAddtoWatchList} style={{ fontSize: "30px" }}>
        ADD TO WATCHLIST
      </button>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { MId } = context.params;
  const res = await axios(
    `https://movies-database-gold.vercel.app/movies/${MId}`
  );
  // const data = await res.json();
  return {
    props: {
      data: res.data,
    },
  };
}

export default Page;
