import Layout from '@/components/Layouts/Layout'
import Inicio from '@/components/homeblog/inicio'
import Features from '@/components/homeblog/features'
import Space from '@/components/homeblog/space'
// import Destacado from '@/components/homeblog/destacado'
import Cardsection from '@/components/Products/cardsection'
import fetch from 'isomorphic-fetch'
import { Inter } from '@next/font/google'

const Index = (props) =>{
  // console.log(props)
  console.log(props.users.rows)


return (
<main>
  <Layout>
    <Inicio/>
    <Space/>
    <Features/>
    <Cardsection users={props.users}/>
    {/* <Destacado  users={props.users}/> */}
  </Layout>
</main>
)

}

Index.getInitialProps = async (ctx) =>{
  const res = await fetch('https://ecommerce-unid.000webhostapp.com/products');
  const data = await res.json();
  return {users: data}
}

export default Index;