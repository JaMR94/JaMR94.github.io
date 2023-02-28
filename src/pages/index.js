import { Inter } from "@next/font/google";
import Layout from "@/components/Layout";
import Cardsection from "@/components/homeblog/cardsection";
import Features from "@/components/homeblog/features";
import Dreamstore from "@/components/homeblog/Dreamstore";
import Space from "@/components/homeblog/space";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Dreamstore />
      <Space />
      <Features />
      <Cardsection />
    </Layout>
  );
}
