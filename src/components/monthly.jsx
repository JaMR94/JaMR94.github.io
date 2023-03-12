import styles from '../styles/monthly.module.css';


const Monthly  = () => {

    return(
        <div className="container-fluid Moana">
            <div className="row">
                <div className={styles.suscribe}>
                    <h2 className={styles.monthly}>Monthly Newsletter</h2>
                    <div className={styles.phrase_news}>
                        <p className={styles.news}>Sign up to receive updates from our shop, including new tea selections and upcoming events.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form className={styles.email}>
                    <input type="text" className={styles.enteremail} id="enteremail" placeholder="Enter your email"/>
                    <button type="submit" className={styles.submit}>SUBMIT</button>
                    </form>
                </div>
            </div>     
        </div> 
    
    )
}

export default Monthly