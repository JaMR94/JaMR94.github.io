const Footer  = () => {

    return(
        <div className="footer">
            <div className="footer_img">
                <image src="" alt="Logo" />
            </div>
            <div className="footer-text">
                <div className="item">
                    <ul>
                        <li className="list">MENU</li>
                        <link href="/home"/><p className="item-title">Home</p>
                        <link href="/about"/><p className="item-title">About</p>
                        <link href="/contact"/><p className="item-title">Contact</p>
                        <link href="/products"/><p className="item-title">Products</p>
                        <link href="/blog"/><p className="item-title">Blog</p>
                        <link href="/styleguide"/><p className="item-title">Styleguide</p>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li className="list">CATEGORIES</li>
                        <link href="/categorie"/><p className="item-title">Categorie 1</p>
                        <link href="/categorie"/><p className="item-title">Categorie 2</p>
                        <link href="/categorie"/><p className="item-title">Categorie 3</p>
                        <link href="/categorie"/><p className="item-title">Categorie 4</p>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li className="list">HELP</li>
                        <link href=""/><p className="item-title">Shipping</p>
                        <link href=""/><p className="item-title">Returns & Exchange</p>
                        <link href=""/><p className="item-title">Product Care</p>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li className="list">FOLLOW</li>
                        <link href=""/><p className="item-title">Instagram</p>
                        <link href=""/><p className="item-title">Facebook</p>
                        <link href=""/><p className="item-title">Twitter</p>
                    </ul>  
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2023</p>
            </div>
        </div>
    )
}

export default Footer