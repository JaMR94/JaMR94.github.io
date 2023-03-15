// import Link from "next/link";
// import PropTypes from 'prop-types';



// const Destacado = (props) => {
//   return (
//     <div className="cards-container">
//       {Array.isArray(props.users.rows) && props.users.rows.length > 0 ?
//         props.users.rows.map(user => (
//           <Link href="/DetaillProducts" className="card" key={user.id}>
//             <div className="">
//               <h2 className="claro">{user.product_name}</h2>
//               <p className="precio">{user.price}</p>
//             </div>
//           </Link>
//         )) : null
//       }
//     </div> 
//   );
// };

// Destacado.propTypes = {
//   users: PropTypes.shape({
//     rows: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired
//     })).isRequired
//   }).isRequired
// };

// export default Destacado;