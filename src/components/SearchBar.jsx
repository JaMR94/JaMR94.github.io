import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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
  
  return (
    <div className={styles["search-bar-container"]}>
      <input className={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className={styles.button} onClick={handleSearch}>Buscar</button>

      <ul style={{ listStyle: "none", background: "#ccc" }}>
        {results.map((result) => (
          <li key={result.id} style={{ color: "black"}}>{result.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}