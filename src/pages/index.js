import Layout from '@/components/Layouts/Layout'
import Inicio from '@/components/homeblog/inicio'
import Features from '@/components/homeblog/features'
import Space from '@/components/homeblog/space'
import Cardsection from '@/components/Products/cardsection'
import fetch from 'isomorphic-fetch'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router';

const Index = (props) => {
  const router = useRouter();

  if (!props.users) {
    router.reload();
    return null;
  }

  return (
    <main>
      <Layout>
        <Inicio />
        <Space />
        <Features />
        <Cardsection users={props.users} />
      </Layout>
    </main>
  );
};

Index.getInitialProps = async (ctx) => {
  try {
    const res = await fetch('https://ecommerce-unid.000webhostapp.com/products');
    const data = await res.json();
    return { users: data };
  } catch (error) {
    console.error(error);
    return { users: null };
  }
};

export default Index;