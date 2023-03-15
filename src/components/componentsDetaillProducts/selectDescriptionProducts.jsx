import styles from '../../styles/butomSelectProducts.module.css';

const SelectDescriptionProducts = () => {
    return (
        <>
            <p>COLOUR</p>
            <select class="form-select" aria-label="Default select example" id={styles.Select}>
                <option selected>Select color</option>
                <option value="1">White</option>
                <option value="2">Gray</option>
                <option value="3">Black</option>
            </select>
            <p>QUANTITY</p>
        </>
    );
  }
  
  export default SelectDescriptionProducts