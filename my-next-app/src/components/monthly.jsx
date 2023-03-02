
const Monthly  = () => {

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="suscribe">
                    <h2 className="monthly">Monthly Newsletter</h2>
                    <div className="phrase_news">
                        <p className="news">Sign up to receive updates from our shop, including new tea selections and upcoming events.</p>
                    </div>
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