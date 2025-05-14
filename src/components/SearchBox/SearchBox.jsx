import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={css.search}
      type="text"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Find contacts by name"
    />
  );
};

export default SearchBox;
