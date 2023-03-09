import styles from '../../styles/butomSelectProducts.module.css';

const DescriptionProdicts = () => {
    return (
        <div class="row">
        <div class="col">
            <p className={styles.LetterP}>Dimensions</p>
            <p className={styles.LetterP}>Weight</p>
        </div>
        <div class="col">
            <p>14 in x 12 in x 15 in</p>
            <p>19 oz</p>
        </div>
    </div>
    );
  }
  
  export default DescriptionProdicts