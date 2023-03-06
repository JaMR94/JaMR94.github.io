import React from "react";
import Link from "next/link";

const Cardsection = () => {
  return (
    <div>
       <div className="cards-container">
        <Link href="/DetaillProducts" className="card">
        <div className="">
          <h2>Awesomeness</h2>
          <p>$50.00 USD</p>
        </div>       
        </Link>
        <Link href="/DetaillProducts" className="card">
        <div>
          <h2>Directness</h2>
          <p>$60.00 USD</p>
        </div>      
        </Link>
        <Link href="/DetaillProducts" className="card">
        <div>
          <h2>Simplicity</h2>
          <p>$40.00 USD</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Cardsection;

