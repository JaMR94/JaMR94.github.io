
const Content = () => {
  return (
    <main>
      {/* Build your dream store*/}
      <div className="dream container ">
        <h1 className="text-center uwu">Build your dream store</h1>
        <p className="text-center uwu">A simple Webflow Ecommerce template to get you started.</p>
        
        <div className="mid">
          <button className="btn btn-primary" type="button">Button</button>
        </div>

      </div>
      {/*This is your space*/}
    <div className="space container p-4">
      <h2 className="uwu">This is your space</h2>
      <h5 className="uwu">Talk about your business, your products, or yourself.</h5>
      <div className="container">
        <div className="row ">
          <div className="col-5 uwu ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
          <div className="col-5 uwu">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>
      </div> 
    </div>
      
<br />

      {/*Featured Products*/}
      <h2 className="text-center uwu">Featured Products</h2>
      <p className="text-center uwu">Check out new and popular products</p>
      
      {/*Card section*/}
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title downer">Card title</h5>
              <p className="card-text downer">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">           
            <div className="card-body">
              <h5 className="card-title downer">Card title</h5>
              <p className="card-text downer">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title ">Card title</h5>
              <p className="card-text text   ">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

    </main>
  );
}

export default Content;
