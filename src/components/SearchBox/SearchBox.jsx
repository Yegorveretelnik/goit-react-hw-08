import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors.js";
import { changeFilter } from "../../redux/filters/slice.js";
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
