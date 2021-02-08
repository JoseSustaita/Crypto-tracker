import styles from "./SearchBar.module.css";

function SearchBar({ ...rest }) {
  return (
    <div className={styles.coin_search}>
      <input
        type="text"
        className="coin-input"
        className={styles.coin_input}
        {...rest}
      />
    </div>
  );
}

export default SearchBar;
