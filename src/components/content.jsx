
const Content = () => {
  return (
    <main>
      {/* Build your dream store*/}
      <div className="dream container ">
        <h1 className="text-center font1">Build your dream store</h1>
        <p className="text-center font2">A simple Webflow Ecommerce template to get you started.</p>
        
        <div className="mid">
          <button className="btn btn-primary" type="button">Explore</button>
        </div>

      </div>
      {/*This is your space*/}
    <div className="container space">
      <h2 className="Espacio ">This is your space</h2>
      <p className="Espacio2 ">Talk about your business, your products, or yourself.</p>
      <hr />
      <div className="container Espacio3">
        <div className="row ">
          <div className="col-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
          <div className="col-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>
      </div> 
    </div>
      
<br />

      {/*Featured Products*/}
      <div className="container feat1">
              <h2 className="text-center">Featured Products</h2>
      <p className="text-center font3 ">Check out new and popular products</p>
      </div>

      
      {/*Card section*/}
      <div className="test">
      <div className="row row-cols-1 row-cols-md-3 g-4">
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

    </main>
  );
}

export default Content;