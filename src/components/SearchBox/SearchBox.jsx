import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
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
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
