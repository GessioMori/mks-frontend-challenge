import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { AppContainer } from "@/styles/components/Container";

export default function Home() {
  return (
    <AppContainer>
      <Cart />
      <Navbar />
      <Products />
      <Footer />
    </AppContainer>
  );
}
