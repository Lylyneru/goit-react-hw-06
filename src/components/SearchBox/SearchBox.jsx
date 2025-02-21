import s from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={s.searchBox}>
      <label htmlFor="search" className={s.searchLabel}>
        🔍 Find contacts by name:
      </label>
      <input
        type="text"
        id="search"
        className={s.searchInput}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
