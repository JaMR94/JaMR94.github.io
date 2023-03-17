import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/SearchBar.module.css';
import DetaillProducts from '@/pages/DetaillProducts/[id]';

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://ecommerce-unid.000webhostapp.com/products?search=${query}`);
      const data = await response.json();
      const filteredProducts = data.rows.filter(product =>
        product.product_name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredProducts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedResultIndex(-1);
    router.push(`/DetaillProducts/${product.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
  };

  useEffect(() => {
    if (query.length >= 1) {
      handleSearch();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className={styles["search-bar-container"]}>
      <input className={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} />
      <button className={styles.button} onClick={handleSearch}>Buscar</button>

      {results.length > 0 && (
        <ul className={styles["results-list"]}>
          {results.map((result, index) => (
            <li key={result.id} style={{ color: "black" }} onClick={() => handleProductSelect(result)} onMouseOver={() => setSelectedResultIndex(index)} className={selectedResultIndex === index ? styles["selected-result"] : ""}>
              {result.product_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}