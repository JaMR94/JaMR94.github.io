import Link from "next/link";
import PropTypes from 'prop-types';
import { Router } from "next/router";

const Cardsection = (props) => {
  return (
    <div className="cards-container">
      {Array.isArray(props.users.rows) && props.users.rows.length > 0 ?
        props.users.rows.map(user => (
          <Link href="/user/[id]" as={`/DetaillProducts/${user.id}`} className="card" key={user.id} onClick={(e) => Router.push('/DetaillProducts/[id]', `/DetaillProducts/${user.id}`)}>
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
  }).isRequired
};

export default Cardsection;

