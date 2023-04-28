import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const single = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>pages de premier post</title>
      </Head>
      <Layout>
        <div className="single-post">
          <Image src="/images/img-ayoub-removebg-preview.png" width={100} height={100} alt="foto" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            iste ipsam nihil vero minus suscipit, aperiam provident sequi labore
            earum laborum fugit corrupti dicta delectus.
          </p>
        </div>
        <p></p>
      </Layout>
    </>
  );
};
export async function getSaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return {
    props: {
      data
    }
  }

}

export default single;
