import React from 'react';
import fetch from 'isomorphic-fetch'
import Cardsection from '@/components/Products/cardsection'
import Layout from '@/components/Layouts/Layout'
import ProductsTitle from '@/components/Products/Products_title'
import Menunav from '@/components/Products/menunav'


const Productos = (props) =>{
      // console.log(props)
      console.log(props.users.rows)


  return (
    <main>
      <Layout>
        <ProductsTitle />
       <Menunav />
        <Cardsection  users={props.users}/>
      </Layout>
    </main>
  )
  
}

Productos.getInitialProps = async (ctx) =>{
  const res = await fetch('https://ecommerce-unid.000webhostapp.com/products');
  const data = await res.json();
  return {users: data}
}

export default Productos;