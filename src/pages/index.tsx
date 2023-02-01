import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { AppContainer } from "@/styles/components/Container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Challenge</title>
        <meta name="description" content="MKS Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContainer>
        <Cart />
        <Navbar />
        <Products />
        <Footer />
      </AppContainer>
    </>
  );
}
