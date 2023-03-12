import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/footer.module.css';



const Footer  = () => {

    return(
        <footer>
            <div className={styles.container_footer}>
                <div className="row">
                    <div className="col-sm-4 futer">
                        <div className={styles.imgen}>
                            <Link href="/">
                                <Image src="" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-2 seccion">
                        <div className={styles.columna_1}>
                            <h5 className={styles.titulo}>HOME</h5>
                            <p><Link className={styles.item} href="/">Home</Link></p>
                            <p><Link className={styles.item} href="/">About</Link></p>
                            <p><Link className={styles.item} href="/">Contact</Link></p>
                            <p><Link className={styles.item} href="/">Products</Link></p>  
                        </div>
                    </div>
                    <div className="col-sm-2 seccion">
                        <div className={styles.columna_2}>
                            <h5 className={styles.titulo}>CATEGORIE</h5>
                            <p><Link className={styles.item} href="/">Categorie 1</Link></p>
                            <p><Link className={styles.item} href="/">Categorie 2</Link></p>
                            <p><Link className={styles.item} href="/">Categorie 3</Link></p>
                            <p><Link className={styles.item} href="/">Categorie 4</Link></p>
                        </div>
                    </div>
                    <div className="col-sm-2 seccion">
                        <div className={styles.columna_3}>
                            <h5 className={styles.titulo}>HELP</h5>
                            <p><Link className={styles.item} href="/">Shipping</Link></p>
                            <p><Link className={styles.item} href="/">Returns & Exchange</Link></p>
                            <p><Link className={styles.item} href="/">Product Care</Link></p>   
                        </div>
                    </div>
                    <div className="col-sm-2 seccion">
                        <div className={styles.columna_4}>
                            <h5 className={styles.titulo}>FOLLOW</h5>
                            <p><Link className={styles.item} href="">Instagram</Link></p>
                            <p><Link className={styles.item} href="">Facebook</Link></p>
                            <p><Link className={styles.item} href="">Twitter</Link></p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2023</p>
            </div>
        </footer>
    )
}

export default Footer