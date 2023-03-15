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

// // La función Productos es el componente principal de la página 
// y recibe props como argumento. Este componente llama a los otros 
// componentes importados en su interior para mostrar el contenido.


// console.log(props.users.rows) es una línea de código que imprime 
// en la consola del navegador el contenido de props.users.rows, que 
// son los datos de los productos recuperados de la API.

// La función Productos.getInitialProps es una función estática que 
// utiliza el método fetch para obtener los datos de la API y los devuelve 
// como una propiedad (users) que se puede utilizar en el componente Productos.
//  Esto se hace antes de que la página sea renderizada para que los datos estén 
//  disponibles cuando se renderice la página.

Productos.getInitialProps = async (ctx) =>{
  const res = await fetch('https://ecommerce-unid.000webhostapp.com/products');
  const data = await res.json();
  return {users: data}
}

export default Productos;