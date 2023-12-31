import Blogs from "@/components/Blogs";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import React from "react";
import { Typography } from "antd";


const { Title, Paragraph } = Typography;


const HomePage = ({blogs}) => {



  return (
    <>
      <Head>
        <title>BlogChain</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blogs blogs={blogs} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();

  return {
    props: {
      blogs: data,
    },
  };
};