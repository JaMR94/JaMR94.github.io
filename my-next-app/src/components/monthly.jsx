


const Monthly  = () => {

    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-6">
                    <div className="suscribe">
                        <h1>Monthly Newsletter</h1>
                    </div>                
                </div> 
                    <div className="col-lg-2 phrase_news">
                        <p className="news">Sign up to receive updates from our shop, including new tea selections and upcoming events.</p>
                    </div>

            </div>
            <div className="row">
                <div className="col">
                    <form className="news">
                    <input type="text" className="enteremail" id="enteremail" placeholder="Enter your email"/>
                    <button type="submit" className="submit">SUBMIT</button>
                    </form>
                </div>
            </div>     
        </div> 
    
    )
}

export default Monthly