import Link from "next/link"; 
import PropTypes from 'prop-types'; // Importamos la librería prop-types para validar las propiedades que recibimos
import { Router } from "next/router";

const Cardsection = (props) => {
  return (
    <div className="cards-container">
      {Array.isArray(props.users.rows) && props.users.rows.length > 0 ?
        props.users.rows.map(user => (
          <Link href={`/DetaillProducts/${user.id}`} className="card" key={user.id} >
          {/* Usamos el componente Link de Next.js y definimos el href con la ruta dinámica "/user/[id]" y el as con la ruta completa a la que se debe redirigir. Agregamos también el className y el key de cada elemento*/}
            <div className="">
              <h2 className="claro">{user.product_name}</h2>
              <p id="desc_corta">{user.short_desc}</p>
              <p className="precio">${user.price} MXN</p>
            </div>
          </Link>
        )) : null
      }
    </div> 
  );
};

Cardsection.propTypes = {
  users: PropTypes.shape({
    rows: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  }).isRequired // Validamos que users sea un objeto con una propiedad "rows" que sea un array de objetos con las propiedades "id" y "name" requeridas
};

export default Cardsection; // Exportamos el componente Cardsection
