import styles from '../../styles/butomSelectProducts.module.css';

const SelectDescriptionProducts = () => {
    return (
        <>
            <p>COLOUR</p>
            <select class="form-select" aria-label="Default select example" id={styles.Select}>
                <option selected>select color</option>
                <option value="1">white</option>
                <option value="2">grey</option>
                <option value="3">blak</option>
            </select>
            <p>QUANTITY</p>
        </>
    );
  }
  
  export default SelectDescriptionProducts