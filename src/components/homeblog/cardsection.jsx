import React from "react";
import Link from "next/link";

const Cardsection = () => {
  return (
    <div>
       <div className="cards-container">
        <Link href="/DetaillProducts" className="card">
        <div className="">
          <h2 className="claro">Awesomeness</h2>
          <p className="precio">$50.00 USD</p>
        </div>       
        </Link>
        <Link href="/DetaillProducts" className="card">
        <div>
          <h2 className="claro">Directness</h2>
          <p className="precio">$60.00 USD</p>
        </div>      
        </Link>
        <Link href="/DetaillProducts" className="card">
        <div>
          <h2 className="claro">Simplicity</h2>
          <p className="precio">$40.00 USD</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Cardsection;

