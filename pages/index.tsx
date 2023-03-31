import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-commerceApp</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <Layout />
    </div>
  );
}
