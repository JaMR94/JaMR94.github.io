import Link from 'next/link'
import Image from 'next/image'


const Footer  = () => {

    return(
        <footer>
            
            <div className="container footer">    
                <div className="row">
                    <div className="col-lg-4">
                        <div className="imgen">
                            <Link href="/">
                                <Image src="" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-log-2 list">
                        <div className="columna">
                            <h5 className="title-item">HOME</h5>
                            <p><Link className="item" href="/">Home</Link></p>
                            <p><Link className="item" href="/">About</Link></p>
                            <p><Link className="item" href="/">Contact</Link></p>
                            <p><Link className="item" href="/">Products</Link></p>  
                        </div>
                    </div>
                    <div className="col-log-2 list">
                        <div className="columna">
                            <h5 className="title-item">CATEGORIE</h5>
                            <p><Link className="item" href="/">Categorie 1</Link></p>
                            <p><Link className="item" href="/">Categorie 2</Link></p>
                            <p><Link className="item" href="/">Categorie 3</Link></p>
                            <p><Link className="item" href="/">Categorie 4</Link></p>
                        </div>
                    </div>
                    <div className="col-log-2 list">
                        <div className="columna">
                            <h5 className="title-item">HELP</h5>
                            <p><Link className="item" href="/">Shipping</Link></p>
                            <p><Link className="item" href="/">Returns & Exchange</Link></p>
                            <p><Link className="item" href="/">Product Care</Link></p>   
                        </div>
                    </div>
                    <div className="col-log-2 list">
                        <div className="columna">
                            <h5 className="title-item">FOLLOW</h5>
                            <p><Link className="item" href="">Instagram</Link></p>
                            <p><Link className="item" href="">Facebook</Link></p>
                            <p><Link className="item" href="">Twitter</Link></p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2023</p>
            </div>
        </footer>
    )
}

export default Footer