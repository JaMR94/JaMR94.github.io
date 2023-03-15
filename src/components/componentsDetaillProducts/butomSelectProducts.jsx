import styles from '../../styles/butomSelectProducts.module.css';

const ButomSelectProducts = () => {
    return (
        <div class="container">
        <div class="row">
            <div class="col">
                <input class="form-control form-control-lg" type="text" placeholder="" aria-label=".form-control-lg example" id={styles.SelectQuantity} />
            </div>
            <div class="col">
                <button className={styles.ButtonColor}>Add to Cart</button>
            </div>
            <div class="col">
                {/* <button className={styles.ButtonColor}>Buy now</button> */}
            </div>
        </div>
    </div>
    );
  }
  
  export default ButomSelectProducts