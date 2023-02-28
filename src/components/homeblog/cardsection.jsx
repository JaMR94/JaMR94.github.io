import React from "react";

const Cardsection = () => {
  return (
    <div>
      <div className=" container-xl test">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title downer">awesomness</h5>
                <p className="card-text downer font6">$50 usd</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title downer">directness</h5>
                <p className="card-text downer font6">$ 60 usd</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title ">simplicity</h5>
                <p className="card-text font6">$40 usd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsection;
