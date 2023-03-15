import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

  const handleSearch = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    try {
      const response = await axios.get(url);
      const data = response.data.items;
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedResultIndex(-1);
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
        <ul style={{ listStyle: "none", background: "#ccc" }}>
          {results.map((result, index) => (
            <li
              key={result.id}
              style={{ color: "black" }}
              onClick={() => handleProductSelect(result)}
              onMouseOver={() => setSelectedResultIndex(index)}
              className={selectedResultIndex === index ? styles["selected-result"] : ""}
            >
              {result.volumeInfo.title}
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && (
        <div>
          <h2>{selectedProduct.volumeInfo.title}</h2>
          <p>{selectedProduct.volumeInfo.description}</p>
          <img src={selectedProduct.volumeInfo.imageLinks.thumbnail} alt={selectedProduct.volumeInfo.title} />
        </div>
      )}
    </div>
  );
}